import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { client, stream } from "../lib/cilroy";
import AsyncBlockingQueue from "../lib/queue";
import useStateRef from "../hooks/useStateRef";

type StreamContextType<
  M extends AsyncIterable<string>,
  E extends AsyncIterable<any>,
  C extends AsyncIterable<void>
> = {
  messages: { [key: string]: M };
  getErrorQueue: () => E;
  getConnectQueue: () => C;
};

const StreamsContext = createContext<
  StreamContextType<
    AsyncIterable<string>,
    AsyncIterable<any>,
    AsyncIterable<void>
  >
>({
  messages: {},
  getErrorQueue: () => (async function* () {})(),
  getConnectQueue: () => (async function* () {})(),
});

export type StreamsProviderProps = {
  children: ReactNode;
};

export function StreamsProvider({ children }: StreamsProviderProps) {
  const [messageStreams, setMessageStreams] = useStateRef<{
    [key: string]: AsyncBlockingQueue<string>;
  }>({});
  const [, setErrorQueues, errorQueuesRef] = useStateRef<
    Array<AsyncBlockingQueue<any>>
  >([]);
  const [, setConnectQueues, connectQueuesRef] = useStateRef<
    Array<AsyncBlockingQueue<void>>
  >([]);

  useEffect(() => {
    const method = client.watchAll;
    const onError = (e: any) =>
      errorQueuesRef.current.forEach((q) => q.enqueue(e));
    const onConnect = () =>
      connectQueuesRef.current.forEach((q) => q.enqueue());

    const { result, abort } = stream({
      method: method,
      reconnectOptions: {
        onError: onError,
        onConnect: onConnect,
      },
    });

    const fetchStreams = async () => {
      for await (const response of result) {
        setMessageStreams((streams) => {
          const newStreams = { ...streams };
          const method = response.method;
          const message = response.message;
          newStreams[method] = newStreams[method] || new AsyncBlockingQueue();
          newStreams[method].enqueue(message);
          return newStreams;
        });
      }
    };
    fetchStreams().then();

    return abort;
  }, []);

  const getErrorQueue = useCallback(() => {
    const queue = new AsyncBlockingQueue<any>();
    setErrorQueues((queues) => [...queues, queue]);
    return queue;
  }, []);

  const getConnectQueue = useCallback(() => {
    const queue = new AsyncBlockingQueue<void>();
    setConnectQueues((queues) => [...queues, queue]);
    return queue;
  }, []);

  const streams = {
    messages: messageStreams,
    getErrorQueue: getErrorQueue,
    getConnectQueue: getConnectQueue,
  };

  return <StreamsContext.Provider value={streams} children={children} />;
}

export function useStreams() {
  const context = useContext(StreamsContext);
  if (context === undefined) {
    throw new Error("useStreams must be used within a StreamsProvider");
  }
  return context;
}

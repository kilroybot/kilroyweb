import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import cilroy from "../lib/cilroy";
import AsyncBlockingQueue from "../lib/queue";

type StreamContextType<T extends AsyncIterable<string>> = {
  [key: string]: T;
};

const StreamsContext = createContext<StreamContextType<AsyncIterable<string>>>(
  {}
);

export type StreamsProviderProps = {
  children: ReactNode;
};

export function StreamsProvider({ children }: StreamsProviderProps) {
  const [streams, setStreams] = useState<
    StreamContextType<AsyncBlockingQueue<string>>
  >({});

  useEffect(() => {
    const abort = new AbortController();
    const fetchStreams = async () => {
      for await (const response of cilroy.watchAll(
        {},
        { signal: abort.signal }
      )) {
        setStreams((streams) => {
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
    return () => abort.abort();
  }, [cilroy]);

  return <StreamsContext.Provider value={streams} children={children} />;
}

export function useStreams() {
  const context = useContext(StreamsContext);
  if (context === undefined) {
    throw new Error("useStreams must be used within a StreamsProvider");
  }
  return context;
}

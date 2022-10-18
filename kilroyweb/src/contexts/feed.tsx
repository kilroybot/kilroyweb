import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { client, request } from "../lib/cilroy";
import { Post, WatchFeedResponse } from "../lib/protobuf";
import { useStreams } from "./streams";

export type FeedContextType = {
  posts?: Post[];
};

const FeedContext = createContext<FeedContextType>({});

export type FeedProviderProps = {
  children: ReactNode;
};

export function FeedProvider({ children }: FeedProviderProps) {
  const [posts, setPosts] = useState<Post[]>();

  const { messages, getConnectQueue } = useStreams();
  const { WatchFeed: stream } = messages;

  useEffect(() => {
    const method = client.getFeed;
    const { result, abort } = request({ method });
    result.then((response) => setPosts(response.posts));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getFeed,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        setPosts(response.posts);
      }
    };
    fetch().then();

    return abortCallback;
  }, [client, getConnectQueue]);

  useEffect(() => {
    if (stream === undefined) return;

    const fetch = async () => {
      for await (const message of stream) {
        const response = WatchFeedResponse.fromJsonString(message);
        setPosts((prev) => {
          if (prev === undefined) return [response.post];
          console.log(prev);
          const neww = [...prev, response.post];
          console.log(neww);
          return neww;
        });
      }
    };
    fetch().then();
  }, [stream === undefined]);

  const feed = { posts };

  return <FeedContext.Provider value={feed} children={children} />;
}

export function useFeed() {
  const context = useContext(FeedContext);
  if (context === undefined) {
    throw new Error("useFeed must be used within a FeedProvider");
  }
  return context;
}

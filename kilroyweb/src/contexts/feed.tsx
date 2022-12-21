import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { client, stream } from "../lib/cilroy";
import { WatchFeedResponse } from "../lib/protobuf";
import { useStreams } from "./streams";

export type FeedPostData = {
  id: string;
  url?: string;
  content: string;
  createdAt: string;
};

export type FeedContextType = {
  posts?: FeedPostData[];
};

const FeedContext = createContext<FeedContextType>({});

export type FeedProviderProps = {
  children: ReactNode;
};

export function FeedProvider({ children }: FeedProviderProps) {
  const [posts, setPosts] = useState<FeedPostData[]>();

  const { messages, getConnectQueue } = useStreams();
  const { WatchFeed: feedStream } = messages;

  useEffect(() => {
    const method = client.getFeed;
    const { result, abort } = stream({
      method,
      reconnectOptions: { infinite: false },
    });

    const fetch = async () => {
      for await (const response of result) {
        const post = {
          id: response.id,
          url: response.url,
          content: response.content,
          createdAt: response.createdAt,
        };
        setPosts((prev) => {
          if (prev === undefined) return [post];
          return [...prev, post];
        });
      }
    };
    fetch().then();
    return () => abort.abort();
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = stream({
          method: client.getFeed,
          reconnectOptions: {
            retriesLeft: 3,
            infinite: false,
          },
        });
        abortCallback = () => abort.abort();

        for await (const response of result) {
          const post = {
            id: response.id,
            url: response.url,
            content: response.content,
            createdAt: response.createdAt,
          };
          setPosts((prev) => {
            if (prev === undefined) return [post];
            return [...prev, post];
          });
        }
      }
    };
    fetch().then();

    return () => abortCallback();
  }, [client, getConnectQueue]);

  useEffect(() => {
    if (feedStream === undefined) return;

    const fetch = async () => {
      for await (const message of feedStream) {
        const response = WatchFeedResponse.fromJsonString(message);
        const post = {
          id: response.id,
          url: response.url,
          content: response.content,
          createdAt: response.createdAt,
        };
        setPosts((prev) => {
          if (prev === undefined) return [post];
          return [...prev, post];
        });
      }
    };
    fetch().then();
  }, [feedStream === undefined]);

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

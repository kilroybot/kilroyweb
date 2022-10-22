import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { client, request } from "../lib/cilroy";

type PostSchemaContextType = {
  schema?: Object;
};

const PostSchemaContext = createContext<PostSchemaContextType>({});

export type PostSchemaProviderProps = {
  children: ReactNode;
};

export function PostSchemaProvider({ children }: PostSchemaProviderProps) {
  const [schema, setSchema] = useState<Object>();

  useEffect(() => {
    const method = client.getFacePostSchema;
    const { result, abort } = request({ method });

    result.then((response) => setSchema(JSON.parse(response.schema)));

    return () => abort.abort();
  }, [client]);

  const postSchema = { schema };

  return <PostSchemaContext.Provider value={postSchema} children={children} />;
}

export function usePostSchema() {
  const context = useContext(PostSchemaContext);
  if (context === undefined) {
    throw new Error("usePostSchema must be used within a PostSchemaProvider");
  }
  return context;
}

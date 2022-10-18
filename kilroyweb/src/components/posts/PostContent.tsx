import * as React from "react";
import GenericPostContent from "./GenericPostContent";
import { usePostSchema } from "../../contexts/postSchema";
import { Loader } from "@mantine/core";
import Center from "../Center";
import TextOrImagePostContent from "./TextOrImagePostContent";

export type PostContentProps = {
  content: Object;
};

const knownSchemaComponents = {
  TextOrImagePost: TextOrImagePostContent,
};

export default function PostContent({ content }: PostContentProps) {
  const { schema } = usePostSchema();

  if (schema === undefined)
    return (
      <Center>
        <Loader />
      </Center>
    );

  const schemaTitle = schema["title"];
  const Component = schemaTitle
    ? knownSchemaComponents[schemaTitle]
    : undefined;

  if (Component === undefined) return <GenericPostContent content={content} />;

  return <Component content={content} />;
}

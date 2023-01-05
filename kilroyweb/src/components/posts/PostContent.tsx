import * as React from "react";
import GenericPostContent from "./GenericPostContent";
import { usePostSchema } from "../../contexts/postSchema";
import { Loader } from "@mantine/core";
import Center from "../Center";
import TextOrImagePostContent from "./TextOrImagePostContent";
import TextOnlyPostContent from "./TextOnlyPostContent";
import ImageOnlyPostContent from "./ImageOnlyPostContent";
import TextAndImagePostContent from "./TextAndImagePostContent";
import TextWithOptionalImagePostContent from "./TextWithOptionalImagePostContent";
import ImageWithOptionalTextPostContent from "./ImageWithOptionalTextPostContent";

export type PostContentProps = {
  content: Object;
};

const knownSchemaComponents = {
  TextOnlyPost: TextOnlyPostContent,
  ImageOnlyPost: ImageOnlyPostContent,
  TextAndImagePost: TextAndImagePostContent,
  TextOrImagePost: TextOrImagePostContent,
  TextWithOptionalImagePost: TextWithOptionalImagePostContent,
  ImageWithOptionalTextPost: ImageWithOptionalTextPostContent,
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

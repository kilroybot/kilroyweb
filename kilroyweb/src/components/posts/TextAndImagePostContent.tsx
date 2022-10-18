import { Stack } from "@mantine/core";
import TextDisplay from "./TextDisplay";
import ImageDisplay from "./ImageDisplay";

export type TextAndImagePostContentProps = {
  content: {
    text: {
      content: string;
    };
    image: {
      raw: string;
      filename: string;
    };
  };
};

export default function TextAndImagePostContent({
  content,
}: TextAndImagePostContentProps) {
  return (
    <Stack>
      <TextDisplay text={content.text.content} />
      <ImageDisplay src={content.image.raw} alt={content.image.filename} />
    </Stack>
  );
}

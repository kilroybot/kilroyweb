import { Stack } from "@mantine/core";
import TextDisplay from "./TextDisplay";
import ImageDisplay from "./ImageDisplay";

export type TextOrImagePostContentProps = {
  content: {
    text?: {
      content: string;
    };
    image?: {
      raw: string;
      filename: string;
    };
  };
};

export default function TextOrImagePostContent({
  content,
}: TextOrImagePostContentProps) {
  return (
    <Stack>
      {content.text && <TextDisplay text={content.text.content} />}
      {content.image && (
        <ImageDisplay src={content.image.raw} alt={content.image.filename} />
      )}
    </Stack>
  );
}

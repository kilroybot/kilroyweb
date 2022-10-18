import { Stack } from "@mantine/core";
import TextDisplay from "./TextDisplay";
import ImageDisplay from "./ImageDisplay";

export type ImageWithOptionalTextPostContentProps = {
  content: {
    text?: {
      content: string;
    };
    image: {
      raw: string;
      filename: string;
    };
  };
};

export default function ImageWithOptionalTextPostContent({
  content,
}: ImageWithOptionalTextPostContentProps) {
  return (
    <Stack>
      {content.text && <TextDisplay text={content.text.content} />}
      <ImageDisplay src={content.image.raw} alt={content.image.filename} />
    </Stack>
  );
}

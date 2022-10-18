import { Stack } from "@mantine/core";
import ImageDisplay from "./ImageDisplay";

export type ImageOnlyPostContentProps = {
  content: {
    image: {
      raw: string;
      filename: string;
    };
  };
};

export default function ImageOnlyPostContent({
  content,
}: ImageOnlyPostContentProps) {
  return (
    <Stack>
      <ImageDisplay src={content.image.raw} alt={content.image.filename} />
    </Stack>
  );
}

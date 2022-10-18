import { Stack } from "@mantine/core";
import TextDisplay from "./TextDisplay";

export type TextOnlyPostContentProps = {
  content: {
    text: {
      content: string;
    };
  };
};

export default function TextOnlyPostContent({
  content,
}: TextOnlyPostContentProps) {
  return (
    <Stack>
      <TextDisplay text={content.text.content} />
    </Stack>
  );
}

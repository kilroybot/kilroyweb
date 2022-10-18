import { Prism } from "@mantine/prism";

export type GenericPostContentProps = {
  content: Object;
};

export default function GenericPostContent({
  content,
}: GenericPostContentProps) {
  return <Prism language="json">{JSON.stringify(content, null, 2)}</Prism>;
}

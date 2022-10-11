import { Loader, Text, Title } from "@mantine/core";
import { useLabels } from "../contexts/labels";
import Center from "./Center";
import { useMetadata } from "../contexts/metadata";
import { useStatus } from "../contexts/status";
import { Status } from "../lib/protobuf";

export type MetadataSummaryProps = {};

export default function MetadataSummary(props: MetadataSummaryProps) {
  const { face: faceMetadata, module: moduleMetadata } = useMetadata();
  const { face: faceStatus, module: moduleStatus } = useStatus();
  const labels = useLabels();

  if (
    faceMetadata === undefined ||
    moduleMetadata === undefined ||
    faceStatus === Status.UNSPECIFIED ||
    moduleStatus === Status.UNSPECIFIED
  )
    return (
      <Center>
        <Loader />
      </Center>
    );

  return (
    <>
      <Title order={4}>{labels.index.metadata.face}</Title>
      <Text size="sm">{faceMetadata.key}</Text>
      <Title order={4}>{labels.index.metadata.module}</Title>
      <Text size="sm">{moduleMetadata.key}</Text>
    </>
  );
}

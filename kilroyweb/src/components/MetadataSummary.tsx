import { useEffect, useState } from "react";
import {
  GetFaceMetadataResponse,
  GetModuleMetadataResponse,
} from "../lib/protobuf";
import cilroy from "../lib/cilroy";
import { Loader, Text, Title } from "@mantine/core";
import { useLabels } from "../contexts/labels";
import Center from "./Center";

type Metadata = {
  key: string;
  description: string;
};

export type MetadataSummaryProps = {};

export default function MetadataSummary(props: MetadataSummaryProps) {
  const [faceMetadata, setFaceMetadata] = useState<Metadata>();
  const [moduleMetadata, setModuleMetadata] = useState<Metadata>();

  const labels = useLabels();

  useEffect(() => {
    cilroy.getFaceMetadata({}).then((response: GetFaceMetadataResponse) => {
      setFaceMetadata({
        key: response.key,
        description: response.description,
      });
    });
  }, [cilroy]);

  useEffect(() => {
    cilroy.getModuleMetadata({}).then((response: GetModuleMetadataResponse) => {
      setModuleMetadata({
        key: response.key,
        description: response.description,
      });
    });
  }, [cilroy]);

  if (faceMetadata === undefined || moduleMetadata === undefined)
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

import * as React from "react";
import { useCallback } from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import { useConfig } from "../contexts/config";
import Center from "../components/Center";
import { Button, Loader, Title } from "@mantine/core";
import Segment from "../components/Segment";
import { useConfigSchema } from "../contexts/configSchema";
import SchemaBasedForm from "../components/SchemaBasedForm";
import { objectDiff } from "../lib/utils";
import { client, request } from "../lib/cilroy";
import { useStatus } from "../contexts/status";
import { Status } from "../lib/protobuf";

export default function Face() {
  const labels = useLabels();
  const { face: config } = useConfig();
  const { face: schema } = useConfigSchema();
  const { face: faceStatus, controller: controllerStatus } = useStatus();

  const handleSubmit = useCallback(
    async (data) => {
      const diff = objectDiff(data, config);
      if (diff !== null) {
        const { result, abort } = request({
          method: client.setFaceConfig,
          params: { config: JSON.stringify(diff) },
          retryOptions: { retriesLeft: 3 },
        });
        await result;
        return () => abort.abort();
      }
    },
    [client, config]
  );

  const handleReset = useCallback(async () => {
    const { result, abort } = request({
      method: client.resetFace,
      params: {},
      retryOptions: { retriesLeft: 3 },
    });
    await result;
    return () => abort.abort();
  }, [client]);

  return (
    <>
      <Head>
        <title>{labels.face.title}</title>
      </Head>
      <PageLayout page="face">
        <Segment>
          {config &&
          schema &&
          faceStatus !== Status.UNSPECIFIED &&
          controllerStatus !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.face.config.title}</Title>
              <SchemaBasedForm
                schema={schema}
                data={config}
                onSubmit={handleSubmit}
              />
            </>
          ) : (
            <Center>
              <Loader />
            </Center>
          )}
        </Segment>
        <Segment>
          {faceStatus !== Status.UNSPECIFIED &&
          controllerStatus !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.face.dangerZone.title}</Title>
              <Button
                onClick={handleReset}
                loading={
                  faceStatus !== Status.READY ||
                  controllerStatus !== Status.READY
                }
              >
                {labels.face.dangerZone.buttons.reset}
              </Button>
            </>
          ) : (
            <Center>
              <Loader />
            </Center>
          )}
        </Segment>
      </PageLayout>
    </>
  );
}

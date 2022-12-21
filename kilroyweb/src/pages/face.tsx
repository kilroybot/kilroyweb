import * as React from "react";
import { useCallback } from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import { useConfig } from "../contexts/config";
import Center from "../components/Center";
import { Button, Loader, Stack, Title } from "@mantine/core";
import Segment from "../components/Segment";
import { useConfigSchema } from "../contexts/configSchema";
import SchemaBasedForm from "../components/SchemaBasedForm";
import { objectDiff } from "../lib/utils";
import { client } from "../lib/cilroy";
import { useStatus } from "../contexts/status";
import { Status } from "../lib/protobuf";
import useRequestCallback from "../hooks/useRequestCallback";

export default function Face() {
  const labels = useLabels();
  const { face: config } = useConfig();
  const { face: schema } = useConfigSchema();
  const { face: faceStatus, controller: controllerStatus } = useStatus();

  const { callback: setConfig, loading: setConfigLoading } = useRequestCallback(
    client.setFaceConfig
  );
  const { callback: save, loading: saveLoading } = useRequestCallback(
    client.saveFace
  );
  const { callback: reset, loading: resetLoading } = useRequestCallback(
    client.resetFace
  );

  const handleSubmit = useCallback(
    async (data) => {
      const diff = objectDiff(data, config);
      if (diff !== null) {
        await setConfig({ params: { config: JSON.stringify(diff) } });
      }
    },
    [client, config]
  );

  const handleSave = useCallback(async () => {
    await save();
  }, [client]);

  const handleReset = useCallback(async () => {
    await reset();
  }, [client]);

  return (
    <>
      <Head>
        <title>{labels.pages.face.title}</title>
      </Head>
      <PageLayout page="face">
        <Segment>
          {config &&
          schema &&
          faceStatus !== Status.UNSPECIFIED &&
          controllerStatus !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.pages.face.config.title}</Title>
              <SchemaBasedForm
                schema={schema}
                data={config}
                submit={{
                  label: labels.pages.face.config.buttons.submit,
                  loading:
                    faceStatus !== Status.READY ||
                    controllerStatus !== Status.READY ||
                    setConfigLoading,
                  onSubmit: handleSubmit,
                }}
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
            <Stack>
              <Title order={4}>{labels.pages.face.dangerZone.title}</Title>
              <Button
                onClick={handleSave}
                loading={
                  faceStatus !== Status.READY ||
                  controllerStatus !== Status.READY ||
                  saveLoading
                }
              >
                {labels.pages.face.dangerZone.buttons.save}
              </Button>
              <Button
                onClick={handleReset}
                loading={
                  faceStatus !== Status.READY ||
                  controllerStatus !== Status.READY ||
                  resetLoading
                }
              >
                {labels.pages.face.dangerZone.buttons.reset}
              </Button>
            </Stack>
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

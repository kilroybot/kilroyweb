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

export default function Module() {
  const labels = useLabels();
  const { module: config } = useConfig();
  const { module: schema } = useConfigSchema();
  const { module: moduleStatus, controller: controllerStatus } = useStatus();

  const { callback: setConfig, loading: setConfigLoading } = useRequestCallback(
    client.setModuleConfig
  );
  const { callback: save, loading: saveLoading } = useRequestCallback(
    client.saveModule
  );
  const { callback: reset, loading: resetLoading } = useRequestCallback(
    client.resetModule
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
        <title>{labels.pages.module.title}</title>
      </Head>
      <PageLayout page="module">
        <Segment>
          {config &&
          schema &&
          moduleStatus !== Status.UNSPECIFIED &&
          controllerStatus !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.pages.module.config.title}</Title>
              <SchemaBasedForm
                schema={schema}
                data={config}
                submit={{
                  label: labels.pages.module.config.buttons.submit,
                  loading:
                    moduleStatus !== Status.READY ||
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
          {moduleStatus !== Status.UNSPECIFIED &&
          controllerStatus !== Status.UNSPECIFIED ? (
            <Stack>
              <Title order={4}>{labels.pages.module.dangerZone.title}</Title>
              <Button
                onClick={handleSave}
                loading={
                  moduleStatus !== Status.READY ||
                  controllerStatus !== Status.READY ||
                  saveLoading
                }
              >
                {labels.pages.module.dangerZone.buttons.save}
              </Button>
              <Button
                onClick={handleReset}
                loading={
                  moduleStatus !== Status.READY ||
                  controllerStatus !== Status.READY ||
                  resetLoading
                }
              >
                {labels.pages.module.dangerZone.buttons.reset}
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

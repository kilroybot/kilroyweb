import * as React from "react";
import { useCallback } from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import Segment from "../components/Segment";
import { useConfig } from "../contexts/config";
import Center from "../components/Center";
import { Button, Loader, Stack, Title } from "@mantine/core";
import { useConfigSchema } from "../contexts/configSchema";
import SchemaBasedForm from "../components/SchemaBasedForm";
import { objectDiff } from "../lib/utils";
import { client } from "../lib/cilroy";
import { useStatus } from "../contexts/status";
import { Status } from "../lib/protobuf";
import useRequestCallback from "../hooks/useRequestCallback";

export default function Controller() {
  const labels = useLabels();
  const { controller: config } = useConfig();
  const { controller: schema } = useConfigSchema();
  const { controller: status } = useStatus();

  const { callback: setConfig, loading: setConfigLoading } = useRequestCallback(
    client.setControllerConfig
  );
  const { callback: save, loading: saveLoading } = useRequestCallback(
    client.saveController
  );
  const { callback: reset, loading: resetLoading } = useRequestCallback(
    client.resetController
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
        <title>{labels.pages.controller.title}</title>
      </Head>
      <PageLayout page="controller">
        <Segment>
          {config && schema && status !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.pages.controller.config.title}</Title>
              <SchemaBasedForm
                schema={schema}
                data={config}
                submit={{
                  label: labels.pages.controller.config.buttons.submit,
                  loading: status !== Status.READY || setConfigLoading,
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
          {status !== Status.UNSPECIFIED ? (
            <Stack>
              <Title order={4}>
                {labels.pages.controller.dangerZone.title}
              </Title>
              <Button
                onClick={handleSave}
                loading={status !== Status.READY || saveLoading}
              >
                {labels.pages.controller.dangerZone.buttons.save}
              </Button>
              <Button
                onClick={handleReset}
                loading={status !== Status.READY || resetLoading}
              >
                {labels.pages.controller.dangerZone.buttons.reset}
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

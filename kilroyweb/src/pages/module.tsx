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

export default function Module() {
  const labels = useLabels();
  const { module: config } = useConfig();
  const { module: schema } = useConfigSchema();
  const { module: moduleStatus, controller: controllerStatus } = useStatus();

  const handleSubmit = useCallback(
    async (data) => {
      const diff = objectDiff(data, config);
      if (diff !== null) {
        const { result, abort } = request({
          method: client.setModuleConfig,
          params: { config: JSON.stringify(diff) },
          retryOptions: { retriesLeft: 3 },
        });
        await result;
        return abort;
      }
    },
    [client, config]
  );

  const handleReset = useCallback(async () => {
    const { result, abort } = request({
      method: client.resetModule,
      params: {},
      retryOptions: { retriesLeft: 3 },
    });
    await result;
    return abort;
  }, [client]);

  return (
    <>
      <Head>
        <title>{labels.module.title}</title>
      </Head>
      <PageLayout page="module">
        <Segment>
          {config &&
          schema &&
          moduleStatus !== Status.UNSPECIFIED &&
          controllerStatus !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.module.config.title}</Title>
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
          {moduleStatus !== Status.UNSPECIFIED &&
          controllerStatus !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.module.dangerZone.title}</Title>
              <Button onClick={handleReset}>
                {labels.module.dangerZone.buttons.reset}
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

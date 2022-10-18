import * as React from "react";
import { useCallback } from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import Segment from "../components/Segment";
import { useConfig } from "../contexts/config";
import Center from "../components/Center";
import { Button, Loader, Title } from "@mantine/core";
import { useConfigSchema } from "../contexts/configSchema";
import SchemaBasedForm from "../components/SchemaBasedForm";
import { objectDiff } from "../lib/utils";
import { client, request } from "../lib/cilroy";
import { useStatus } from "../contexts/status";
import { Status } from "../lib/protobuf";

export default function Controller() {
  const labels = useLabels();
  const { controller: config } = useConfig();
  const { controller: schema } = useConfigSchema();
  const { controller: status } = useStatus();

  const handleSubmit = useCallback(
    async (data) => {
      const diff = objectDiff(data, config);
      if (diff !== null) {
        const { result, abort } = request({
          method: client.setControllerConfig,
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
      method: client.resetController,
      params: {},
      retryOptions: { retriesLeft: 3 },
    });
    await result;
    return abort;
  }, [client]);

  return (
    <>
      <Head>
        <title>{labels.controller.title}</title>
      </Head>
      <PageLayout page="controller">
        <Segment>
          {config && schema && status !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.controller.config.title}</Title>
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
          {status !== Status.UNSPECIFIED ? (
            <>
              <Title order={4}>{labels.controller.dangerZone.title}</Title>
              <Button onClick={handleReset}>
                {labels.controller.dangerZone.buttons.reset}
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

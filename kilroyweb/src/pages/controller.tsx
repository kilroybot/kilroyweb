import * as React from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import Segment from "../components/Segment";
import { useConfig } from "../contexts/config";
import Center from "../components/Center";
import { Loader, Title } from "@mantine/core";
import { useConfigSchema } from "../contexts/configSchema";
import SchemaBasedForm from "../components/SchemaBasedForm";
import { objectDiff } from "../lib/utils";
import { useCallback } from "react";
import cilroy from "../lib/cilroy";
import { constructStyleTagsFromChunks } from "@emotion/server";
import { createAmPmHandler } from "@mantine/dates/lib/components/TimeInputBase/create-amPm-handler/create-amPm-handler";

export default function Controller() {
  const labels = useLabels();
  const { controller: config } = useConfig();
  const { controller: schema } = useConfigSchema();

  const handleSubmit = useCallback(
    async (data) => {
      const diff = objectDiff(data, config);
      if (diff !== null)
        await cilroy.setControllerConfig({ config: JSON.stringify(diff) });
    },
    [cilroy, config]
  );

  return (
    <>
      <Head>
        <title>{labels.controller.title}</title>
      </Head>
      <PageLayout page="controller">
        <Segment>
          {config && schema ? (
            <>
              <Title order={4}>{labels.controller.config}</Title>
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
      </PageLayout>
    </>
  );
}

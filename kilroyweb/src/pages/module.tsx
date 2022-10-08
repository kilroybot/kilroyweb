import * as React from "react";
import { useCallback } from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import { useConfig } from "../contexts/config";
import Center from "../components/Center";
import { Loader, Title } from "@mantine/core";
import Segment from "../components/Segment";
import { useConfigSchema } from "../contexts/configSchema";
import SchemaBasedForm from "../components/SchemaBasedForm";
import { objectDiff } from "../lib/utils";
import cilroy from "../lib/cilroy";

export default function Module() {
  const labels = useLabels();
  const { module: config } = useConfig();
  const { module: schema } = useConfigSchema();

  const handleSubmit = useCallback(
    async (data) => {
      const diff = objectDiff(data, config);
      if (diff !== null)
        await cilroy.setModuleConfig({ config: JSON.stringify(diff) });
    },
    [cilroy, config]
  );

  return (
    <>
      <Head>
        <title>{labels.module.title}</title>
      </Head>
      <PageLayout page="module">
        <Segment>
          {config && schema ? (
            <>
              <Title order={4}>{labels.module.config}</Title>
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

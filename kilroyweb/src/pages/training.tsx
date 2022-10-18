import * as React from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import { Accordion, Grid, Loader, Space, Stack, Title } from "@mantine/core";
import useMetrics from "../hooks/useMetrics";
import Segment from "../components/Segment";
import Center from "../components/Center";
import Chart from "../components/Chart";
import { TrainingStatusDisplay } from "../components/TrainingStatusDisplay";
import TrainingControls from "../components/TrainingControls";
import { useStatus } from "../contexts/status";
import { Status } from "../lib/protobuf";

export default function Training() {
  const { module } = useStatus();
  const labels = useLabels();
  const metrics = useMetrics();

  return (
    <>
      <Head>
        <title>{labels.training.title}</title>
      </Head>
      <PageLayout page="training">
        <Stack spacing="lg">
          <Grid columns={5} gutter="lg" grow>
            <Grid.Col md={3}>
              <Segment>
                <TrainingControls />
              </Segment>
            </Grid.Col>
            <Grid.Col md={2}>
              <Segment>
                <TrainingStatusDisplay />
              </Segment>
            </Grid.Col>
          </Grid>
          {metrics === undefined || module === Status.UNSPECIFIED ? (
            <Segment>
              <Center>
                <Loader />
              </Center>
            </Segment>
          ) : (
            <>
              {Object.keys(metrics).map((metricId) => (
                <Segment key={metricId}>
                  <Accordion
                    defaultValue="item"
                    variant="filled"
                    styles={{
                      content: { padding: "initial" },
                      control: { padding: "initial" },
                      item: {
                        "&[data-active]": { backgroundColor: "inherit" },
                      },
                    }}
                  >
                    <Accordion.Item value="item">
                      <Accordion.Control>
                        <Title order={4}>{metrics[metricId].label}</Title>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Space h="md" />
                        <Chart
                          type={metrics[metricId].chartData.type}
                          options={metrics[metricId].chartData.options}
                          data={metrics[metricId].chartData.data}
                        />
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </Segment>
              ))}
            </>
          )}
        </Stack>
      </PageLayout>
    </>
  );
}

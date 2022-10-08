import * as React from "react";
import { useCallback } from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import {
  Accordion,
  Button,
  Grid,
  Group,
  Loader,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import useMetrics from "../hooks/useMetrics";
import Segment from "../components/Segment";
import Center from "../components/Center";
import { useTrainingStatus } from "../contexts/trainingStatus";
import { TrainingStatus } from "../lib/protobuf";
import cilroy from "../lib/cilroy";
import Chart from "../components/Chart";
import { TrainingStatusDisplay } from "../components/TrainingStatusDisplay";

export default function Training() {
  const labels = useLabels();
  const metrics = useMetrics();
  const trainingStatus = useTrainingStatus();

  const onStartOfflineClick = useCallback(async () => {
    cilroy.trainOffline({}).then();
  }, [cilroy]);

  const onStartOnlineClick = useCallback(async () => {
    cilroy.trainOnline({}).then();
  }, [cilroy]);

  const onStopClick = useCallback(async () => {
    cilroy.stopTraining({}).then();
  }, [cilroy]);

  return (
    <>
      <Head>
        <title>{labels.training.title}</title>
      </Head>
      <PageLayout page="training">
        <Stack spacing="lg">
          <Grid gutter="lg" grow>
            <Grid.Col span={4}>
              <Segment>
                <Title order={4}>Controls</Title>
                <Group grow>
                  <Button
                    disabled={trainingStatus !== TrainingStatus.IDLE}
                    onClick={onStartOfflineClick}
                  >
                    Start offline
                  </Button>
                  <Button
                    disabled={trainingStatus !== TrainingStatus.IDLE}
                    onClick={onStartOnlineClick}
                  >
                    Start online
                  </Button>
                  <Button
                    disabled={trainingStatus === TrainingStatus.IDLE}
                    onClick={onStopClick}
                  >
                    Stop
                  </Button>
                </Group>
              </Segment>
            </Grid.Col>
            <Grid.Col span={1}>
              <Segment>
                <TrainingStatusDisplay />
              </Segment>
            </Grid.Col>
          </Grid>
          {metrics === undefined ? (
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

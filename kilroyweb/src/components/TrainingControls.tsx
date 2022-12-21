import { Button, Grid, Loader, Title } from "@mantine/core";
import { Status, TrainingStatus } from "../lib/protobuf";
import * as React from "react";
import { useCallback } from "react";
import { client } from "../lib/cilroy";
import { useTrainingStatus } from "../contexts/trainingStatus";
import { useStatus } from "../contexts/status";
import Center from "./Center";
import useRequestCallback from "../hooks/useRequestCallback";
import { useLabels } from "../contexts/labels";

export type TrainingControlsProps = {};

export default function TrainingControls({}: TrainingControlsProps) {
  const { controller, face, module } = useStatus();
  const trainingStatus = useTrainingStatus();
  const labels = useLabels();

  const { callback: startOffline, loading: startOfflineLoading } =
    useRequestCallback(client.trainOffline);
  const { callback: startOnline, loading: startOnlineLoading } =
    useRequestCallback(client.trainOnline);
  const { callback: stop, loading: stopLoading } = useRequestCallback(
    client.stopTraining
  );

  const onStartOfflineClick = useCallback(async () => {
    await startOffline();
  }, [client]);

  const onStartOnlineClick = useCallback(async () => {
    await startOnline();
  }, [client]);

  const onStopClick = useCallback(async () => {
    await stop();
  }, [client]);

  if (
    controller === Status.UNSPECIFIED ||
    face === Status.UNSPECIFIED ||
    module === Status.UNSPECIFIED
  )
    return (
      <Center>
        <Loader />
      </Center>
    );

  return (
    <>
      <Title order={4}>Controls</Title>
      <Grid columns={3} gutter="md">
        <Grid.Col span="auto">
          <Button
            disabled={trainingStatus !== TrainingStatus.IDLE}
            loading={startOfflineLoading}
            onClick={onStartOfflineClick}
            fullWidth
          >
            {labels.pages.training.buttons.startOffline}
          </Button>
        </Grid.Col>
        <Grid.Col span="auto">
          <Button
            disabled={trainingStatus !== TrainingStatus.IDLE}
            loading={startOnlineLoading}
            onClick={onStartOnlineClick}
            fullWidth
          >
            {labels.pages.training.buttons.startOnline}
          </Button>
        </Grid.Col>
        <Grid.Col span="auto">
          <Button
            disabled={trainingStatus === TrainingStatus.IDLE}
            loading={stopLoading}
            onClick={onStopClick}
            fullWidth
          >
            {labels.pages.training.buttons.stop}
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
}

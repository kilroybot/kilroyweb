import { Button, Grid, Group, Loader, Title } from "@mantine/core";
import { Status, TrainingStatus } from "../lib/protobuf";
import * as React from "react";
import { useCallback } from "react";
import { client, request } from "../lib/cilroy";
import { useTrainingStatus } from "../contexts/trainingStatus";
import { useStatus } from "../contexts/status";
import Center from "./Center";

export type TrainingControlsProps = {};

export default function TrainingControls({}: TrainingControlsProps) {
  const { controller, face, module } = useStatus();
  const trainingStatus = useTrainingStatus();

  const onStartOfflineClick = useCallback(async () => {
    const { result } = request({
      method: client.trainOffline,
      params: {},
      retryOptions: { retriesLeft: 3 },
    });
    await result;
  }, [client]);

  const onStartOnlineClick = useCallback(async () => {
    const { result } = request({
      method: client.trainOnline,
      params: {},
      retryOptions: { retriesLeft: 3 },
    });
    await result;
  }, [client]);

  const onStopClick = useCallback(async () => {
    const { result } = request({
      method: client.stopTraining,
      params: {},
      retryOptions: { retriesLeft: 3 },
    });
    await result;
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
            onClick={onStartOfflineClick}
            fullWidth
          >
            Start offline
          </Button>
        </Grid.Col>
        <Grid.Col span="auto">
          <Button
            disabled={trainingStatus !== TrainingStatus.IDLE}
            onClick={onStartOnlineClick}
            fullWidth
          >
            Start online
          </Button>
        </Grid.Col>
        <Grid.Col span="auto">
          <Button
            disabled={trainingStatus === TrainingStatus.IDLE}
            onClick={onStopClick}
            fullWidth
          >
            Stop
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
}

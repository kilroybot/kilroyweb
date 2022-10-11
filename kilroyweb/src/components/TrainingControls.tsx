import { Button, Group, Loader, Title } from "@mantine/core";
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
    </>
  );
}

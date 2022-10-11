import { Group, Loader, Title } from "@mantine/core";
import { Status, TrainingStatus } from "../lib/protobuf";
import { useTrainingStatus } from "../contexts/trainingStatus";
import Center from "./Center";
import { enumToArray } from "../lib/utils";
import StatusIndicator from "./StatusIndicator";
import { useStatus } from "../contexts/status";

export type TrainingStatusDisplayProps = {};

export const TrainingStatusDisplay = (props: TrainingStatusDisplayProps) => {
  const { controller } = useStatus();
  const trainingStatus = useTrainingStatus();

  if (controller === Status.UNSPECIFIED || trainingStatus === null)
    return (
      <Center>
        <Loader />
      </Center>
    );

  return (
    <>
      <Title order={4}>Training status</Title>
      <Group>
        {enumToArray(TrainingStatus)
          .filter(
            (value) => value !== TrainingStatus[TrainingStatus.UNSPECIFIED]
          )
          .map((value) => (
            <StatusIndicator
              key={value}
              status={value}
              on={TrainingStatus[trainingStatus] === value}
            />
          ))}
      </Group>
    </>
  );
};

import { Loader, Stack, Title } from "@mantine/core";
import { TrainingStatus } from "../lib/protobuf";
import { useTrainingStatus } from "../contexts/trainingStatus";
import Center from "./Center";
import { enumToArray } from "../lib/utils";
import StatusIndicator from "./StatusIndicator";

export type TrainingStatusSummaryProps = {};

export const TrainingStatusSummary = (props: TrainingStatusSummaryProps) => {
  const trainingStatus = useTrainingStatus();

  if (trainingStatus === undefined)
    return (
      <Center>
        <Loader />
      </Center>
    );

  return (
    <>
      <Title order={4}>Training status</Title>
      <Stack>
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
      </Stack>
    </>
  );
};

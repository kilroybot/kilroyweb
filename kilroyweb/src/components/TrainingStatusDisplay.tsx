import { Grid, Group, Loader, Title } from "@mantine/core";
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

  const statuses = enumToArray(TrainingStatus).filter(
    (value) => value !== TrainingStatus[TrainingStatus.UNSPECIFIED]
  );

  return (
    <>
      <Title order={4}>Training status</Title>
      <Grid columns={3} gutter="xl">
        {statuses.map((value) => (
          <Grid.Col span="content">
            <StatusIndicator
              key={value}
              status={value}
              on={TrainingStatus[trainingStatus] === value}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

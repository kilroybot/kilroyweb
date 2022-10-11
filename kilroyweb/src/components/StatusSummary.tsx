import {
  Center,
  List,
  Loader,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Status } from "../lib/protobuf";
import { useStatus } from "../contexts/status";
import StatusIndicator from "./StatusIndicator";

export type StatusSummaryProps = {};

export const StatusSummary = (props: StatusSummaryProps) => {
  const status = useStatus();
  const theme = useMantineTheme();

  if (
    status.controller === undefined ||
    status.module === undefined ||
    status.face === undefined
  )
    return (
      <Center>
        <Loader />
      </Center>
    );

  const onColor =
    theme.colors.green[
      typeof theme.primaryShade === "number"
        ? theme.primaryShade
        : theme.primaryShade[theme.colorScheme]
    ];

  const offColor =
    theme.colors.red[
      typeof theme.primaryShade === "number"
        ? theme.primaryShade
        : theme.primaryShade[theme.colorScheme]
    ];

  return (
    <>
      <Title order={4}>Status</Title>
      <Stack>
        <StatusIndicator
          status="Controller"
          on={status.controller === Status.READY}
          onColor={onColor}
          offColor={offColor}
          offGlow={true}
        />
        <StatusIndicator
          status="Face"
          on={status.face === Status.READY}
          onColor={onColor}
          offColor={offColor}
          offGlow={true}
        />
        <StatusIndicator
          status="Module"
          on={status.module === Status.READY}
          onColor={onColor}
          offColor={offColor}
          offGlow={true}
        />
      </Stack>
    </>
  );
};

import { Box, createStyles, Group, Text, useMantineTheme } from "@mantine/core";

export type StatusIndicatorProps = {
  status: string;
  on: boolean;
  onColor?: string;
  offColor?: string;
};

const useStyles = createStyles((theme) => ({
  box: {
    width: "12px",
    height: "12px",
    borderRadius: "100%",
    position: "relative",
  },
}));

export default function StatusIndicator({
  status,
  on,
  onColor,
  offColor,
}: StatusIndicatorProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const finalOnColor =
    onColor ??
    theme.colors[theme.primaryColor][
      typeof theme.primaryShade === "number"
        ? theme.primaryShade
        : theme.primaryShade[theme.colorScheme]
    ];

  const finalOffColor =
    offColor ?? theme.colorScheme === "dark"
      ? theme.colors.gray[8]
      : theme.colors.gray[2];

  return (
    <Group>
      <Box
        className={classes.box}
        style={{ backgroundColor: on ? finalOnColor : finalOffColor }}
      />
      <Text>{status}</Text>
    </Group>
  );
}

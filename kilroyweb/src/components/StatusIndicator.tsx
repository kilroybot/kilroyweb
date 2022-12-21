import { Box, createStyles, Group, Text, useMantineTheme } from "@mantine/core";

export type StatusIndicatorProps = {
  status: string;
  on: boolean;
  onColor?: string;
  offColor?: string;
  onGlow?: boolean;
  offGlow?: boolean;
};

const useStyles = createStyles(() => ({
  box: {
    width: "0.75em",
    height: "0.75em",
    borderRadius: "100%",
    position: "relative",
  },
  glow: {
    boxShadow: "0 0 0.375em 0.075em",
  },
}));

export default function StatusIndicator({
  status,
  on,
  onColor,
  offColor,
  onGlow = true,
  offGlow = false,
}: StatusIndicatorProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const finalOnColor =
    onColor ??
    theme.colors[theme.primaryColor][
      typeof theme.primaryShade === "number"
        ? theme.primaryShade
        : theme.primaryShade[theme.colorScheme]
    ];

  const finalOffColor =
    offColor ??
    (theme.colorScheme === "dark"
      ? theme.colors.gray[8]
      : theme.colors.gray[2]);

  return (
    <Group>
      <Box
        className={cx(
          classes.box,
          on && onGlow && classes.glow,
          !on && offGlow && classes.glow
        )}
        style={{
          backgroundColor: on ? finalOnColor : finalOffColor,
          color: on ? finalOnColor : finalOffColor,
        }}
      />
      <Text>{status}</Text>
    </Group>
  );
}

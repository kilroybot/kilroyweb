import { Box, createStyles, Paper, Stack } from "@mantine/core";
import { ReactNode } from "react";

export type SegmentProps = {
  children?: ReactNode;
};

const useStyles = createStyles((theme) => ({
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  box: {
    padding: theme.spacing.xl,
    flex: 1,
  },
  stack: {
    height: "100%",
  },
}));

export default function Segment({ children }: SegmentProps) {
  const { classes } = useStyles();

  return (
    <Paper shadow="sm" className={classes.paper}>
      <Box className={classes.box}>
        <Stack className={classes.stack}>{children}</Stack>
      </Box>
    </Paper>
  );
}

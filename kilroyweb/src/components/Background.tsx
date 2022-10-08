import { Box, Container, createStyles } from "@mantine/core";
import { ReactNode } from "react";

export type BackgroundProps = {
  children?: ReactNode;
};

const useStyles = createStyles((theme) => ({
  box: {
    width: "100%",
    height: "100%",
    padding: 0,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[1],
  },
}));

export default function Background({ children }: BackgroundProps) {
  const { classes } = useStyles();

  return <Box className={classes.box} children={children} />;
}

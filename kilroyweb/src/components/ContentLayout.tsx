import { ReactNode } from "react";
import { Container, createStyles, Stack } from "@mantine/core";
import Background from "./Background";
import Center from "./Center";

export interface LayoutProps {
  children?: ReactNode;
}

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.xl,
  },
  center: {
    width: "100%",
  },
  stack: {
    width: "100%",
  },
}));

export default function ContentLayout({ children }: LayoutProps) {
  const { classes } = useStyles();

  return (
    <Background>
      <Container size="md" className={classes.container}>
        <Center className={classes.center}>
          <Stack className={classes.stack}>{children}</Stack>
        </Center>
      </Container>
    </Background>
  );
}

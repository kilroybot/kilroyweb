import { Accordion, createStyles } from "@mantine/core";
import { ReactNode } from "react";

export type FormAccordionProps = {
  header: ReactNode;
  children: ReactNode;
};

const useStyles = createStyles((theme) => ({
  control: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: theme.spacing.md,
    transition: "padding 0.2s",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&[data-active]": {
      paddingBottom: 0,
    },
  },
  content: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  item: {
    "&[data-active]": {
      borderBottom: "none",
    },
  },
}));

export default function FormAccordion({
  header,
  children,
}: FormAccordionProps) {
  const { classes } = useStyles();

  return (
    <Accordion variant="default" classNames={classes}>
      <Accordion.Item value="item">
        <Accordion.Control>{header}</Accordion.Control>
        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

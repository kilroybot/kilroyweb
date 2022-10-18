import { Blockquote, createStyles } from "@mantine/core";

export type TextDisplayProps = {
  text: string;
};

const useStyles = createStyles((theme) => ({
  blockquote: {
    padding: 0,
  },
}));

export default function TextDisplay({ text }: TextDisplayProps) {
  const { classes } = useStyles();

  return <Blockquote className={classes.blockquote}>{text}</Blockquote>;
}

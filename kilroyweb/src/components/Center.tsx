import {
  Center as MantineCenter,
  CenterProps as MantineCenterProps,
  createStyles,
} from "@mantine/core";

export type CenterProps = MantineCenterProps;

const useStyles = createStyles((theme) => ({
  center: {
    height: "100%",
    flex: 1,
  },
}));

export default function Center({ children, className, ...props }: CenterProps) {
  const { classes, cx } = useStyles();

  return (
    <MantineCenter className={cx(classes.center, className)} {...props}>
      {children}
    </MantineCenter>
  );
}

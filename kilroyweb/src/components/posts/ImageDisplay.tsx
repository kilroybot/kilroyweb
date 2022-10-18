import { createStyles, Image } from "@mantine/core";
import Center from "../Center";

export type ImageDisplayProps = {
  src: string;
  alt?: string;
};

const useStyles = createStyles((theme) => ({
  center: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[1],
    borderRadius: theme.radius[theme.defaultRadius],
    overflow: "hidden",
    minHeight: "50px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ImageDisplay({ src, alt }: ImageDisplayProps) {
  const { classes } = useStyles();

  return (
    <Center className={classes.center}>
      <Image
        src={src}
        alt={alt}
        withPlaceholder
        width="initial"
        classNames={{
          image: classes.image,
        }}
      />
    </Center>
  );
}

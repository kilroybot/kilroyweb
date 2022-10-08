import {
  Carousel as MantineCarousel,
  CarouselProps as MantineCarouselProps,
} from "@mantine/carousel";
import { createStyles } from "@mantine/core";

export type CarouselProps = Omit<MantineCarouselProps, "classNames">;

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  control: {
    "&[data-inactive]": {
      opacity: 0,
      cursor: "default",
    },
  },

  root: {
    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

const Carousel = (props: CarouselProps) => {
  const { classes } = useStyles();

  return <MantineCarousel classNames={classes} {...props} />;
};

Carousel.Slide = MantineCarousel.Slide;

export default Carousel;

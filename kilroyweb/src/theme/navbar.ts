import {
  IconChartLine,
  IconCpu,
  IconHome2,
  IconMoodSmile,
  IconRobot,
  TablerIcon,
} from "@tabler/icons";
import { HorizontalSectionWidth } from "@mantine/core/lib/AppShell/HorizontalSection/HorizontalSection.styles";

export type PageData = {
  label: string;
  path: string;
  icon: TablerIcon;
};

export const pages: { [key: string]: PageData } = {
  home: {
    label: "Home",
    path: "/",
    icon: IconHome2,
  },
  training: {
    label: "Training",
    path: "/training",
    icon: IconChartLine,
  },
  controller: {
    label: "Controller",
    path: "/controller",
    icon: IconCpu,
  },
  face: {
    label: "Face",
    path: "/face",
    icon: IconMoodSmile,
  },
  module: {
    label: "Module",
    path: "/module",
    icon: IconRobot,
  },
};

export type Page = keyof typeof pages;

export const defaultPage: Page = "home";

export const defaultWidth: HorizontalSectionWidth = { base: 80 };
export const defaultPadding: string = "md";

export const defaultStrokeWidth: number = 2;

import {
  IconChartLine,
  IconCpu,
  IconMoodSmile,
  IconRobot,
} from "@tabler/icons";
import { Icon } from "../lib/types";
import KilroyLogo from "../components/KilroyLogo";
import { HorizontalSectionWidth } from "@mantine/core/lib/AppShell/HorizontalSection/HorizontalSection.styles";

export type PageData = {
  label: string;
  path: string;
  icon: Icon;
  strokeWidth: number | string;
};

export type Page = keyof typeof pages;

export const defaults = {
  page: "home" as Page,
  strokeWidth: 2,
  vertical: {
    width: { base: 80 } as HorizontalSectionWidth,
    py: "md",
    px: "md",
  },
  horizontal: {
    height: 80,
  },
};

export const pages: { [key: string]: PageData } = {
  home: {
    label: "Home",
    path: "/",
    icon: KilroyLogo,
    strokeWidth: 1.75,
  },
  training: {
    label: "Training",
    path: "/training",
    icon: IconChartLine,
    strokeWidth: defaults.strokeWidth,
  },
  controller: {
    label: "Controller",
    path: "/controller",
    icon: IconCpu,
    strokeWidth: defaults.strokeWidth,
  },
  face: {
    label: "Face",
    path: "/face",
    icon: IconMoodSmile,
    strokeWidth: defaults.strokeWidth,
  },
  module: {
    label: "Module",
    path: "/module",
    icon: IconRobot,
    strokeWidth: defaults.strokeWidth,
  },
};

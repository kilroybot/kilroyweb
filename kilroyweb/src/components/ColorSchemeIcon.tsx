import { IconProps } from "../lib/types";
import { useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

export type ColorSchemeIconProps = IconProps;

export default function ColorSchemeIcon(props: ColorSchemeIconProps) {
  const { colorScheme } = useMantineColorScheme();

  return colorScheme === "dark" ? (
    <IconSun {...props} />
  ) : (
    <IconMoonStars {...props} />
  );
}

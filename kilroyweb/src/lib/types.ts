import { FC, SVGAttributes } from "react";

export type IconProps = Omit<SVGAttributes<SVGElement>, "color" | "stroke"> & {
  color?: SVGAttributes<SVGElement>["stroke"];
  size?: SVGAttributes<SVGElement>["width"];
  stroke?: SVGAttributes<SVGElement>["strokeWidth"];
};

export type Icon = FC<IconProps>;

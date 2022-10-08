import NextLink from "next/link";
import React from "react";

export type LinkProps = React.ComponentProps<typeof NextLink> & {
  disabled?: boolean;
};

export default function Link({
  disabled = false,
  children,
  ...props
}: LinkProps) {
  return disabled ? (
    <>{children}</>
  ) : (
    <NextLink {...props}>{children}</NextLink>
  );
}

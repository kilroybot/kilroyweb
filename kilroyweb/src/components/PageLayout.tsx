import * as React from "react";
import { ReactNode } from "react";
import Navbar, { NavbarProps } from "./Navbar";
import ContentLayout from "./ContentLayout";
import { AppShell, useMantineTheme } from "@mantine/core";
import { Page } from "../theme/navbar";
import { useMediaQuery } from "@mantine/hooks";
import Header, { HeaderProps } from "./Header";

export type PageLayoutProps = {
  page?: Page;
  children?: ReactNode;
  navbarProps?: Omit<NavbarProps, "page">;
  headerProps?: Omit<HeaderProps, "page">;
};

export default function PageLayout({
  page,
  children,
  navbarProps,
  headerProps,
}: PageLayoutProps) {
  const theme = useMantineTheme();
  const big = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

  return (
    <AppShell
      padding={0}
      navbar={big && <Navbar page={page} {...navbarProps} />}
      header={!big && <Header page={page} {...headerProps} />}
    >
      <ContentLayout>{children}</ContentLayout>
    </AppShell>
  );
}

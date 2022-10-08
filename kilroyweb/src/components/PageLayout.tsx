import * as React from "react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import ContentLayout from "./ContentLayout";
import { AppShell } from "@mantine/core";
import { Page } from "../theme/navbar";

export type PageLayoutProps = {
  page?: Page;
  children?: ReactNode;
};

export default function PageLayout({ page, children }: PageLayoutProps) {
  return (
    <AppShell padding={0} navbar={<Navbar page={page} />}>
      <ContentLayout>{children}</ContentLayout>
    </AppShell>
  );
}

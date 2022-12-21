import * as React from "react";
import { Grid, SimpleGrid } from "@mantine/core";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import Segment from "../components/Segment";
import MetadataSummary from "../components/MetadataSummary";
import { TrainingStatusSummary } from "../components/TrainingStatusSummary";
import { StatusSummary } from "../components/StatusSummary";
import { MetricsSummary } from "../components/MetricsSummary";

export default function Index() {
  const labels = useLabels();

  return (
    <>
      <Head>
        <title>{labels.pages.index.title}</title>
      </Head>
      <PageLayout page="home">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Segment>
            <MetricsSummary />
          </Segment>
          <Grid columns={2} gutter="md">
            <Grid.Col span={2}>
              <Segment>
                <MetadataSummary />
              </Segment>
            </Grid.Col>
            <Grid.Col sm={1}>
              <Segment>
                <TrainingStatusSummary />
              </Segment>
            </Grid.Col>
            <Grid.Col sm={1}>
              <Segment>
                <StatusSummary />
              </Segment>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </PageLayout>
    </>
  );
}

import { createStyles, Loader, Stack, Title } from "@mantine/core";
import useMetrics from "../hooks/useMetrics";
import Carousel from "./Carousel";
import Center from "./Center";
import Chart from "./Chart";
import { merge } from "lodash-es";

export type MetricsSummaryProps = {};

const useStyles = createStyles((theme) => ({
  carousel: {
    width: "100%",
  },
}));

export const MetricsSummary = (props: MetricsSummaryProps) => {
  const { classes } = useStyles();

  const metrics = useMetrics();

  if (metrics === undefined)
    return (
      <Center>
        <Loader />
      </Center>
    );

  const overrideOptions = {
    scales: {
      x: { title: { display: false } },
      y: { title: { display: false } },
    },
  };

  return (
    <>
      <Title order={4}>Metrics</Title>
      <Center>
        <Carousel
          slideGap="xl"
          controlsOffset={0}
          draggable={true}
          className={classes.carousel}
        >
          {Object.keys(metrics).map((metricId) => (
            <Carousel.Slide key={metricId}>
              <Stack>
                <Title align="center" order={6}>
                  {metrics[metricId].label}
                </Title>
                <Chart
                  type={metrics[metricId].chartData.type}
                  options={merge(
                    metrics[metricId].chartData.options,
                    overrideOptions
                  )}
                  data={metrics[metricId].chartData.data}
                />
              </Stack>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Center>
    </>
  );
};

import { useRawMetrics } from "../contexts/metrics";
import { ChartProps } from "react-chartjs-2/dist/types";

export type Metric = {
  id: string;
  label: string;
  group: string;
  chartData: ChartProps;
};

export type Metrics = {
  [key: string]: Metric;
};

export default function useMetrics(): Metrics | undefined {
  const rawMetrics = useRawMetrics();

  if (rawMetrics.configs === undefined || rawMetrics.data === undefined)
    return undefined;

  const metrics = rawMetrics.configs.reduce((acc, config) => {
    const chartData = JSON.parse(config.config);
    const metric = {
      id: config.id,
      label: config.label,
      group: config.group,
      chartData: chartData,
    };
    return {
      ...acc,
      [config.id]: metric,
    };
  }, {});

  rawMetrics.data.forEach((data) => {
    const metric = metrics[data.metricId];
    const parsedData = JSON.parse(data.data);
    metric.chartData.data.datasets[data.datasetId].data.push(parsedData);
  });

  return metrics;
}

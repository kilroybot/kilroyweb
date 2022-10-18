import { useMantineTheme } from "@mantine/core";
import { merge } from "lodash-es";
import { BaseChartProps } from "./BaseChart";
import dynamic from "next/dynamic";
import { useEffect, useImperativeHandle, useMemo, useRef } from "react";
import ChartJS from "chart.js/auto";

const BaseChart = dynamic(() => import("./BaseChart"), {
  ssr: false,
});

export type ChartProps = BaseChartProps & {
  onDataUpdate?: (chart: ChartJS) => void;
};

export default function Chart({
  chartRef,
  onDataUpdate,
  ...props
}: ChartProps) {
  const internalChartRef = useRef<ChartJS>(null);
  useImperativeHandle(chartRef, () => internalChartRef.current);

  const theme = useMantineTheme();

  const defaults = {
    options: {
      scales: {
        x: {
          grid: {
            borderColor:
              theme.colorScheme === "dark"
                ? theme.colors.gray[9]
                : theme.colors.gray[2],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[9]
                : theme.colors.gray[2],
          },
          ticks: {
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[6]
                : theme.colors.gray[7],
          },
          title: {
            display: true,
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[6]
                : theme.colors.gray[7],
          },
          type: "linear",
        },
        y: {
          grid: {
            borderColor:
              theme.colorScheme === "dark"
                ? theme.colors.gray[9]
                : theme.colors.gray[2],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[9]
                : theme.colors.gray[2],
          },
          ticks: {
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[6]
                : theme.colors.gray[7],
          },
          title: {
            display: true,
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[6]
                : theme.colors.gray[7],
          },
          type: "linear",
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  const mergedProps = merge(defaults, props);

  const shade =
    typeof theme.primaryShade === "number"
      ? theme.primaryShade
      : theme.primaryShade[theme.colorScheme];

  const datasetDefaults = {
    backgroundColor: theme.colors[theme.primaryColor][shade],
    borderColor: theme.colors[theme.primaryColor][shade],
    borderWidth: 2,
    pointRadius: 2,
    pointHoverRadius: 3,
    borderDash: [10, 5],
    borderCapStyle: "round",
    borderJoinStyle: "round",
  };

  mergedProps?.data?.datasets?.forEach((dataset) =>
    merge(dataset || {}, datasetDefaults)
  );

  const { data, options, ...otherProps } = mergedProps;

  const memoizedData = useMemo(() => data, [JSON.stringify(data)]);
  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    if (internalChartRef.current && onDataUpdate) {
      onDataUpdate(internalChartRef.current);
    }
  }, [internalChartRef.current, onDataUpdate]);

  return (
    <BaseChart
      data={memoizedData}
      options={memoizedOptions}
      chartRef={internalChartRef}
      {...otherProps}
    />
  );
}

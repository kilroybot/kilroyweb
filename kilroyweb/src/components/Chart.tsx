import { useMantineTheme } from "@mantine/core";
import { merge } from "lodash-es";
import { BaseChartProps } from "./BaseChart";
import dynamic from "next/dynamic";
import { useRef } from "react";
import ChartJS from "chart.js/auto";

const BaseChart = dynamic(() => import("./BaseChart"), {
  ssr: false,
});

export type ChartProps = BaseChartProps;

export default function Chart({ onDoubleClick, ...props }: ChartProps) {
  const chartRef = useRef<ChartJS>(null);

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
        zoom: {
          pan: {
            enabled: true,
            modifierKey: "ctrl",
          },
          zoom: {
            wheel: {
              enabled: true,
              modifierKey: "ctrl",
            },
            pinch: {
              enabled: true,
            },
          },
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

  const handleDoubleClick = (event: any) => {
    if (chartRef.current) chartRef.current.resetZoom();
    if (onDoubleClick) onDoubleClick(event);
  };

  return (
    <BaseChart
      chartRef={chartRef}
      onDoubleClick={handleDoubleClick}
      {...mergedProps}
    />
  );
}

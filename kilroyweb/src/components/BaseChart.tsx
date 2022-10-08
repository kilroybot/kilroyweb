import {
  Chart as ReactChartJS,
  ChartProps as ReactChartJSProps,
} from "react-chartjs-2";
import ChartJS, { ChartTypeRegistry } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import { ChartJSOrUndefined, ForwardedRef } from "react-chartjs-2/dist/types";
import { DistributiveArray } from "chart.js/types/utils";

ChartJS.register(zoomPlugin);

export type BaseChartProps<
  TType extends keyof ChartTypeRegistry = keyof ChartTypeRegistry,
  TData = DistributiveArray<ChartTypeRegistry[TType]["defaultDataPoint"]>,
  TLabel = unknown
> = ReactChartJSProps<TType, TData, TLabel> & {
  chartRef?: ForwardedRef<ChartJSOrUndefined<TType, TData, TLabel>> | undefined;
};

export default function BaseChart({ chartRef, ...props }: BaseChartProps) {
  return <ReactChartJS ref={chartRef} {...props} />;
}

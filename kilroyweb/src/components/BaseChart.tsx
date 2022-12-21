import {
  Chart as ReactChartJS,
  ChartProps as ReactChartJSProps,
} from "react-chartjs-2";
import ChartJS from "chart.js/auto";
import { ChartJSOrUndefined, ForwardedRef } from "react-chartjs-2/dist/types";
import { ChartType, DefaultDataPoint } from "chart.js";

ChartJS.register();

export type BaseChartProps<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> = ReactChartJSProps<TType, TData, TLabel> & {
  chartRef?: ForwardedRef<ChartJSOrUndefined<TType, TData, TLabel>> | undefined;
};

export default function BaseChart({ chartRef, ...props }: BaseChartProps) {
  return <ReactChartJS ref={chartRef} {...props} />;
}

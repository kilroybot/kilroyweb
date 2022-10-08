import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import cilroy from "../lib/cilroy";
import {
  MetricConfig,
  MetricData,
  WatchModuleMetricsResponse,
} from "../lib/protobuf";
import { useStreams } from "./streams";

export type RawMetricsContextType = {
  configs?: MetricConfig[];
  data?: MetricData[];
};

const RawMetricsContext = createContext<RawMetricsContextType>({});

export type RawMetricsProviderProps = {
  children: ReactNode;
};

export function RawMetricsProvider({ children }: RawMetricsProviderProps) {
  const [configs, setConfigs] = useState<MetricConfig[]>();
  const [firstDataFetched, setFirstDataFetched] = useState(false);
  const [data, setData] = useState<MetricData[]>();

  const { WatchModuleMetrics: stream } = useStreams();

  useEffect(() => {
    const abort = new AbortController();
    const fetch = async () => {
      const configResponse = await cilroy.getModuleMetricsConfig(
        {},
        { signal: abort.signal }
      );
      setConfigs(configResponse.configs);
      const metricsResponse = await cilroy.getModuleMetrics(
        {},
        { signal: abort.signal }
      );
      setData(metricsResponse.metrics);
      setFirstDataFetched(true);
    };
    fetch().then();
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    if (stream === undefined || !firstDataFetched) return;

    const fetch = async () => {
      for await (const message of stream) {
        const response = WatchModuleMetricsResponse.fromJsonString(message);
        setData((prev) => {
          return [...prev, response.metric];
        });
      }
    };
    fetch().then();
  }, [stream === undefined, firstDataFetched]);

  const metrics = {
    configs: configs,
    data: data,
  };

  return <RawMetricsContext.Provider value={metrics} children={children} />;
}

export function useRawMetrics() {
  const context = useContext(RawMetricsContext);
  if (context === undefined) {
    throw new Error("useRawMetrics must be used within a RawMetricsProvider");
  }
  return context;
}

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { client, request } from "../lib/cilroy";
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
  const [data, setData] = useState<MetricData[]>();

  const { messages, getConnectQueue } = useStreams();
  const { WatchModuleMetrics: stream } = messages;

  useEffect(() => {
    const method = client.getModuleMetricsConfig;
    const { result, abort } = request({ method });
    result.then((response) => setConfigs(response.configs));
    return abort;
  }, [client]);

  useEffect(() => {
    const method = client.getModuleMetrics;
    const { result, abort } = request({ method });
    result.then((response) => setData(response.metrics));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getModuleMetrics,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        setData(response.metrics);
      }
    };
    fetch().then();

    return abortCallback;
  }, [client, getConnectQueue]);

  useEffect(() => {
    if (stream === undefined) return;

    const fetch = async () => {
      for await (const message of stream) {
        const response = WatchModuleMetricsResponse.fromJsonString(message);
        setData((prev) => {
          return [...prev, response.metric];
        });
      }
    };
    fetch().then();
  }, [stream === undefined]);

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

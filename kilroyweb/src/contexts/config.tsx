import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { client, request } from "../lib/cilroy";
import { useStreams } from "./streams";
import {
  WatchControllerConfigResponse,
  WatchFaceConfigResponse,
  WatchModuleConfigResponse,
} from "../lib/protobuf";

type ConfigContextType = {
  controller?: Object;
  face?: Object;
  module?: Object;
};

const ConfigContext = createContext<ConfigContextType>({});

export type ConfigProviderProps = {
  children: ReactNode;
};

export function ConfigProvider({ children }: ConfigProviderProps) {
  const [controllerConfig, setControllerConfig] = useState<Object>();
  const [faceConfig, setFaceConfig] = useState<Object>();
  const [moduleConfig, setModuleConfig] = useState<Object>();

  const { messages, getConnectQueue } = useStreams();

  const {
    WatchControllerConfig: controllerStream,
    WatchFaceConfig: faceStream,
    WatchModuleConfig: moduleStream,
  } = messages;

  useEffect(() => {
    const method = client.getControllerConfig;
    const { result, abort } = request({ method });
    result.then((response) => setControllerConfig(JSON.parse(response.config)));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getControllerConfig,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        const config = JSON.parse(response.config);
        setControllerConfig(config);
      }
    };
    fetch().then();

    return abortCallback;
  }, [client, getConnectQueue]);

  useEffect(() => {
    if (controllerStream === undefined) return;

    const fetch = async () => {
      for await (const message of controllerStream) {
        const response = WatchControllerConfigResponse.fromJsonString(message);
        const config = JSON.parse(response.config);
        setControllerConfig(config);
      }
    };
    fetch().then();
  }, [controllerStream === undefined]);

  useEffect(() => {
    const method = client.getFaceConfig;
    const { result, abort } = request({ method });
    result.then((response) => setFaceConfig(JSON.parse(response.config)));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getFaceConfig,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        const config = JSON.parse(response.config);
        setFaceConfig(config);
      }
    };
    fetch().then();

    return abortCallback;
  }, [client, getConnectQueue]);

  useEffect(() => {
    if (faceStream === undefined) return;

    const fetch = async () => {
      for await (const message of faceStream) {
        const response = WatchFaceConfigResponse.fromJsonString(message);
        const config = JSON.parse(response.config);
        setFaceConfig(config);
      }
    };
    fetch().then();
  }, [faceStream === undefined]);

  useEffect(() => {
    const method = client.getModuleConfig;
    const { result, abort } = request({ method });
    result.then((response) => setModuleConfig(JSON.parse(response.config)));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getModuleConfig,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        const config = JSON.parse(response.config);
        setModuleConfig(config);
      }
    };
    fetch().then();

    return abortCallback;
  }, [client, getConnectQueue]);

  useEffect(() => {
    if (moduleStream === undefined) return;

    const fetch = async () => {
      for await (const message of moduleStream) {
        const response = WatchModuleConfigResponse.fromJsonString(message);
        const config = JSON.parse(response.config);
        setModuleConfig(config);
      }
    };
    fetch().then();
  }, [moduleStream === undefined]);

  const config = {
    controller: controllerConfig,
    face: faceConfig,
    module: moduleConfig,
  };

  return <ConfigContext.Provider value={config} children={children} />;
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
}

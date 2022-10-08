import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import cilroy from "../lib/cilroy";
import { useStreams } from "./streams";
import { WatchControllerConfigResponse } from "../lib/protobuf";

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
  const [controllerFirstFetched, setControllerFirstFetched] = useState(false);
  const [controllerConfig, setControllerConfig] = useState<Object>();
  const [faceFirstFetched, setFaceFirstFetched] = useState(false);
  const [faceConfig, setFaceConfig] = useState<Object>();
  const [moduleFirstFetched, setModuleFirstFetched] = useState(false);
  const [moduleConfig, setModuleConfig] = useState<Object>();

  const {
    WatchControllerConfig: controllerStream,
    WatchFaceConfig: faceStream,
    WatchModuleConfig: moduleStream,
  } = useStreams();

  useEffect(() => {
    const abort = new AbortController();
    cilroy
      .getControllerConfig({}, { signal: abort.signal })
      .then((response) => {
        const config = JSON.parse(response.config);
        setControllerConfig(config);
        setControllerFirstFetched(true);
      });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    if (controllerStream === undefined || !controllerFirstFetched) return;

    const fetch = async () => {
      for await (const message of controllerStream) {
        const response = WatchControllerConfigResponse.fromJsonString(message);
        const config = JSON.parse(response.config);
        setControllerConfig(config);
      }
    };
    fetch().then();
  }, [controllerStream === undefined, controllerFirstFetched]);

  useEffect(() => {
    const abort = new AbortController();
    cilroy.getFaceConfig({}, { signal: abort.signal }).then((response) => {
      const config = JSON.parse(response.config);
      setFaceConfig(config);
      setFaceFirstFetched(true);
    });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    if (faceStream === undefined || !faceFirstFetched) return;

    const fetch = async () => {
      for await (const message of faceStream) {
        const response = WatchControllerConfigResponse.fromJsonString(message);
        const config = JSON.parse(response.config);
        setFaceConfig(config);
      }
    };
    fetch().then();
  }, [faceStream === undefined, faceFirstFetched]);

  useEffect(() => {
    const abort = new AbortController();
    cilroy.getModuleConfig({}, { signal: abort.signal }).then((response) => {
      const config = JSON.parse(response.config);
      setModuleConfig(config);
      setModuleFirstFetched(true);
    });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    if (moduleStream === undefined || !moduleFirstFetched) return;

    const fetch = async () => {
      for await (const message of moduleStream) {
        const response = WatchControllerConfigResponse.fromJsonString(message);
        const config = JSON.parse(response.config);
        setModuleConfig(config);
      }
    };
    fetch().then();
  }, [moduleStream === undefined, moduleFirstFetched]);

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

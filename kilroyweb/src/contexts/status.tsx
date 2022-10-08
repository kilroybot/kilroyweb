import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Status,
  WatchControllerStatusResponse,
  WatchFaceStatusResponse,
  WatchModuleStatusResponse,
} from "../lib/protobuf";
import cilroy from "../lib/cilroy";
import { useStreams } from "./streams";

type StatusContextType = {
  controller?: Status;
  face?: Status;
  module?: Status;
};

const StatusContext = createContext<StatusContextType>({});

export type StatusProviderProps = {
  children: ReactNode;
};

export function StatusProvider({ children }: StatusProviderProps) {
  const [controllerFirstFetched, setControllerFirstFetched] = useState(false);
  const [controllerStatus, setControllerStatus] = useState<Status>();
  const [faceFirstFetched, setFaceFirstFetched] = useState(false);
  const [faceStatus, setFaceStatus] = useState<Status>();
  const [moduleFirstFetched, setModuleFirstFetched] = useState(false);
  const [moduleStatus, setModuleStatus] = useState<Status>();

  const {
    WatchControllerStatus: controllerStream,
    WatchFaceStatus: faceStream,
    WatchModuleStatus: moduleStream,
  } = useStreams();

  useEffect(() => {
    const abort = new AbortController();
    cilroy
      .getControllerStatus({}, { signal: abort.signal })
      .then((response) => {
        setControllerStatus(response.status);
        setControllerFirstFetched(true);
      });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    if (controllerStream === undefined || !controllerFirstFetched) return;

    const fetch = async () => {
      for await (const message of controllerStream) {
        const response = WatchControllerStatusResponse.fromJsonString(message);
        setControllerStatus(response.status);
      }
    };
    fetch().then();
  }, [controllerStream === undefined, controllerFirstFetched]);

  useEffect(() => {
    const abort = new AbortController();
    cilroy.getFaceStatus({}, { signal: abort.signal }).then((response) => {
      setFaceStatus(response.status);
      setFaceFirstFetched(true);
    });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    if (faceStream === undefined || !faceFirstFetched) return;

    const fetch = async () => {
      for await (const message of faceStream) {
        const response = WatchFaceStatusResponse.fromJsonString(message);
        setFaceStatus(response.status);
      }
    };
    fetch().then();
  }, [faceStream === undefined, faceFirstFetched]);

  useEffect(() => {
    const abort = new AbortController();
    cilroy.getModuleStatus({}, { signal: abort.signal }).then((response) => {
      setModuleStatus(response.status);
      setModuleFirstFetched(true);
    });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    if (moduleStream === undefined || !moduleFirstFetched) return;

    const fetch = async () => {
      for await (const message of moduleStream) {
        const response = WatchModuleStatusResponse.fromJsonString(message);
        setModuleStatus(response.status);
      }
    };
    fetch().then();
  }, [moduleStream === undefined, moduleFirstFetched]);

  const status = {
    controller: controllerStatus,
    face: faceStatus,
    module: moduleStatus,
  };

  return <StatusContext.Provider value={status} children={children} />;
}

export function useStatus() {
  const context = useContext(StatusContext);
  if (context === undefined) {
    throw new Error("useStatus must be used within a StatusProvider");
  }
  return context;
}

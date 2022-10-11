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
import { client, request } from "../lib/cilroy";
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
  const [controllerStatus, setControllerStatus] = useState<Status>();
  const [faceStatus, setFaceStatus] = useState<Status>();
  const [moduleStatus, setModuleStatus] = useState<Status>();

  const { messages, getErrorQueue, getConnectQueue } = useStreams();

  const {
    WatchControllerStatus: controllerStream,
    WatchFaceStatus: faceStream,
    WatchModuleStatus: moduleStream,
  } = messages;

  useEffect(() => {
    const method = client.getControllerStatus;
    const { result, abort } = request({ method });
    result.then((response) => setControllerStatus(response.status));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getControllerStatus,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        setControllerStatus(response.status);
      }
    };
    fetch().then();

    return abortCallback;
  }, [client, getConnectQueue]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getErrorQueue()) {
        const { result, abort } = request({
          method: client.getControllerStatus,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        try {
          const response = await result;
          setControllerStatus(response.status);
        } catch (e) {
          setControllerStatus(Status.UNSPECIFIED);
        }
      }
    };
    fetch().then();

    return abortCallback;
  }, [getErrorQueue]);

  useEffect(() => {
    if (controllerStream === undefined) return;

    const fetch = async () => {
      for await (const message of controllerStream) {
        const response = WatchControllerStatusResponse.fromJsonString(message);
        setControllerStatus(response.status);
      }
    };
    fetch().then();
  }, [controllerStream === undefined]);

  useEffect(() => {
    const method = client.getFaceStatus;
    const { result, abort } = request({ method });
    result.then((response) => setFaceStatus(response.status));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getFaceStatus,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        setFaceStatus(response.status);
      }
    };
    fetch().then();

    return abortCallback;
  }, [client, getConnectQueue]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getErrorQueue()) {
        const { result, abort } = request({
          method: client.getFaceStatus,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        try {
          const response = await result;
          setFaceStatus(response.status);
        } catch (e) {
          setFaceStatus(Status.UNSPECIFIED);
        }
      }
    };
    fetch().then();

    return abortCallback;
  }, [getErrorQueue]);

  useEffect(() => {
    if (faceStream === undefined) return;

    const fetch = async () => {
      for await (const message of faceStream) {
        const response = WatchFaceStatusResponse.fromJsonString(message);
        setFaceStatus(response.status);
      }
    };
    fetch().then();
  }, [faceStream === undefined]);

  useEffect(() => {
    const method = client.getModuleStatus;
    const { result, abort } = request({ method });
    result.then((response) => setModuleStatus(response.status));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getModuleStatus,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        setModuleStatus(response.status);
      }
    };
    fetch().then();

    return abortCallback;
  }, [client, getConnectQueue]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getErrorQueue()) {
        const { result, abort } = request({
          method: client.getModuleStatus,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        try {
          const response = await result;
          setModuleStatus(response.status);
        } catch (e) {
          setModuleStatus(Status.UNSPECIFIED);
        }
      }
    };
    fetch().then();

    return abortCallback;
  }, [getErrorQueue]);

  useEffect(() => {
    if (moduleStream === undefined) return;

    const fetch = async () => {
      for await (const message of moduleStream) {
        const response = WatchModuleStatusResponse.fromJsonString(message);
        setModuleStatus(response.status);
      }
    };
    fetch().then();
  }, [moduleStream === undefined]);

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

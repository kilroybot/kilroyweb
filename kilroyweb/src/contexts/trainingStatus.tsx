import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { TrainingStatus, WatchTrainingStatusResponse } from "../lib/protobuf";
import { useStreams } from "./streams";
import { client, request } from "../lib/cilroy";

const TrainingStatusContext = createContext<TrainingStatus | null>(null);

export type TrainingStatusProviderProps = {
  children: ReactNode;
};

export function TrainingStatusProvider({
  children,
}: TrainingStatusProviderProps) {
  const [trainingStatus, setTrainingStatus] = useState<TrainingStatus | null>(
    null
  );

  const { messages, getErrorQueue, getConnectQueue } = useStreams();
  const { WatchTrainingStatus: stream } = messages;

  useEffect(() => {
    const method = client.getTrainingStatus;
    const { result, abort } = request({ method });
    result.then((response) => setTrainingStatus(response.status));
    return abort;
  }, [client]);

  useEffect(() => {
    let abortCallback: () => void = () => {};

    const fetch = async () => {
      for await (const _ of getConnectQueue()) {
        const { result, abort } = request({
          method: client.getTrainingStatus,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        const response = await result;
        setTrainingStatus(response.status);
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
          method: client.getTrainingStatus,
          retryOptions: {
            retriesLeft: 3,
          },
        });
        abortCallback = abort;
        try {
          const response = await result;
          setTrainingStatus(response.status);
        } catch (e) {
          setTrainingStatus(TrainingStatus.UNSPECIFIED);
        }
      }
    };
    fetch().then();

    return abortCallback;
  }, [getErrorQueue]);

  useEffect(() => {
    if (stream === undefined) return;

    const fetch = async () => {
      for await (const message of stream) {
        const response = WatchTrainingStatusResponse.fromJsonString(message);
        setTrainingStatus(response.status);
      }
    };
    fetch().then();
  }, [stream === undefined]);

  return (
    <TrainingStatusContext.Provider
      value={trainingStatus}
      children={children}
    />
  );
}

export function useTrainingStatus() {
  const context = useContext(TrainingStatusContext);
  if (context === undefined) {
    throw new Error(
      "useTrainingStatus must be used within a TrainingStatusProvider"
    );
  }
  return context;
}

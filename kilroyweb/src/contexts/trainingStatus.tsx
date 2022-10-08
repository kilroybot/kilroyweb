import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { TrainingStatus, WatchTrainingStatusResponse } from "../lib/protobuf";
import { useStreams } from "./streams";
import cilroy from "../lib/cilroy";

const TrainingStatusContext = createContext<TrainingStatus | null>(null);

export type TrainingStatusProviderProps = {
  children: ReactNode;
};

export function TrainingStatusProvider({
  children,
}: TrainingStatusProviderProps) {
  const [firstFetched, setFirstFetched] = useState(false);
  const [trainingStatus, setTrainingStatus] = useState<TrainingStatus | null>(
    null
  );

  const { WatchTrainingStatus: stream } = useStreams();

  useEffect(() => {
    const abort = new AbortController();
    cilroy.getTrainingStatus({}, { signal: abort.signal }).then((response) => {
      setTrainingStatus(response.status);
      setFirstFetched(true);
    });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    if (stream === undefined || !firstFetched) return;

    const fetch = async () => {
      for await (const message of stream) {
        const response = WatchTrainingStatusResponse.fromJsonString(message);
        setTrainingStatus(response.status);
      }
    };
    fetch().then();
  }, [stream === undefined, firstFetched]);

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

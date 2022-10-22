import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { client, request } from "../lib/cilroy";

type Metadata = {
  key: string;
  description: string;
};

type MetadataContextType = {
  face?: Metadata;
  module?: Metadata;
};

const MetadataContext = createContext<MetadataContextType>({});

export type MetadataProviderProps = {
  children: ReactNode;
};

export function MetadataProvider({ children }: MetadataProviderProps) {
  const [face, setFace] = useState<Metadata>();
  const [module, setModule] = useState<Metadata>();

  useEffect(() => {
    const method = client.getFaceMetadata;
    const { result, abort } = request({ method });

    result.then((response) => {
      setFace({
        key: response.key,
        description: response.description,
      });
    });

    return () => abort.abort();
  }, [client]);

  useEffect(() => {
    const method = client.getModuleMetadata;
    const { result, abort } = request({ method });

    result.then((response) => {
      setModule({
        key: response.key,
        description: response.description,
      });
    });

    return () => abort.abort();
  }, [client]);

  const metadata = {
    face: face,
    module: module,
  };

  return <MetadataContext.Provider value={metadata} children={children} />;
}

export function useMetadata() {
  const context = useContext(MetadataContext);
  if (context === undefined) {
    throw new Error("useMetadata must be used within a MetadataProvider");
  }
  return context;
}

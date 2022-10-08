import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import cilroy from "../lib/cilroy";

type ConfigSchemaContextType = {
  controller?: Object;
  face?: Object;
  module?: Object;
};

const ConfigSchemaContext = createContext<ConfigSchemaContextType>({});

export type ConfigSchemaProviderProps = {
  children: ReactNode;
};

export function ConfigSchemaProvider({ children }: ConfigSchemaProviderProps) {
  const [controller, setController] = useState<Object>();
  const [face, setFace] = useState<Object>();
  const [module, setModule] = useState<Object>();

  useEffect(() => {
    const abort = new AbortController();
    cilroy
      .getControllerConfigSchema({}, { signal: abort.signal })
      .then((response) => {
        const schema = JSON.parse(response.schema);
        setController(schema);
      });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    const abort = new AbortController();
    cilroy
      .getFaceConfigSchema({}, { signal: abort.signal })
      .then((response) => {
        const schema = JSON.parse(response.schema);
        setFace(schema);
      });
    return () => abort.abort();
  }, [cilroy]);

  useEffect(() => {
    const abort = new AbortController();
    cilroy
      .getModuleConfigSchema({}, { signal: abort.signal })
      .then((response) => {
        const schema = JSON.parse(response.schema);
        setModule(schema);
      });
    return () => abort.abort();
  }, [cilroy]);

  const configSchema = {
    controller: controller,
    face: face,
    module: module,
  };

  return (
    <ConfigSchemaContext.Provider value={configSchema} children={children} />
  );
}

export function useConfigSchema() {
  const context = useContext(ConfigSchemaContext);
  if (context === undefined) {
    throw new Error(
      "useConfigSchema must be used within a ConfigSchemaProvider"
    );
  }
  return context;
}

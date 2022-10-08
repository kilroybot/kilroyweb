import { createContext, ReactNode, useContext } from "react";
import labels from "../theme/labels";

const LabelsContext = createContext<typeof labels | undefined>(undefined);

export type LabelsProviderProps = {
  children: ReactNode;
};

export function LabelsProvider({ children }: LabelsProviderProps) {
  return <LabelsContext.Provider value={labels} children={children} />;
}

export function useLabels() {
  const context = useContext(LabelsContext);
  if (context === undefined) {
    throw new Error("useLabels must be used within a LabelsProvider");
  }
  return context;
}

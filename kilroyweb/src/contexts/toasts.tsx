import { createContext, ReactNode, useCallback, useContext } from "react";
import { useLabels } from "./labels";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconExclamationMark, IconX } from "@tabler/icons";

export type Toast = (message: string) => void;

export type ToastsContext = {
  error: Toast;
  warning: Toast;
  success: Toast;
};

const ToastsContext = createContext<ToastsContext | undefined>(undefined);

export type ToastsProviderProps = {
  children: ReactNode;
};

export function ToastsProvider({ children }: ToastsProviderProps) {
  const labels = useLabels();

  const error: Toast = useCallback(
    (message) => {
      showNotification({
        title: labels.toasts.titles.error,
        message: message,
        color: "red",
        icon: <IconX />,
      });
    },
    [labels.toasts.titles.error]
  );

  const warning: Toast = useCallback(
    (message) => {
      showNotification({
        title: labels.toasts.titles.warning,
        message: message,
        color: "yellow",
        icon: <IconExclamationMark />,
      });
    },
    [labels.toasts.titles.warning]
  );

  const success: Toast = useCallback(
    (message) => {
      showNotification({
        title: labels.toasts.titles.success,
        message: message,
        color: "green",
        icon: <IconCheck />,
      });
    },
    [labels.toasts.titles.success]
  );

  return (
    <ToastsContext.Provider
      value={{
        error: error,
        warning: warning,
        success: success,
      }}
      children={children}
    />
  );
}

export function useToasts() {
  const context = useContext(ToastsContext);
  if (context === undefined) {
    throw new Error("useToasts must be used within a ToastsProvider");
  }
  return context;
}

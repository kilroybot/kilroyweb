import { Message, PartialMessage } from "@bufbuild/protobuf";
import { client, request } from "../lib/cilroy";
import { useCallback, useState } from "react";
import { CallOptions } from "@bufbuild/connect-web/dist/types/call-options";
import { RetryOptions } from "../lib/utils";

export type CallbackParams<I extends Message<I>, O> = {
  params?: PartialMessage<I>;
  retryOptions?: Omit<RetryOptions<O>, "fn">;
  abortPrevious?: boolean;
};

export default function useRequestCallback<I extends Message<I>, O>(
  method: (request: PartialMessage<I>, options?: CallOptions) => Promise<O>
) {
  const [abortPrevious, setAbortPrevious] = useState<() => void>(() => {});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null | undefined>(undefined);
  const [data, setData] = useState<O | undefined>(undefined);

  const callback = useCallback(
    async (params: CallbackParams<I, O> = {}) => {
      const {
        params: requestParams = {},
        retryOptions = { retriesLeft: 3 },
        abortPrevious: shouldAbortPrevious = true,
      } = params;

      setLoading(true);
      setError(undefined);
      setData(undefined);

      if (shouldAbortPrevious && abortPrevious) abortPrevious();

      try {
        const { result, abort } = request({
          method: method,
          params: requestParams,
          retryOptions: retryOptions,
        });
        setAbortPrevious(() => () => abort.abort());

        const data = await result;

        setLoading(false);
        setError(null);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    },
    [client]
  );

  return { callback, loading, error, data };
}

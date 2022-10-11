import {
  Code,
  ConnectError,
  createGrpcWebTransport,
  createPromiseClient,
} from "@bufbuild/connect-web";
import { CilroyService } from "./connectweb";
import { reconnect, ReconnectOptions, retry, RetryOptions } from "./utils";
import { Message, PartialMessage } from "@bufbuild/protobuf";
import { CallOptions } from "@bufbuild/connect-web/dist/types/call-options";

const transport = createGrpcWebTransport({
  baseUrl: "/api",
  credentials: "include",
  interceptors: [],
});

export const client = createPromiseClient(CilroyService, transport);

export type RequestOptions<I extends Message, O> = {
  method: (request: PartialMessage<I>, options?: CallOptions) => Promise<O>;
  params?: PartialMessage<I>;
  retryOptions?: Omit<RetryOptions<O>, "fn">;
};

export function request<I extends Message, O>({
  method,
  params,
  retryOptions,
}: RequestOptions<I, O>) {
  const abort = new AbortController();
  const fn = async () => await method(params, { signal: abort.signal });
  const ignoreError = (error) =>
    error instanceof ConnectError && error.code === Code.Canceled;

  const result = retry({
    fn: fn,
    ignoreError: ignoreError,
    ...retryOptions,
  });

  return { result: result, abort: abort.abort };
}

export type StreamOptions<I extends Message, O> = {
  method: (
    request: PartialMessage<I>,
    options?: CallOptions
  ) => AsyncIterable<O>;
  params?: PartialMessage<I>;
  reconnectOptions?: Omit<ReconnectOptions<O>, "fn">;
};

export function stream<I extends Message, O>({
  method,
  params,
  reconnectOptions,
}: StreamOptions<I, O>) {
  const abort = new AbortController();
  const fn = () => method(params, { signal: abort.signal });
  const ignoreError = (error) =>
    error instanceof ConnectError && error.code === Code.Canceled;

  const result = reconnect({
    fn: fn,
    ignoreError: ignoreError,
    ...reconnectOptions,
  });

  return { result: result, abort: abort.abort };
}

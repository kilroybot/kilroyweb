import {
  createGrpcWebTransport,
  createPromiseClient,
} from "@bufbuild/connect-web";
import { CilroyService } from "./connectweb";

const transport = createGrpcWebTransport({
  baseUrl: "/api",
  credentials: "include",
  interceptors: [],
});

export default createPromiseClient(CilroyService, transport);

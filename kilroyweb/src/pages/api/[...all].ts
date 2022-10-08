import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const apiUrl = process.env.KILROYWEB_API_URL || "http://localhost:13000";

const apiOptions = {
  target: apiUrl,
  pathRewrite: {
    ["^/api"]: "",
  },
  changeOrigin: true,
};

export default createProxyMiddleware("/api", apiOptions);

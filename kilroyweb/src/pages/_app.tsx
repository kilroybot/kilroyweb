import { useCallback, useState } from "react";
import { AppProps } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import {
  colorSchemeCookieAge,
  colorSchemeCookieName,
  defaultColorScheme,
} from "../theme/constants";
import { RouterTransition } from "../components/RouterTransition";
import theme from "../theme/theme";
import { LabelsProvider } from "../contexts/labels";
import { ToastsProvider } from "../contexts/toasts";
import { GetServerSidePropsContext } from "next";
import labels from "../theme/labels";
import { StatusProvider } from "../contexts/status";
import { TrainingStatusProvider } from "../contexts/trainingStatus";
import { RawMetricsProvider } from "../contexts/metrics";
import { ConfigProvider } from "../contexts/config";
import { StreamsProvider } from "../contexts/streams";
import { ConfigSchemaProvider } from "../contexts/configSchema";
import { MetadataProvider } from "../contexts/metadata";
import { FeedProvider } from "../contexts/feed";
import { PostSchemaProvider } from "../contexts/postSchema";
import { Provider } from "react-redux";
import { store } from "../state/store";

type MantineAppProps = {
  colorScheme: ColorScheme;
};

type ExtendedAppProps = AppProps & MantineAppProps;

export default function App(props: ExtendedAppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      const newColorScheme =
        value || (colorScheme === "dark" ? "light" : "dark");
      setColorScheme(newColorScheme);
      setCookie(colorSchemeCookieName, newColorScheme, {
        maxAge: colorSchemeCookieAge,
      });
    },
    [colorScheme, colorSchemeCookieName, colorSchemeCookieAge]
  );

  return (
    <>
      <Head>
        <meta name="description" content={labels.description} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Provider store={store}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ ...theme, colorScheme: colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <NotificationsProvider position="top-right">
              <LabelsProvider>
                <ToastsProvider>
                  <StreamsProvider>
                    <MetadataProvider>
                      <StatusProvider>
                        <TrainingStatusProvider>
                          <RawMetricsProvider>
                            <PostSchemaProvider>
                              <ConfigSchemaProvider>
                                <ConfigProvider>
                                  <FeedProvider>
                                    <RouterTransition />
                                    <props.Component {...props.pageProps} />
                                  </FeedProvider>
                                </ConfigProvider>
                              </ConfigSchemaProvider>
                            </PostSchemaProvider>
                          </RawMetricsProvider>
                        </TrainingStatusProvider>
                      </StatusProvider>
                    </MetadataProvider>
                  </StreamsProvider>
                </ToastsProvider>
              </LabelsProvider>
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </Provider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie(colorSchemeCookieName, ctx) || defaultColorScheme,
});

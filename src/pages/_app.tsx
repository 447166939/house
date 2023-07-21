import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import React, { useEffect } from "react";
import Head from "next/head";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../store";
import theme from "@/theme/index";
import createEmotionCache from "@/utils/createEmotionCache";
import TransitionEffect from "@/components/TransitionEffect";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "/src/style/normalize.scss";
import { NextPage } from "next";
import { ThemeProvider } from "@mui/material";
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}
function MyApp(props: MyAppProps) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { Component, ...rest }: any = props;
  const getLayout = Component.getLayout || ((page: NextPage) => page);
  const { store } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
export default MyApp;

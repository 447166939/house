import { wrapper } from "../store";
import React,{useEffect,Fragment} from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "@fontsource/nunito-sans";
import theme from "../theme";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./global.css";
import { AppProps} from 'next/app'
function MyApp(props: AppProps) {
    const {Component,pageProps} = props;
    useEffect(()=>{
        const jssStyles=document.querySelector("#jss-server-side")
        if(jssStyles){
            jssStyles.parentElement?.removeChild(jssStyles)
        }
    },[])
    return (
        <>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}


/*function App(props:AppProps) {
  const { Component,pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/!* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. *!/}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}*/

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
export default wrapper.withRedux(MyApp);
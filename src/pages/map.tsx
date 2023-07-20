import React, { ReactElement, useEffect, useState,Fragment } from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import { NextPage } from "next";
import Content from '@/components/Map/Content'
import Pannel from '@/components/Map/Pannel'
import * as styles from '@/style/mapStyle'
import Head from "next/head";
export type IPage = NextPage & { getLayout: (props: ReactElement) => ReactElement };
const Map: IPage = (props) => {
  useEffect(() => {
    document.body.classList.remove("fade-out");
  }, []);
  return (<Box css={styles.container}>
    <Head>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXuXEJU5uRHJ1i7jYkmAA5YsQrGCdSPvY"></script>
    </Head>
<Content/>
<Pannel/>
  </Box>)

};
export default Map;
Map.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

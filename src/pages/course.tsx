import React, { ReactElement, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import * as styles from "@/style/projectStyle";
import Layout from "@/components/layout";
import { NextPage } from "next";
export type IPage = NextPage & { getLayout: (props: ReactElement) => ReactElement };
const Project: IPage = (props) => {
  return <Box css={styles.container}>course</Box>;
};
export default Project;
Project.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

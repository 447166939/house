import React from "react";
import { Grid } from "@mui/material";
import * as styles from "./contentStyle";
import Tabs from "@/components/Home/Tabs";
import SubTask from "@/components/Home/SubTask";
import Chat from "@/components/Home/Chat";
export interface IContent {}
const Content: React.FC<IContent> = (props) => {
  return (
    <Grid css={styles.container}>
      <Tabs />
      <SubTask />
      <Chat />
    </Grid>
  );
};
export default Content;

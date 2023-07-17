import React from "react";
import { Box } from "@mui/material";
import * as styles from "./contentStyle";
import Tabs from "@/components/Home/Tabs";
import SubTask from "@/components/Home/SubTask";
import Chat from "@/components/Home/Chat";
export interface IContent {}
const Content: React.FC<IContent> = (props) => {
  return (
    <Box css={styles.container}>
      <Tabs />
      <SubTask />
      <Chat />
    </Box>
  );
};
export default Content;

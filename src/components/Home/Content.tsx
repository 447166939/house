import React from "react";
import { Box } from "@mui/material";
import * as styles from "./contentStyle";
import Tabs from "@/components/Home/Tabs";
import SubTask from "@/components/Home/SubTask";
import FileManage from "@/components/Home/FileManage";
import Chat from "@/components/Home/Chat";
import {useSelector} from "react-redux";
import {RootState} from "@/store/index";
export interface IContent {}
const Content: React.FC<IContent> = (props) => {
    const components=[
        <SubTask />,<FileManage />,<SubTask />]
    const {currentTab}=useSelector((state:RootState)=>state.global)
  return (
    <Box css={styles.container}>
      <Tabs />
        {components[currentTab]}
      <Chat />
    </Box>
  );
};
export default Content;

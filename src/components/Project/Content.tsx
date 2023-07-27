import React,{useMemo} from "react";
import { Box } from "@mui/material";
import * as styles from "./contentStyle";
import Tabs from "@/components/Project/Tabs";
import SubTask from "@/components/Project/SubTask";
import FileManage from "@/components/Project/FileManage";
import Chat from "@/components/Project/Chat";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
export interface IContent {}
const components=[<SubTask/>,<FileManage />,<Box key={3} style={{ height: "300px" }}></Box>]
const Content: React.FC<IContent> = (props) => {
  const { currentTab } = useSelector((state: RootState) => state.global);
  return (
    <Box css={styles.container}>
      <Tabs />
      {components[currentTab]}
      <Chat />
    </Box>
  );
};
export default Content;

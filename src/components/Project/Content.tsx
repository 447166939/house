import React from "react";
import { Box } from "@mui/material";
import * as styles from "./contentStyle";
import Tabs from "@/components/Project/Tabs";
import SubTask from "@/components/Project/SubTask";
import FileManage from "@/components/Project/FileManage";
import Chat from "@/components/Project/Chat";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
export interface IContent {}
const Content: React.FC<IContent> = (props) => {
  /*const components = [<SubTask key={1} />, <FileManage key={2} />, <Box key={3} style={{height:'300px'}}></Box>];*/
  const { currentTab } = useSelector((state: RootState) => state.global);
  const renderComponent = (currentTab: number) => {
    if (currentTab == 0) return <SubTask />;
    else if (currentTab == 1) return <FileManage />;
    else if (currentTab == 2) return <Box key={3} style={{ height: "300px" }}></Box>;
  };
  return (
    <Box css={styles.container}>
      <Tabs />
      {renderComponent(currentTab)}
      <Chat />
    </Box>
  );
};
export default Content;

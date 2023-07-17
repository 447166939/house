import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";
import { Box } from "@mui/material";
import * as styles from "@/components/Home/tabsStyle";
export interface ITabs {}
const Tabs: React.FC<ITabs> = (props) => {
  const tabs = [
    { id: 1, icon: "/task.png", text: "子任务细节描述" },
    { id: 2, icon: "/folder.png", text: "文件夹管理空间" },
    { id: 3, icon: "/backup.png", text: "备忘录" }
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const handleChangeTab=(idx:number)=>{
    setCurrentTab(idx)
  }
  return (
    <Box css={styles.container}>
      {tabs.map((item, index) => (
        <Box onClick={handleChangeTab.bind(null,index)} css={styles.tabItem} key={item.id}>
          <Image width={21} height={21} src={item.icon} alt={""} />
          <Box css={styles.tabItemText({ isActive: currentTab == index })}>{item.text}</Box>
          <Box css={styles.tabSplit({ isActive: currentTab == index })}></Box>
        </Box>
      ))}
      <Box css={styles.boderBottom}></Box>
    </Box>
  );
};
export default Tabs;

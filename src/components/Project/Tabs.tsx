import React, { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import * as styles from "@/components/Project/tabsStyle";
import { useDispatch, useSelector } from "react-redux";
import actions from "@/store/modules/global/action";
const { setTab } = actions;
import { RootState } from "@/store/index";
export interface ITabs {}
const Tabs: React.FC<ITabs> = (props) => {
  const { tabs, currentTab } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  const handleChangeTab = (idx: number) => {
    dispatch(setTab(idx));
  };
  return (
    <Box css={styles.container}>
      {tabs.map((item, index) => (
        <Box onClick={handleChangeTab.bind(null, index)} css={styles.tabItem} key={item.id}>
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

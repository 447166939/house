import React from "react";
import { Box } from "@mui/material";
import * as styles from "./pannelStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import actions from "@/store/modules/map/action";
import Tabpane1 from "@/components/Map/Tabpane1";
import Tabpane2 from "@/components/Map/Tabpane2";
const { setTab } = actions;
export interface IPannel {}
const Pannel: React.FC<IPannel> = (props) => {
  const { tabs, currentTab } = useSelector((state: RootState) => state.map);
  const dispatch = useDispatch();
  const handleClick = (index: number) => {
    dispatch(setTab(index));
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.tab}>
        {tabs.map((item, index) => (
          <Box
            onClick={handleClick.bind(null, index)}
            css={styles.tabItem({ isActive: currentTab == index })}
            key={index}>
            {item.text}
          </Box>
        ))}
      </Box>
      {[<Tabpane1 />, <Tabpane2 />][currentTab]}
    </Box>
  );
};
export default Pannel;

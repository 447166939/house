import React, { Fragment, useState } from "react";
import { Box, Checkbox, ClickAwayListener, IconButton } from "@mui/material";
import * as styles from "./pannelStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import actions from "@/store/modules/global/action";
import TaskTabpane from "@/components/Project/TaskTabpane";
import CaculateTabpane from "@/components/Project/CaculateTapane";
const { setPannel } = actions;
export interface IPannel {}
const Pannel: React.FC<IPannel> = (props) => {
  const { pannels, currentPannel } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  const handleChangePannel = (idx: number) => {
    dispatch(setPannel(idx));
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.pannelTabs}>
        {pannels.map((item, index) => (
          <Box
            onClick={handleChangePannel.bind(null, index)}
            css={styles.pannelTabItem({ isActive: currentPannel == index })}
            key={item.id}>
            <Box css={styles.tabItemBorder({ isActive: currentPannel == index })}></Box>
            <span css={styles.pannelTabItemText({ isActive: currentPannel == index })}>
              {item.text}
            </span>
          </Box>
        ))}
      </Box>
      {[<TaskTabpane />, <CaculateTabpane />, <TaskTabpane />][currentPannel]}
    </Box>
  );
};
export default Pannel;

import React, {Fragment, useEffect, useState,useRef} from "react";
import { Box, Checkbox, ClickAwayListener, IconButton } from "@mui/material";
import * as styles from "./pannelStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import actions from "@/store/modules/global/action";
import TaskTabpane from "@/components/Project/TaskTabpane";
import CaculateTabpane from "@/components/Project/CaculateTapane";
const { setPannel,setPannelwidth } = actions;
export interface IPannel {}
const Pannel: React.FC<IPannel> = (props) => {
  const { pannels, currentPannel,pannelWidth } = useSelector((state: RootState) => state.global);
  const pannelRef=useRef<HTMLDivElement|null>(null)
  const dispatch = useDispatch();
  const handleChangePannel = (idx: number) => {
    dispatch(setPannel(idx));
  };
    const resize = (event: MouseEvent) => {
        const sw=window.innerWidth
        const size = `${sw-event.x}px`;
        dispatch(setPannelwidth(size));
    };
    useEffect(() => {
        pannelRef.current!.addEventListener("mousedown", (event) => {
            document.addEventListener("mousemove", resize, false);
            document.addEventListener(
                "mouseup",
                () => {
                    document.removeEventListener("mousemove", resize, false);
                },
                false
            );
        });
    }, []);
  return (
    <Box style={{flexBasis:pannelWidth}} css={styles.container}>
        <Box ref={pannelRef} css={styles.resizer}></Box>
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

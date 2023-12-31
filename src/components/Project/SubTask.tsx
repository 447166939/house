import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import checkedIcon from "@/assets/images/checked.png";
import Image from "next/image";
import * as styles from "./subtaskStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import { useResize } from "@/hooks/useResize";
import actions from "@/store/modules/global/action";
const { setSubtaskheight } = actions;
export interface ISubtask {}
const SubTask: React.FC<ISubtask> = (props) => {
  const data = {
    title: "第二阶段：",
    text: "2.办理房产保险(Insurance) - 此子任务需要完成: ",
    list: [
      "1.完成房屋过户手续合同流程",
      "2.办理房产Insurance",
      "3.收集原房屋出租合同以及相关文件",
      "4.和Property Manager沟通",
      "5.(支持自定义子任务)"
    ]
  };
  const dispatch = useDispatch();
  const resize: any = (event: MouseEvent) => {
    const size = `${event.y - 80}px`;
    dispatch(setSubtaskheight(size));
  };
  const resizeRef = useRef<HTMLDivElement | null>(null);
  useResize(resizeRef, resize);
  const { subTaskHeight } = useSelector((state: RootState) => state.global);
  return (
    <Box style={{ flexBasis: subTaskHeight }} css={styles.container}>
      <Box ref={resizeRef} css={styles.resizer}></Box>
      <Box css={styles.taskHead}>
        <Box css={styles.taskTitle}>{data.title}</Box>
        <Box css={styles.text}>{data.text}</Box>
      </Box>
      <Box css={styles.taskList}>
        {data.list.map((item, index) => (
          <Box css={styles.listItem} key={index}>
            <Image css={styles.checkIcon} src={checkedIcon} alt={""} />
            <Box css={styles.listText}>{item}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default SubTask;

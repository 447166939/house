import React, { Fragment, useState } from "react";
import { Box, Checkbox, ClickAwayListener, IconButton } from "@mui/material";
import * as styles from "./pannelStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import actions from "@/store/modules/global/action";
import addIcon from "@/assets/images/add.png";
import elliseIcon from "@/assets/images/ellisis.png";
import Image from "next/image";
const { setPannel } = actions;
export interface IPannel {}
const Pannel: React.FC<IPannel> = (props) => {
  const data = {
    title: "此环节需要完成：",
    list: [
      { id: 1, text: "1.完成房屋过户手续合同流程", status: 0 },
      { id: 2, text: "2.办理房产Insurance", status: 1 },
      { id: 3, text: "3.收集原房屋出租合同以及相关文件", status: 0 },
      { id: 4, text: "4.和Property Manager沟通", status: 0 },
      { id: 5, text: "5.(支持自定义子任务)", status: 0 }
    ]
  };
  const { pannels, currentPannel } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  const handleChangePannel = (idx: number) => {
    dispatch(setPannel(idx));
  };
  const [checked, setChecked] = useState<any>([]);
  const [currentMenu, setCurrentMenu] = useState<number | undefined>();
  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    console.log(e.target.value);
    setChecked((pre: any) => {
      pre[idx] = e.target.checked;
      return [...pre];
    });
    console.log(checked);
  };
  const handleClick = (idx: number) => {
    setCurrentMenu(idx);
  };
  const handleClickaway = (idx: number) => {
    setCurrentMenu((pre) => {
      if (pre == idx) {
        return -1;
      } else return pre;
    });
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
      <Box css={styles.taskBox}>
        <Box css={styles.taskTitle}>第二阶段</Box>
        <Box css={styles.taskBottom}>
          <Box css={styles.taskNum}>2</Box>
          <Box css={styles.taskText}>Offer被采纳</Box>
        </Box>
      </Box>
      <Box css={styles.taskDetail}>
        <Box css={styles.taskHead}>
          <Box css={styles.taskHeadTitle}>{data.title}</Box>
          <IconButton css={styles.addBtn}>
            <Image css={styles.addIcon} src={addIcon} alt={""} />
          </IconButton>
        </Box>
        <Fragment>
          {data.list.map((item, index) => (
            <Box css={styles.taskItem} key={index}>
              <span
                css={styles.taskListItemText({
                  isChecked: checked[index],
                  isGoing: item.status == 1
                })}>
                {item.text}
              </span>
              <Checkbox
                checked={checked[index] || false}
                onChange={(e) => handleCheckedChange(e, index)}
                color={(item.status == 1 ? "green" : "checkbox") as "primary"}
                size={"small"}
                css={styles.taskCheckbox({ isGoing: item.status == 1 })}
              />

              <ClickAwayListener onClickAway={handleClickaway.bind(null, index)}>
                <IconButton onClick={handleClick.bind(null, index)} css={styles.menuBtn}>
                  <Image css={styles.elliseIcon} src={elliseIcon} alt={""} />
                  <Box css={styles.menus({ isActive: currentMenu == index })}>
                    <Box css={styles.menuItem}>编辑</Box>
                    <Box css={styles.menuItem}>删除</Box>
                    <Box css={styles.menuItem}>锁定</Box>
                  </Box>
                </IconButton>
              </ClickAwayListener>
            </Box>
          ))}
        </Fragment>
      </Box>
    </Box>
  );
};
export default Pannel;

import React, { Fragment } from "react";
import { Box} from "@mui/material";
import * as styles from "./pannelStyle";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/store/index";
import { CheckBox } from "@mui/icons-material";
import actions from "@/store/modules/global/action";
const {setPannel}=actions
export interface IPannel {}
const Pannel: React.FC<IPannel> = (props) => {
  const data = {
    title: "此环节需要完成：",
    list: [
      "1.完成房屋过户手续合同流程",
      "2.办理房产Insurance",
      "3.收集原房屋出租合同以及相关文件",
      "4.和Property Manager沟通",
      "5.(支持自定义子任务)"
    ]
  };
  const { pannels, currentPannel } = useSelector((state: RootState) => state.global);
  const dispatch=useDispatch()
    const handleChangePannel=(idx:number)=>{
      dispatch(setPannel(idx))
    }
  return (
    <Box css={styles.container}>
      <Box css={styles.pannelTabs}>
        {pannels.map((item, index) => (
          <Box onClick={handleChangePannel.bind(null,index)} css={styles.pannelTabItem({ isActive: currentPannel == index })} key={item.id}>
            <Box css={styles.tabItemBorder({isActive:currentPannel==index})}></Box>
            <span css={styles.pannelTabItemText({isActive:currentPannel==index})}>{item.text}</span>
          </Box>
        ))}
      </Box>
      <Box css={styles.taskBox}>
        <Box css={styles.taskTitle}>第二阶段</Box>
        <Box>
          <Box>2</Box>
          <Box>Offer被采纳</Box>
        </Box>
      </Box>
      <Box>
        <Box>{data.title}</Box>
        <Fragment>
          {data.list.map((item, index) => (
            <Box key={index}>
              <span>{item}</span>
              <CheckBox />
            </Box>
          ))}
        </Fragment>
      </Box>
    </Box>
  );
};
export default Pannel;

import React from "react";
import { Box } from "@mui/material";
import * as styles from "./contactHeaderStyle";
import actions from '@/store/modules/contact/action'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/index";
const {setTab}=actions;
interface IContact {}
const Contact: React.FC<IContact> = (props) => {
  const {currentTab,tabs}=useSelector((state:RootState)=>state.contact)
  const dispatch=useDispatch()
  const handleTabChange=(idx:number)=>{
    dispatch(setTab(idx))
  }
  return <Box css={styles.container}>
    {tabs.map((item,index)=>(
        <Box css={styles.tabItem({isActive:currentTab==index})} onClick={handleTabChange.bind(null,index)} key={item.id}>{item.text}</Box>
    ))}
  </Box>;
};
export default Contact;

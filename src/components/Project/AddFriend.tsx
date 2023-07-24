import React from "react";
import {Avatar, Box, Button, IconButton, InputBase} from "@mui/material";
import * as styles from "./addFriendStyle";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import addPersonIcon from "@/assets/images/addPerson.png";
import Image from "next/image";
import searchIcon from "@/assets/images/mapSearch.png";
import arrowRight from '@/assets/images/arrowRight.png'
export interface IAddFriend {}
const AddFriend: React.FC<IAddFriend> = () => {
  const { addFriendDialogOpen,newFriends } = useSelector((state: RootState) => state.global);
  return addFriendDialogOpen ? (
    <Box css={styles.container}>
      <Box css={styles.header}>
        <Image css={styles.addPersonIcon} src={addPersonIcon} alt={""} />
        <Box css={styles.searchInputWrapper}>
          <InputBase placeholder={"输入邮箱/用户名/账户"} css={styles.searchInput} />
          <IconButton>
            <Image css={styles.searchIcon} src={searchIcon} alt={""} />
          </IconButton>
        </Box>
        <Box css={styles.headerText}>联系人中心</Box>
        <Image css={styles.rightIcon} src={arrowRight} alt={''} />
      </Box>
      <Box css={styles.title}>新朋友</Box>
      <Box css={styles.list}>
        {newFriends.map((item:any,index:number)=>(
            <Box css={styles.listItem} key={index}>
                <Avatar css={styles.avatar} src={item.avatar} />
                <Box css={styles.name}>{item.name}</Box>
                {item.status=='0' ? <Button css={styles.accept} variant={'contained'}>接受</Button>:
                    (item.status=='1' ? <Box css={styles.statusText}>已添加</Box> :<Box css={styles.statusText}>已拒绝</Box>)}
            </Box>
        ))}
      </Box>
    </Box>
  ) : null;
};
export default AddFriend;

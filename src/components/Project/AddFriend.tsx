import React from "react";
import {Box, IconButton, InputBase} from "@mui/material";
import * as styles from "./addFriendStyle";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import addPersonIcon from '@/assets/images/addPerson.png'
import Image from "next/image";
import searchIcon from "@/assets/images/mapSearch.png";
export interface IAddFriend {}
const AddFriend: React.FC<IAddFriend> = () => {
  const { addFriendDialogOpen } = useSelector((state: RootState) => state.global);
  return addFriendDialogOpen ? <Box css={styles.container}>
    <Box css={styles.header}>
      <Image css={styles.addPersonIcon} src={addPersonIcon} alt={''} />
      <Box css={styles.searchInputWrapper}>
        <InputBase placeholder={"搜索一下"} css={styles.searchInput} />
        <IconButton>
          <Image css={styles.searchIcon} src={searchIcon} alt={""} />
        </IconButton>
      </Box>
    </Box>
  </Box> : null;
};
export default AddFriend;

import React from "react";
import { Box } from "@mui/material";
import * as styles from "./addFriendStyle";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
export interface IAddFriend {}
const AddFriend: React.FC<IAddFriend> = () => {
  const { addFriendDialogOpen } = useSelector((state: RootState) => state.global);
  return addFriendDialogOpen ? (<Box css={styles.container}></Box>): null;
};
export default AddFriend;

import React from "react";
import { Avatar, Box, IconButton, InputBase, styled, Switch } from "@mui/material";
import * as styles from "./chatwindowStyle";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import Image from "next/image";
import circlePlusIcon from "@/assets/images/circlePlus.png";
import faceIcon from "@/assets/images/face.png";
export interface IChatWindow {}
const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: "#00E1FE",
      "& + .MuiSwitch-track": {
        backgroundColor: "#00E1FE",
        opacity: 1
      }
    },
    "& .MuiSwitch-thumb": {
      color: "#313136"
    }
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#000"
  }
}));
const ChatWindow: React.FC<IChatWindow> = (props) => {
  const { chatList } = useSelector((state: RootState) => state.contact);
  return (
    <Box css={styles.container}>
      <Box css={styles.chatHeader}>
        <Box css={styles.chatHeaderText}>聊天窗口</Box>
        <Box css={styles.switchText}>翻译</Box>
        <CustomSwitch size={"medium"} />
      </Box>
      <Box css={styles.chatList}>
        {chatList.map((item, index) => (
          <Box css={styles.chatItem} key={index}>
            <Avatar css={styles.chatAvatar} src={item.avatar} />
            <Box css={styles.chatItemRight}>
              <Box css={styles.chatName}>{item.name}</Box>
              <Box css={styles.chatMsg}>{item.msg}</Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box css={styles.chatSend}>
        <InputBase css={styles.chatSendInput} placeholder={"输入你想说的内容"} />
        <IconButton>
          <Image css={styles.chatPlus} src={circlePlusIcon} alt={""} />
        </IconButton>
        <IconButton>
          <Image css={styles.faceIcon} src={faceIcon} alt={""} />
        </IconButton>
      </Box>
    </Box>
  );
};
export default ChatWindow;

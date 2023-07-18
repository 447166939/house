import React from "react";
import { Box } from "@mui/material";
import * as styles from "./chatwindowStyle";
export interface IChatWindow {}
const ChatWindow: React.FC<IChatWindow> = (props) => {
  return <Box css={styles.container}></Box>;
};
export default ChatWindow;

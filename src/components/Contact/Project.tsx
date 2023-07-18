import React from "react";
import { Box } from "@mui/material";
import ContactSider from "@/components/Contact/ContactSider";
import ChatWindow from "@/components/Contact/ChatWindow";
import * as styles from "./projectStyle";
import ContactPannel from "@/components/Contact/ContactPannel";
export interface IProject {}
const Project: React.FC<IProject> = (props) => {
  return (
    <Box css={styles.container}>
      <ContactSider />
      <ChatWindow />
      <ContactPannel />
    </Box>
  );
};
export default Project;

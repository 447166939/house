import React from "react";
import {Avatar, Box, InputBase, TextareaAutosize} from "@mui/material";
import * as styles from "./contactPannelStyle";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
export interface IContactPannel {}
const ContactPannel: React.FC<IContactPannel> = (props) => {
  const { contactInfo } = useSelector((state: RootState) => state.contact);
  return (
    <Box css={styles.container}>
      <Box css={styles.contactName}>{contactInfo.name}</Box>
        <Box css={styles.remarkBox}>
          <Avatar css={styles.remarkAvatar} src={contactInfo.avatar} />
          <InputBase css={styles.remarkTextarea} multiline placeholder={'这是一句个人名言'} />
          <Box css={styles.tagBox}>
          {contactInfo.tags.map((item:any,index:number)=>(<Box css={styles.remarkTag} key={index}>
            {item}
          </Box>))}
          </Box>
        </Box>
      <Box css={styles.midBox}>
<Box>

</Box>
      </Box>
    </Box>
  );
};
export default ContactPannel;

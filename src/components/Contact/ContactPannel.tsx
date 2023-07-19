import React from "react";
import { Avatar, Box, IconButton, InputBase, TextareaAutosize } from "@mui/material";
import * as styles from "./contactPannelStyle";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import rightIcon from "@/assets/images/right.png";
import Image from "next/image";
export interface IContactPannel {}
const ContactPannel: React.FC<IContactPannel> = (props) => {
  const { contactInfo } = useSelector((state: RootState) => state.contact);
  return (
    <Box css={styles.container}>
      <Box css={styles.contactName}>{contactInfo.name}</Box>
      <Box css={styles.remarkBox}>
        <Avatar css={styles.remarkAvatar} src={contactInfo.avatar} />
        <InputBase css={styles.remarkTextarea} multiline placeholder={"这是一句个人名言"} />
        <Box css={styles.tagBox}>
          {contactInfo.tags.map((item: any, index: number) => (
            <Box css={styles.remarkTag} key={index}>
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box css={styles.midBox}>
        <Box css={styles.potts}>
          <Box css={styles.pottsTitle}>{contactInfo.potts.title}</Box>
          <Box css={styles.pottsText}>{contactInfo.potts.text}</Box>
        </Box>
        <Box css={styles.date}>
          <Box css={styles.dateTitle}>{contactInfo.date.title}</Box>
          <Box css={styles.dateText}>{contactInfo.date.text}</Box>
        </Box>
        <Box css={styles.note}>
          <Box css={styles.noteTitle}>{contactInfo.note.title}</Box>
          <Box css={styles.noteText}>{contactInfo.note.text}</Box>
        </Box>
      </Box>
      <Box css={styles.serverBox}>
        <Box css={styles.serverText}>{contactInfo.server}</Box>
        <IconButton css={styles.rightIconBtn}>
          <Image css={styles.rightIcon} src={rightIcon} alt={""} />
        </IconButton>
      </Box>
      <Box css={styles.friendsBox}>
        <Box css={styles.friendsText}>{contactInfo.server}</Box>
        <IconButton css={styles.friendRightBtn}>
          <Image css={styles.rightIcon} src={rightIcon} alt={""} />
        </IconButton>
      </Box>
    </Box>
  );
};
export default ContactPannel;

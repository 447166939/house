import React from "react";
import { Avatar, Box, IconButton, InputBase } from "@mui/material";
import * as styles from "./contactSiderStyle";
import contactAdd from "@/assets/images/contactAdd.png";
import searchIcon from "@/assets/images/search.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import mySetting from "@/assets/images/mysetting.png";
export interface IContactSider {}
const ContactSider: React.FC<IContactSider> = (props) => {
  const { contacts } = useSelector((state: RootState) => state.contact);
  const { userInfo } = useSelector((state: RootState) => state.global);
  return (
    <Box css={styles.container}>
      <Box css={styles.contactHead}>
        <Box css={styles.contactHeadText}>项目联系人</Box>
        <IconButton>
          <Image css={styles.contactAdd} src={contactAdd} alt={""} />
        </IconButton>
      </Box>
      <Box css={styles.searchInputWrapper}>
        <InputBase css={styles.searchInput} placeholder={"搜索一下"} />
        <IconButton>
          <Image css={styles.searchIcon} src={searchIcon} alt={""} />
        </IconButton>
      </Box>
      <Box css={styles.contacts}>
        {contacts.map((item, index) => (
          <Box css={styles.contactItem} key={item.id}>
            <Avatar css={styles.contactAvatar} src={item.avatar} />
            <Box css={styles.contactName}>{item.name}</Box>
          </Box>
        ))}
        <Box css={styles.myInfo} key={"me"}>
          <Avatar css={styles.myAvatar} src={userInfo.avatar} />
          <Box css={styles.myText}>
            <Box css={styles.myContactName}>{userInfo.name}</Box>
            <Box css={styles.myStatus}>{userInfo.status}</Box>
          </Box>
          <IconButton css={styles.mySettingBtn}>
            <Image css={styles.mySetting} src={mySetting} alt={""} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
export default ContactSider;

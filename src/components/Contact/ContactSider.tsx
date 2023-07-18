import React from "react";
import {Box, IconButton, InputBase} from "@mui/material";
import * as styles from "./contactSiderStyle";
import contactAdd from '@/assets/images/contactAdd.png'
import searchIcon from '@/assets/images/search.png'
import Image from "next/image";
export interface IContactSider {}
const ContactSider: React.FC<IContactSider> = (props) => {
  return <Box css={styles.container}>
    <Box css={styles.contactHead}>
      <Box css={styles.contactHeadText}>项目联系人</Box>
      <IconButton>
      <Image css={styles.contactAdd} src={contactAdd} alt={''} />
      </IconButton>
    </Box>
    <Box css={styles.searchInputWrapper}>
      <InputBase css={styles.searchInput} placeholder={'搜索一下'} />
      <IconButton>
        <Image css={styles.searchIcon} src={searchIcon} alt={''}/>
      </IconButton>
    </Box>
    <Box css={styles.contacts}>

    </Box>
  </Box>;
};
export default ContactSider;

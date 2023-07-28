import React from "react";
import { Avatar, Box, IconButton, InputBase, SvgIcon } from "@mui/material";
import * as styles from "./contactSiderStyle";
import contactAdd from "@/assets/images/addPerson.png";
import searchIcon from "@/assets/images/search.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import mySetting from "@/assets/images/mysetting.png";
export interface IContactSider {}
function AddIcon(props: any) {
  return (
    <SvgIcon viewBox={"0 0 22 19"} {...props}>
      <path
        d="M3.92189 5.3398C3.92035 5.97379 4.0439 6.60186 4.28546 7.18804C4.52701 7.77421 4.88183 8.30698 5.32959 8.75582C5.77735 9.20467 6.30926 9.56077 6.89484 9.80375C7.48043 10.0467 8.1082 10.1718 8.74219 10.1718C9.37619 10.1718 10.004 10.0467 10.5895 9.80375C11.1751 9.56077 11.707 9.20467 12.1548 8.75582C12.6026 8.30698 12.9574 7.77421 13.1989 7.18804C13.4405 6.60186 13.564 5.97379 13.5625 5.3398C13.564 4.70581 13.4405 4.07774 13.1989 3.49156C12.9574 2.90539 12.6026 2.37262 12.1548 1.92378C11.707 1.47493 11.1751 1.11883 10.5895 0.875855C10.004 0.632881 9.37619 0.507812 8.74219 0.507813C8.1082 0.507812 7.48043 0.632881 6.89484 0.875855C6.30926 1.11883 5.77735 1.47493 5.32959 1.92378C4.88183 2.37262 4.52701 2.90539 4.28546 3.49156C4.0439 4.07774 3.92035 4.70581 3.92189 5.3398ZM14.7676 8.59351H21.998V10.5216H14.7676V8.59351Z"
        fill="white"
      />
      <path
        d="M19.3488 5.94189V13.1724H17.4207V5.94189H19.3488ZM7.53906 11.3647H9.9492C11.8668 11.3647 13.7059 12.1265 15.0619 13.4825C16.4179 14.8385 17.1797 16.6776 17.1797 18.5952H0.308594C0.308594 16.6776 1.07037 14.8385 2.42635 13.4825C3.78232 12.1265 5.62142 11.3647 7.53906 11.3647Z"
        fill="white"
      />
    </SvgIcon>
  );
}
const ContactSider: React.FC<IContactSider> = (props) => {
  const { contacts } = useSelector((state: RootState) => state.contact);
  const { userInfo } = useSelector((state: RootState) => state.global);
  return (
    <Box css={styles.container}>
      <Box css={styles.contactHead}>
        <Box css={styles.contactHeadText}>项目联系人</Box>
        <IconButton>
          <AddIcon css={styles.contactAdd} />
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
            <Box css={styles.contactRight}>
              <Box css={styles.contactName}>{item.name}</Box>
              <Box css={styles.contactTags}>
                {item.tags.map((item: any, index: number) => (
                  <Box css={styles.contactTagItem} key={index}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
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

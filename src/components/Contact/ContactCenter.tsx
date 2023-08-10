import React, { useState } from "react";
import { css } from "@emotion/react";
import {
  Avatar,
  Grid,
  Box,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  PaperProps,
  styled
} from "@mui/material";
import * as styles from "./contactCenterStyle";
import Image from "next/image";
import searchIcon from "@/assets/images/search.png";
import downIcon from "@/assets/images/down.png";
import addIcon from "@/assets/images/centerContactAdd.png";
import checkIcon from "@/assets/images/check.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
export interface IContactCenter {}
const ContactCenter: React.FC<IContactCenter> = (props) => {
  const [cate, setCate] = useState("");
  const [filter, setFilter] = useState("");
  const { centerContacts } = useSelector((state: RootState) => state.contact);
  const handleChange = (event: SelectChangeEvent) => {
    setCate(event.target.value);
  };
  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.centerHeader}>
        <Box css={styles.centerHeadTitle}>全部联系人</Box>
        <Box css={styles.searchInputWrapper}>
          <InputBase css={styles.searchInput} placeholder={"搜索"} />
          <IconButton>
            <Image css={styles.searchIcon} src={searchIcon} alt={""} />
          </IconButton>
        </Box>
        <Box css={styles.cateBox}>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "#111113",
                  color: "#A2AAB8",
                  fontSize: "15px",
                  border: "1px solid #36404E"
                }
              }
            }}
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            value={cate}
            onChange={handleChange}
            input={<InputBase css={styles.selectInput} name="cate" id="role-cate" />}>
            <MenuItem css={styles.selectMenuItem} value="">
              <em>排序分类</em>
            </MenuItem>
            <MenuItem css={styles.selectMenuItem} value={10}>Admin</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={20}>RealEstate</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={30}>Agent</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={40}>Property</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={50}>Manager</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={60}>Contractor</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={70}>Architect</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={80}>Accountant</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={90}>Lawyer</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={100}>Private</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={110}>Investor</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={120}>Loaner & Lender</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={130}>oint</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={140}>Venture</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={150}>Others</MenuItem>
          </Select>
        </Box>
        <Box css={styles.filterBox}>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "#111113",
                  color: "#A2AAB8",
                  fontSize: "15px",
                  border: "1px solid #36404E"
                }
              }
            }}
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            value={filter}
            onChange={handleFilterChange}
            input={<InputBase css={styles.selectInput} name="cate" id="role-cate" />}>
            <MenuItem css={styles.selectMenuItem} value="">
              <em>过滤</em>
            </MenuItem>
            <MenuItem css={styles.selectMenuItem} value={10}>按所在地区过滤</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={20}>按用户角色过滤</MenuItem>
            <MenuItem css={styles.selectMenuItem} value={30}>按好友类别过滤</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box css={styles.contactsBox}>
        <Box css={styles.contactList}>
          {centerContacts.map((item, index) => (
            <Box key={index}>
              <Box css={styles.card}>
                <Box css={styles.topBox}>
                  <Avatar src={item.avatar} />
                  <Box css={styles.profileBox}>
                    <Box css={styles.profileName}>{item.name}</Box>
                    <InputBase
                      css={styles.profileInput}
                      multiline
                      placeholder={"这是一句个人简介"}
                      minRows={3}
                      maxRows={3}
                    />
                  </Box>
                  {item.isFriend ? (
                    <IconButton css={styles.topRightBtn}>
                      <Image css={styles.checkIcon} src={checkIcon} alt={""} />
                    </IconButton>
                  ) : (
                    <IconButton css={styles.topRightBtn}>
                      <Image css={styles.addIcon} src={addIcon} alt={""} />
                    </IconButton>
                  )}
                </Box>
                <Box css={styles.bottomBox}>
                  {item.tags.map((item: any, index: number) => (
                    <Box css={styles.tagText} key={index}>
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default ContactCenter;

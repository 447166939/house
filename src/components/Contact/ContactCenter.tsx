import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Box,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent
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
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            value={cate}
            onChange={handleChange}
            input={<InputBase css={styles.selectInput} name="cate" id="role-cate" />}>
            <MenuItem value="">
              <em>排序分类</em>
            </MenuItem>
            <MenuItem value={10}>分类1</MenuItem>
            <MenuItem value={20}>分类2</MenuItem>
            <MenuItem value={30}>分类3</MenuItem>
          </Select>
        </Box>
        <Box css={styles.filterBox}>
          <Select
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            value={filter}
            onChange={handleFilterChange}
            input={<InputBase css={styles.selectInput} name="cate" id="role-cate" />}>
            <MenuItem value="">
              <em>过滤</em>
            </MenuItem>
            <MenuItem value={10}>选项1</MenuItem>
            <MenuItem value={20}>选项2</MenuItem>
            <MenuItem value={30}>选项3</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box css={styles.contactsBox}>
        <Box css={styles.contactList}>
          {centerContacts.map((item, index) => (
            <Box  key={index}>
              <Box css={styles.card}>
                <Box css={styles.topBox}>
                  <Avatar src={item.avatar} />
                  <Box css={styles.profileBox}>
                    <Box css={styles.profileName}>{item.name}</Box>
                    <InputBase
                      css={styles.profileInput}
                      multiline
                      placeholder={"这是一句个人简介"}
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

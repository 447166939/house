import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import * as styles from "./tabpane1Style";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import Image from "next/image";
import downIcon from "@/assets/images/greendown.png";
import locationIcon from "@/assets/images/location.png";
import bedroomIcon from "@/assets/images/bedroomIcon.png";
import bathroomIcon from "@/assets/images/bathroomIcon.png";
import houseIcon from "@/assets/images/house.png";
import likeIcon from "@/assets/images/like.png";
import unlikeIcon from "@/assets/images/unlike.png";
import HouseDetail from "@/components/Map/HouseDetail";
export interface ITabpane1 {}
const Tabpane1: React.FC<ITabpane1> = (props) => {
  const [cate, setCate] = useState("10");
  const [open, setOpen] = useState(false);
  const openDetail = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { tabpane1Data } = useSelector((state: RootState) => state.map);
  const handleCateChange = (event: SelectChangeEvent) => {
    setCate(event.target.value);
  };
  const like = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const unlike = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.title}>{tabpane1Data.title}</Box>
      <Box css={styles.head}>
        <Box css={styles.result}>{tabpane1Data.result}</Box>
        <Box css={styles.cateBox}>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "#313136",
                  color: "#fff",
                  fontSize: "16px"
                }
              }
            }}
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            value={cate}
            onChange={handleCateChange}
            input={<InputBase css={styles.selectInput} name="cate" id="cate" />}>
            <MenuItem css={styles.selectItem} value={10}>
              最新
            </MenuItem>
            <MenuItem css={styles.selectItem} value={20}>
              适合您的家
            </MenuItem>
            <MenuItem css={styles.selectItem} value={30}>
              价格从高到低
            </MenuItem>
            <MenuItem css={styles.selectItem} value={40}>
              价格从低到高
            </MenuItem>
            <MenuItem css={styles.selectItem} value={50}>
              最新卧室浴室
            </MenuItem>
            <MenuItem css={styles.selectItem} value={60}>
              平方英尺
            </MenuItem>
            <MenuItem css={styles.selectItem} value={70}>
              批量大小
            </MenuItem>
          </Select>
        </Box>
      </Box>
      <Box css={styles.gridContainer}>
        <Box css={styles.list}>
          {tabpane1Data.list.map((item: any, index: number) => (
            <Box onClick={openDetail} key={index} css={styles.card}>
              <Box css={styles.dateBox}>{item.date}</Box>
              {item.isCollect ? (
                <IconButton onClick={like} css={styles.likeBtn}>
                  <Image css={styles.likeIcon} src={likeIcon} alt={""} />
                </IconButton>
              ) : (
                <IconButton onClick={unlike} css={styles.unlikeBtn}>
                  <Image css={styles.unlikeIcon} src={unlikeIcon} alt={""} />
                </IconButton>
              )}
              <Image css={styles.cardPic} width={313} height={200} src={item.imgUrl} alt={""} />
              <Box css={styles.listTitle}>{item.title}</Box>
              <Box css={styles.address}>
                <Image css={styles.addressIcon} src={locationIcon} alt={""} />
                <Box css={styles.listAdress}>{item.address}</Box>
              </Box>
              <Box css={styles.listFooter}>
                <Box css={styles.footerItem}>
                  <Image css={styles.bedroomIcon} src={bedroomIcon} alt={""} />
                  <Box css={styles.bedroomText}>{item.bedroom}</Box>
                </Box>
                <Box css={styles.footerItem}>
                  <Image css={styles.bathroomIcon} src={bathroomIcon} alt={""} />
                  <Box css={styles.bathroomText}>{item.bathroom}</Box>
                </Box>
                <Box css={styles.footerItem}>
                  <Image css={styles.houseIcon} src={houseIcon} alt={""} />
                  <Box css={styles.houseText}>{item.area}</Box>
                </Box>
              </Box>
              <Box css={styles.splitLine}></Box>
              <Box css={styles.moneyBox}>
                <Box css={styles.moneyText}>{item.money}</Box>
                <Button css={styles.viewMoreBtn} variant={"contained"}>
                  查看更多
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <HouseDetail open={open} onClose={handleClose} />
    </Box>
  );
};
export default Tabpane1;

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
import searchIcon from "@/assets/images/mapSearch.png";
import * as styles from "./contentStyle";
import Image from "next/image";
import downIcon from "@/assets/images/down.png";
import MyMap from "@/components/Map/MyMap";
import Script from "next/script";
export interface IContent {}
const Content: React.FC<IContent> = (props) => {
  const [price, setPrice] = useState("");
  const [roomNum, setRoomnum] = useState("");
  const [roomType, setRoomtype] = useState("");
  const handlePriceChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value);
  };
  const handleRoomNumChange = (event: SelectChangeEvent) => {
    setRoomnum(event.target.value);
  };
  const handleRoomTypeChange = (event: SelectChangeEvent) => {
    setRoomtype(event.target.value);
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.header}>
        <Box css={styles.searchInputWrapper}>
          <InputBase placeholder={"搜索一下"} css={styles.searchInput} />
          <IconButton>
            <Image css={styles.searchIcon} src={searchIcon} alt={""} />
          </IconButton>
        </Box>
        <Box css={styles.priceBox}>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  borderRadius: '10px',
              border: '1px solid #393A3F',
              backgroundColor: '#313136',
                  marginTop:'42px',
                width:'367px',
                }
              }
            }}
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            value={price}
            onChange={handlePriceChange}
            input={<InputBase css={styles.priceSelectInput} name="price" id="price" />}>
            <MenuItem value="">
              <em>价格区间</em>
            </MenuItem>
            <MenuItem value={10}>100</MenuItem>
            <MenuItem value={20}>200</MenuItem>
            <MenuItem value={30}>300</MenuItem>
          </Select>
        </Box>
        <Box css={styles.numBox}>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  fontSize: "16px",
                  borderRadius: '10px',
              border: '1px solid #393A3F',
              backgroundColor: '#313136'
                }
              }
            }}
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            value={roomNum}
            onChange={handleRoomNumChange}
            input={<InputBase css={styles.selectInput} name="roomnum" id="roomnum" />}>
            <MenuItem css={styles.selectItem} value={10}>100</MenuItem>
            <MenuItem css={styles.selectItem} value={20}>200</MenuItem>
            <MenuItem css={styles.selectItem} value={30}>300</MenuItem>
          </Select>
        </Box>
        <Box css={styles.typeBox}>
          <Select
              MenuProps={{
                PaperProps: {
                  style: {
                    fontSize: "16px",
                    borderRadius: '10px',
                    border: '1px solid #393A3F',
                    backgroundColor: '#313136'
                  }
                }
              }}
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            value={roomType}
            onChange={handleRoomTypeChange}
            input={<InputBase css={styles.selectInput} name="roomtype" id="roomtype" />}>
            <MenuItem css={styles.selectItem} value={10}>100</MenuItem>
            <MenuItem css={styles.selectItem} value={20}>200</MenuItem>
            <MenuItem css={styles.selectItem} value={30}>300</MenuItem>
          </Select>
        </Box>
        <Button css={styles.saveBtn} size={"small"} variant={"contained"}>
          保存搜索
        </Button>
      </Box>
      <Box css={styles.mapContainer}>
        <MyMap
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </Box>
    </Box>
  );
};
export default Content;

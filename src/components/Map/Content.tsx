import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputBase,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import searchIcon from "@/assets/images/mapSearch.png";
import deselectIcon from "@/assets/images/deselect.png";
import * as styles from "./contentStyle";
import Image from "next/image";
import downIcon from "@/assets/images/down.png";
import MyMap from "@/components/Map/MyMap";
import { useClickOutside } from "@/hooks/useClickoutside";

export interface IContent {}
const types = [
  "Houses",
  "Townhomes",
  "Multi-family",
  "Condos/Co-ops",
  "Lots/Land",
  "Apartments",
  "Manufactured"
];
const Content: React.FC<IContent> = (props) => {
  const [price, setPrice] = useState("");
  const [roomNum, setRoomnum] = useState<string>("");
  const [roomType, setRoomtype] = useState<string[]>(['房屋类型']);
  const [priceDialogOpen, setPriceDialogOpen] = useState(false);
  const priceDialogRef = useRef(null);
  const closePriceDialog = () => {
    setPriceDialogOpen(false);
  };
  useClickOutside(priceDialogRef, closePriceDialog);
  const openPriceDialog = () => {
    setPriceDialogOpen(true);
  };
  const togglePriceDialog = () => {
    setPriceDialogOpen((pre) => !pre);
  };
  const handlePriceChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value);
  };
  const handleRoomNumChange = (event: SelectChangeEvent) => {
    setRoomnum(event.target.value);
  };
  const deselectAll = (event: React.MouseEvent) => {
    console.log("deselectall");
    event.stopPropagation();
    setRoomtype(['房屋类型']);
  };
  const handleRoomTypeChange = (event: SelectChangeEvent<typeof roomType>) => {
    let {
      target: { value }
    }: any = event;
    console.log('value',value)
    if(value.length==0){
      setRoomtype(['房屋类型'])
    }
     else if(value.includes('房屋类型')){
      console.log('in',value)
      value.splice(0,1)
      setRoomtype(
          // On autofill we get a stringified value.
          typeof value === "string" ? value.split(",") : value
      );
    }else {
      setRoomtype(typeof value === "string" ? value.split(",") : value)

    }
  };
  const renderValue = (selected: string[]) => {
    console.log('selected',selected)
    return selected.join(",");
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
        {/*<Box css={styles.priceBox}>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  borderRadius: "10px",
                  border: "1px solid #393A3F",
                  backgroundColor: "#313136",
                  marginTop: "42px",
                  width: "367px"
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
        </Box>*/}
        <Box css={styles.priceBox}>
          <Box ref={priceDialogRef} css={styles.priceDialog({ isOpen: priceDialogOpen })}></Box>
          <InputBase
            onClick={togglePriceDialog}
            placeholder="价格区间"
            readOnly
            css={styles.priceSelectInput}
          />
          <IconButton onClick={togglePriceDialog}>
            <Image
              css={styles.priceSelectIcon({ isOpen: priceDialogOpen })}
              src={downIcon}
              alt={""}
            />
          </IconButton>
        </Box>
        <Box css={styles.numBox}>
          <InputBase placeholder={'房间数量'} readOnly css={styles.numSelectInput} />
          <IconButton>
            <Image css={styles.numSelectIcon} src={downIcon} alt={""} />
          </IconButton>
        </Box>
        <Box css={styles.typeBox}>
          <Select
            sx={{ "& .MuiSelect-icon": { top: "calc(50% - .3em)" } }}
            MenuProps={{
              PaperProps: {
                style: {
                  borderRadius: "10px",
                  border: "1px solid #393A3F",
                  backgroundColor: "#313136",
                  marginTop: "16.6px"
                }
              }
            }}
            IconComponent={(props) => (
              <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
            )}
            multiple
            value={roomType}
            onChange={handleRoomTypeChange}
            renderValue={renderValue}
            input={<InputBase css={styles.typeSelectInput} name="roomtype" id="roomtype" />}>
            <MenuItem style={{ pointerEvents: "none", width: "100%" }}>
              <Box onClick={deselectAll} css={styles.deselectType}>
                <Image css={styles.deselectIcon} src={deselectIcon} alt={""} />
                <Box css={styles.deselectText}>Deselect All</Box>
              </Box>
            </MenuItem>
            {types.map((item: string, index: number) => (
              <MenuItem key={index} value={item}>
                <Checkbox
                  checked={roomType.indexOf(item) > -1}
                  sx={{ color: "#80848E", "& .Mui-checked": { color: "#fff" } }}
                />
                <ListItemText css={styles.typeItemText} primary={item} />
              </MenuItem>
            ))}
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

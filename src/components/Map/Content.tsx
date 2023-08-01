import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  ButtonProps,
  Checkbox,
  IconButton,
  InputBase,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled
} from "@mui/material";
import searchIcon from "@/assets/images/mapSearch.png";
import deselectIcon from "@/assets/images/deselect.png";
import * as styles from "./contentStyle";
import Image from "next/image";
import downIcon from "@/assets/images/down.png";
import MyMap from "@/components/Map/MyMap";
import { useClickOutside } from "@/hooks/useClickoutside";
import { bathroomNumItem } from "./contentStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import actions from "@/store/modules/map/action";
import CreateProject from "@/components/Map/CreateProject";
const { setCreateprojectdialogopen } = actions;
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
const bedRoomNum = ["任何", "1+", "2+", "3+", "4+", "5+"];
const bathRoomNum = ["任何", "1+", "2+", "3+", "4+", "5+"];
const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#000",
  backgroundColor: "#00E1FE",
  "&:hover": {
    backgroundColor: "#00B4CB"
  }
}));
const Content: React.FC<IContent> = (props) => {
  const priceDialogRef = useRef(null);
  const numDialogRef = useRef(null);
  const [price, setPrice] = useState("");
  const [roomNum, setRoomnum] = useState<string>("");
  const [roomType, setRoomtype] = useState<string[]>(["房屋类型"]);
  const [bedroomAdd, setBedroomadd] = useState("");
  const [bathroomAdd, setBathroomadd] = useState("");
  const [priceDialogOpen, setPriceDialogOpen] = useState(false);
  const [numDialogOpen, setNumDialogOpen] = useState(false);
  const { map, global } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { role } = global;
  const { createProjectDialogOpen } = map;
  const openCreateDialog = () => {
    dispatch(setCreateprojectdialogopen(true));
  };
  const closeNumDialog = () => {
    setNumDialogOpen(false);
  };
  const closePriceDialog = () => {
    setPriceDialogOpen(false);
  };
  useClickOutside(priceDialogRef, closePriceDialog);
  useClickOutside(numDialogRef, closeNumDialog);
  const openPriceDialog = () => {
    setPriceDialogOpen(true);
  };
  const togglePriceDialog = (event: React.MouseEvent) => {
    event.stopPropagation();
    setPriceDialogOpen((pre) => !pre);
  };
  const openNumDialog = () => {
    setNumDialogOpen(true);
  };
  const toggleNumDialog = (event: React.MouseEvent) => {
    console.log("toggle");
    event.stopPropagation();
    setNumDialogOpen((pre) => !pre);
  };
  const handlePriceChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value);
  };
  const handleRoomNumChange = (event: SelectChangeEvent) => {
    setRoomnum(event.target.value);
  };
  const addBedroom = (item: string) => {
    setBedroomadd(item);
  };
  const addBathroom = (item: string) => {
    setBathroomadd(item);
  };
  const deselectAll = (event: React.MouseEvent) => {
    console.log("deselectall");
    event.stopPropagation();
    setRoomtype(["房屋类型"]);
  };
  const handleRoomTypeChange = (event: SelectChangeEvent<typeof roomType>) => {
    let {
      target: { value }
    }: any = event;
    console.log("value", value);
    if (value.length == 0) {
      setRoomtype(["房屋类型"]);
    } else if (value.includes("房屋类型")) {
      console.log("in", value);
      value.splice(0, 1);
      setRoomtype(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else {
      setRoomtype(typeof value === "string" ? value.split(",") : value);
    }
  };
  const renderValue = (selected: string[]) => {
    console.log("selected", selected);
    return selected.join(",");
  };
  return (
    <Box css={styles.container}>
      {role == "use" ? (
        <Box css={styles.header}>
          <Box css={styles.searchInputWrapper}>
            <InputBase placeholder={"搜索一下"} css={styles.searchInput} />
            <IconButton>
              <Image css={styles.searchIcon} src={searchIcon} alt={""} />
            </IconButton>
          </Box>
          <Box ref={priceDialogRef} css={styles.priceBox}>
            <Box css={styles.priceDialog({ isOpen: priceDialogOpen })}>
              <Box css={styles.priceDialogTitle}>价格区间</Box>
              <Box css={styles.priceDialogInputBox}>
                <InputBase css={styles.priceDialogMinInput} placeholder={"最低金额"} />
                <Box css={styles.priceDialogSplitline}></Box>
                <InputBase css={styles.priceDialogMaxInput} placeholder={"最高金额"} />
              </Box>
              <Button css={styles.priceDialogOkBtn} variant="contained">
                确定
              </Button>
            </Box>
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
          <Box ref={numDialogRef} css={styles.numBox}>
            <Box css={styles.numDialog({ isOpen: numDialogOpen })}>
              <Box css={styles.numTitle1}>卧室数量</Box>
              <Box css={styles.bedroomNumbox}>
                {bedRoomNum.map((item, index) => (
                  <Box
                    onClick={addBedroom.bind(null, item)}
                    css={styles.bedroomNumItem({ isActive: bedroomAdd == item })}
                    key={index}>
                    {item}
                  </Box>
                ))}
              </Box>
              <Box css={styles.checkboxWrapper}>
                <Checkbox
                  sx={{ color: "#80848E", "& .Mui-checked": { color: "#fff" } }}
                  size="small"
                  css={styles.myCheckbox}
                />
                <Box css={styles.mycheckboxLabel}>完全匹配</Box>
              </Box>
              <Box css={styles.numTitle2}>浴室数量</Box>
              <Box css={styles.bathroomNumbox}>
                {bathRoomNum.map((item, index) => (
                  <Box
                    css={bathroomNumItem({ isActive: bathroomAdd == item })}
                    onClick={addBathroom.bind(null, item)}
                    key={index}>
                    {item}
                  </Box>
                ))}
              </Box>
              <Button variant="contained" css={styles.applyBtn}>
                应用
              </Button>
            </Box>
            <InputBase
              onClick={toggleNumDialog}
              placeholder={"房间数量"}
              readOnly
              css={styles.numSelectInput}
            />
            <IconButton onClick={toggleNumDialog}>
              <Image
                css={styles.numSelectIcon({ isOpen: numDialogOpen })}
                src={downIcon}
                alt={""}
              />
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
      ) : (
        <Box css={styles.expertHeader}>
          <Box css={styles.expertHeaderTitle}>房产信息录入</Box>
          <Box css={styles.expertInputWrapper}>
            <InputBase css={styles.expertInput} placeholder="输入录入网址" />
            <Button onClick={openCreateDialog} css={styles.expertInputBtn} variant="contained">
              录入
            </Button>
          </Box>
          <GreenButton css={styles.expertManaualBtn} variant="contained">
            手动
          </GreenButton>
        </Box>
      )}
      <Box css={styles.mapContainer}>
        <MyMap
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </Box>
      <CreateProject />
    </Box>
  );
};
export default Content;

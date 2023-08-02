import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import * as styles from "./createProjectStyle";
import Image from "next/image";
import closeIcon from "@/assets/images/close.png";
import { useDispatch, useSelector } from "react-redux";
import actions from "@/store/modules/map/action";
import { RootState } from "@/store/index";
import { css } from "@emotion/react";
import bigAddIcon from "@/assets/images/bigAdd.png";
import arrowDownIcon from "@/assets/images/arrowDown.png";
import downIcon from "@/assets/images/down.png";
const { setCreateprojectdialogopen } = actions;
export interface ICreateProject {}
const CreateProject: React.FC<ICreateProject> = () => {
  const dispatch = useDispatch();
  const [file, setFile] = React.useState(null);
  const [address, setAddress] = useState("");
  const [houseType, setHouseType] = useState("");
  const [caculateTabIdx, setCaculateIdx] = useState(0);
  const { createProjectDialogOpen } = useSelector((state: RootState) => state.map);
  const handleClose = () => {
    dispatch(setCreateprojectdialogopen(false));
  };

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };
  const handleAdressChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value as string);
  };
  const handleHouseTypeChange = (event: SelectChangeEvent) => {
    setHouseType(event.target.value as string);
  };
  const handleCaculateTabChange = (idx: number) => {
    setCaculateIdx(idx);
  };
  return (
    <Box css={styles.container({ isOpen: createProjectDialogOpen })}>
      <Box css={styles.title}>房产详情</Box>
      <IconButton onClick={handleClose} css={styles.closeBtn}>
        <Image css={styles.closeIcon} src={closeIcon} alt={""} />
      </IconButton>
      <Box css={styles.content}>
        <Box css={styles.picBox}>
          <label
            htmlFor={"upload"}
            css={css`
              ${styles.picItem};
              ${styles.bigPicItem}
            `}>
            <Input id={"upload"} css={styles.fileInput} type="file" onChange={handleFileChange} />
            <Image css={styles.bigAddIcon} src={bigAddIcon} alt={""} />
            <Box css={styles.bigAddText}>上传1张整体外观</Box>
          </label>
          <label
            htmlFor={"smallupload"}
            css={css`
              ${styles.picItem};
              ${styles.smallPicItem};
            `}>
            <Input
              id={"smallupload"}
              css={styles.smallFileInput}
              type="file"
              onChange={handleFileChange}
            />
            <Image css={styles.smallAddicon} src={bigAddIcon} alt={""} />
            <Box css={styles.smallAddText}>上传20张以内其他</Box>
          </label>
        </Box>
        <Box css={styles.midBox}>
          <Box css={styles.formTitle}>创建房产信息</Box>
          <Box css={styles.formGrid}>
            <InputBase
              placeholder="房子的链接 - Property Link"
              startAdornment={
                <InputAdornment css={styles.adornText} position="start">
                  *
                </InputAdornment>
              }
              css={styles.linkItem}
            />
            <Select
              sx={{ "& .MuiSelect-icon": { top: "calc(50% - .3em)" } }}
              MenuProps={{
                PaperProps: {
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #393A3F",
                    backgroundColor: "#111113",
                    marginTop: "16.6px"
                  }
                }
              }}
              IconComponent={(props) => (
                <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
              )}
              value={address}
              onChange={handleAdressChange}
              input={
                <InputBase
                  startAdornment={
                    <InputAdornment css={styles.adornText} position="start">
                      *
                    </InputAdornment>
                  }
                  css={styles.addressItem}
                  name="address"
                  id="address"
                />
              }>
              <MenuItem css={styles.menuItem} value={10}>
                地址1
              </MenuItem>
              <MenuItem css={styles.menuItem} value={20}>
                地址2
              </MenuItem>
              <MenuItem css={styles.menuItem} value={30}>
                地址3
              </MenuItem>
            </Select>
            <Select
              sx={{ "& .MuiSelect-icon": { top: "calc(50% - .3em)" } }}
              MenuProps={{
                PaperProps: {
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #393A3F",
                    backgroundColor: "#111113",
                    marginTop: "16.6px"
                  }
                }
              }}
              IconComponent={(props) => (
                <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
              )}
              value={houseType}
              onChange={handleHouseTypeChange}
              input={
                <InputBase
                  startAdornment={
                    <InputAdornment css={styles.adornText} position="start">
                      *
                    </InputAdornment>
                  }
                  css={styles.houseTypeItem}
                  name="houseType"
                  id="houseType"
                />
              }>
              <MenuItem css={styles.menuItem} value={10}>
                房屋类型1
              </MenuItem>
              <MenuItem css={styles.menuItem} value={20}>
                房屋类型2
              </MenuItem>
              <MenuItem css={styles.menuItem} value={30}>
                房屋类型3
              </MenuItem>
            </Select>
            <InputBase
              placeholder="房间数量 - BedRooms "
              startAdornment={
                <InputAdornment css={styles.adornText} position="start">
                  *
                </InputAdornment>
              }
              css={styles.requireInputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="卫生间数量 - BathRooms "
              css={styles.inputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="房产面积 - Square Feet "
              startAdornment={
                <InputAdornment css={styles.adornText} position="start">
                  *
                </InputAdornment>
              }
              css={styles.requireInputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="购买价格 - Purchase Price "
              startAdornment={
                <InputAdornment css={styles.adornText} position="start">
                  *
                </InputAdornment>
              }
              css={styles.requireInputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="建造年份 - Built In"
              css={styles.inputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="平均单价 - sqft/price"
              css={styles.inputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="设施设备 - Facilities·"
              css={styles.inputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="地块大小 - Land Area"
              css={styles.inputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="改造开销 - Repair Costs "
              css={styles.inputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="改造后价格 - After Repair Value"
              css={styles.inputItem}
              name="housenum"
              id="housenum"
            />
            <InputBase
              placeholder="市场租金 - Market Rent"
              css={styles.inputItem}
              name="housenum"
              id="housenum"
            />
          </Box>
          <Button variant={"contained"} css={styles.createProjectBtn}>
            确定录入
          </Button>
        </Box>
        <Box css={styles.caculatorBox}>
          <Box css={styles.caculatorTitle}>投资回报计算器</Box>
          <Box css={styles.caculateTab}>
            {["重售房产", "转售房产", "自持有", "重做贷款"].map((item: any, index: number) => (
              <Box
                onClick={handleCaculateTabChange.bind(null, index)}
                css={styles.cateTabItem({ isActive: caculateTabIdx == index })}
                key={index}>
                {item}
              </Box>
            ))}
          </Box>
          <Box css={styles.scrollBox}>
            <Box css={styles.inputBox}>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>购入价格</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>固定利率贷款</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment css={styles.inutpos} position="end">
                      ❖
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>固定利率融资成本</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>买入成交成本</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment css={styles.inutpos} position="end">
                      ❖
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>硬钱贷款</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment css={styles.inutpos} position="end">
                      ❖
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>硬钱融资成本</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>改造投入</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>私人贷款</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment css={styles.inutpos} position="end">
                      ❖
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>私人贷款融资成本</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>预期改造后售价</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>卖出成交成本</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment css={styles.inutpos} position="end">
                      ❖
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>房产持有成本</Box>
                <InputBase
                  css={styles.inputText}
                  startAdornment={
                    <InputAdornment css={styles.inputPre} position="start">
                      $
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment css={styles.inutpos} position="end">
                      ❖
                    </InputAdornment>
                  }
                />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>项目周期</Box>
                <InputBase css={styles.inputText} />
              </Box>
            </Box>
            <Box css={styles.bottomInputBox}>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>资金投入</Box>
                <InputBase css={styles.inputText} />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>利润</Box>
                <InputBase css={styles.inputText} />
              </Box>
              <Box css={styles.inputGridItem}>
                <Box css={styles.inputLabel}>投资回报比</Box>
                <InputBase css={styles.inputText} />
              </Box>
            </Box>
          </Box>
          <Button css={styles.saveBtn} variant={"contained"}>
            保存计算结果
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default CreateProject;

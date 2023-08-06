import React, { useRef } from "react";
import { Box, IconButton, InputAdornment, InputBase } from "@mui/material";
import { css } from "@emotion/react";
import closeIcon from "@/assets/images/close.png";
import exclamationIcon from "@/assets/images/exclamation.png";
import * as styles from "./usaryDialogStyle";
import Image from "next/image";
export interface IUsuryDialog {
  visible: boolean;
  rootStyle?: any;
  onClose: () => void;
}
const UsuryDialog: React.FC<IUsuryDialog> = (props) => {
  const { visible, rootStyle, onClose } = props;

  const handleClose = () => {
    console.log("close");
    onClose();
  };
  return (
    <Box
      css={css`
        ${styles.container({ visible })}${rootStyle}
      `}>
      <Box css={styles.header}>
        <Box css={styles.dialogTitle}>高利贷款</Box>
        <Image onClick={handleClose} css={styles.closeIcon} src={closeIcon} alt={""} />
      </Box>
      <Box css={styles.outterBox}>
        <Box css={styles.gridContainer}>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>购买价格首付</Box>
              <Box
                css={styles.hoverText({
                  text: "购买房子首付 默认:15%，行业标准:15%~35%，根据实际情况灵活调整。"
                })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>改造房子费用首付</Box>
              <Box css={styles.hoverText({ text: "改造房子首付 默认:0%，根据实际情况调整" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>高利贷抽成</Box>
              <Box css={styles.hoverText({ text: "高利贷点数抽成 - 默认2%，行业 1%~3.5%" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>高利贷利率</Box>
              <Box css={styles.hoverText({ text: "高利贷利率: 默认10%，行业标准10%~15%" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
        </Box>
        <Box css={styles.formTitle}>一次性手续费</Box>
        <Box css={styles.gridContainer}>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>房产价值评估费</Box>
              <Box css={styles.hoverText({ text: "房产价值评估费，默$400。行业标$400~$800" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>高利贷管理费</Box>
              <Box css={styles.hoverText({ text: "高利贷管理费: 默认$500，行业标准$400~$800" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>文件管理费</Box>
              <Box css={styles.hoverText({ text: "高利贷文件管理费, 默认$300，行业标$300~$600" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>资助费用</Box>
              <Box css={styles.hoverText({ text: "高利贷资助费用，默认$800，行业标$600~$1500" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>加工费</Box>
              <Box css={styles.hoverText({ text: "高利贷加工费，默认$600，行业标$600~$1200" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>自定义费用</Box>
            </Box>
            <InputBase
              css={styles.inputStyle}
              endAdornment={
                <InputAdornment css={styles.addPos} position="end">
                  +
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default UsuryDialog;

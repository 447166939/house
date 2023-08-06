import React, { useRef } from "react";
import { Box, IconButton, InputAdornment, InputBase } from "@mui/material";
import { css } from "@emotion/react";
import closeIcon from "@/assets/images/close.png";
import exclamationIcon from "@/assets/images/exclamation.png";
import * as styles from "./buyDialogStyle";
import Image from "next/image";
export interface IBuyDialog {
  visible: boolean;
  rootStyle?: any;
  onClose: () => void;
}
const BuyDialog: React.FC<IBuyDialog> = (props) => {
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
        <Box css={styles.dialogTitle}>买入成交成本</Box>
        <Image onClick={handleClose} css={styles.closeIcon} src={closeIcon} alt={""} />
      </Box>
      <Box css={styles.outterBox}>
        <Box css={styles.gridContainer}>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>申请费</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>查信用分费</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>房屋检查费</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>产权费用</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>其他费用</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BuyDialog;

import React, { useRef } from "react";
import { Box, IconButton, InputAdornment, InputBase } from "@mui/material";
import { css } from "@emotion/react";
import closeIcon from "@/assets/images/close.png";
import exclamationIcon from "@/assets/images/exclamation.png";
import * as styles from "./ownDialogStyle";
import Image from "next/image";
export interface IOwnDialog {
  visible: boolean;
  rootStyle?: any;
  onClose: () => void;
}
const OwnDialog: React.FC<IOwnDialog> = (props) => {
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
        <Box css={styles.dialogTitle}>房产持有成本</Box>
        <Image onClick={handleClose} css={styles.closeIcon} src={closeIcon} alt={""} />
      </Box>
      <Box css={styles.outterBox}>
        <Box css={styles.gridContainer}>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>房产税</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>基本水电煤等开支</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>房产管理费</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>房产保险</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>房屋管理协会费用</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>房屋维护费用</Box>
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
export default OwnDialog;

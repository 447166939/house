import React, { useRef } from "react";
import { Box, IconButton, InputAdornment, InputBase } from "@mui/material";
import { css } from "@emotion/react";
import closeIcon from "@/assets/images/close.png";
import exclamationIcon from "@/assets/images/exclamation.png";
import * as styles from "./lendDialogStyle";
import Image from "next/image";
export interface ILendDialog {
  visible: boolean;
  rootStyle?: any;
  onClose: () => void;
}
const LendDialog: React.FC<ILendDialog> = (props) => {
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
        <Box css={styles.dialogTitle}>私人借款</Box>
        <Image onClick={handleClose} css={styles.closeIcon} src={closeIcon} alt={""} />
      </Box>
      <Box css={styles.outterBox}>
        <Box css={styles.gridContainer}>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>私人贷款周期</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>点数抽成 - 高利贷抽成</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>贷款利率</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>一次性费用</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
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
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>提前还款限制周期</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>提前还款罚款额度</Box>
              <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default LendDialog;
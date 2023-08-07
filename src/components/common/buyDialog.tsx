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
              <Box
                css={styles.hoverText({
                  text: "买房申请费用，默认$400。用户根据实际情况进行调整。"
                })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>查信用分费</Box>
              <Box
                css={styles.hoverText({
                  text: "买房信用查询费用。默认$20，用户可根据实际情况调整。"
                })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>房屋检查费</Box>
              <Box
                css={styles.hoverText({
                  text: "买房房屋检查费用。默认$400，用户可根据实际情况进行调整。"
                })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>产权费用</Box>
              <Box
                css={styles.hoverText({
                  text: "买房产权费用，默认$300。用户可根据实际情况进行调整。"
                })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>其他费用</Box>
              <Box
                css={styles.hoverText({
                  text: "买房其他费用。默认为$0，用户可根据实际情况调整。"
                })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BuyDialog;

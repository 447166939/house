import React, { useRef } from "react";
import { Box, IconButton, InputAdornment, InputBase } from "@mui/material";
import { css } from "@emotion/react";
import closeIcon from "@/assets/images/close.png";
import exclamationIcon from "@/assets/images/exclamation.png";
import * as styles from "./fixedDialogStyle";
import Image from "next/image";
export interface IFixedDialog {
  visible: boolean;
  rootStyle?: any;
  onClose: () => void;
}
const FixedDialog: React.FC<IFixedDialog> = (props) => {
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
        <Box css={styles.dialogTitle}>固定利率贷款</Box>
        <Image onClick={handleClose} css={styles.closeIcon} src={closeIcon} alt={""} />
      </Box>
      <Box css={styles.outterBox}>
        <Box css={styles.gridContainer}>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>借款周期</Box>
              <Box
                css={styles.hoverText({
                  text: "固定利率借款周期，默认30年。可选择: 10年，15年，20年，30年周期。"
                })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>首付</Box>
              <Box
                css={styles.hoverText({
                  text: "固定利率购买房子首付 默认:20%，根据实际情况调整。"
                })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>固定利率贷款的利率</Box>
              <Box
                css={styles.hoverText({
                  text: "固定利率贷款利率，默认7%(这个数值会自动根据市场大环境调整)。用户也可自行设置固定利率的贷款利率。"
                })}>
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
              <Box css={styles.inputLabel}>高利贷管理费</Box>
              <Box css={styles.hoverText({ text: "贷款管理费，默认$500。行业标准:$400~$800" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>文件管理费</Box>
              <Box css={styles.hoverText({ text: "文件管理费，默认$300。行业标准: $250~$800" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>资助费用</Box>
              <Box css={styles.hoverText({ text: "贷款资助费用，默认$800。行业标准$600~$1500" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>加工费</Box>
              <Box css={styles.hoverText({ text: "贷款加工费，默认:$400。行业标准$400~$900" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
            </Box>
            <InputBase css={styles.inputStyle} />
          </Box>
          <Box css={styles.gridItem}>
            <Box css={styles.inputTitle}>
              <Box css={styles.inputLabel}>其他一次性手续费</Box>
              <Box css={styles.hoverText({ text: "其他费用，请根据实际情况自行调整" })}>
                <Image css={styles.exclamationIcon} src={exclamationIcon} alt={""} />
              </Box>
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
export default FixedDialog;

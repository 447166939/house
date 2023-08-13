import React from "react";
import { Box, Button, ButtonProps, InputBase, styled } from "@mui/material";
import * as styles from "./sectionStyle8";
const MyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#000",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#f5f5f5"
  }
}));
export interface ISection8 {}
const Section8: React.FC<ISection8> = () => {
  return (
    <Box css={styles.container}>
      <Box css={styles.innerBox}>
        <Box css={styles.title}>联系我们</Box>
        <Box css={styles.innerBottom}>
          <Box css={styles.c1}>
            <InputBase css={styles.nameInput} placeholder={"您的姓名"} />
            <InputBase css={styles.telInput} placeholder={"电话号码"} />
            <InputBase css={styles.emailInput} placeholder={"邮箱地址"} />
          </Box>
          <Box css={styles.c2}>
            <InputBase placeholder={"问题描述"} css={styles.descInput} multiline />
          </Box>
          <Box css={styles.c3}>
            <MyButton variant={"contained"} css={styles.submitBtn}>
              提交信息
            </MyButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Section8;

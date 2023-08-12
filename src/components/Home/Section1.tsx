import React from "react";
import { Box, Button, ButtonProps, styled } from "@mui/material";
import * as styles from "./sectionStyle1";
import Image from "next/image";
import { grey } from "@mui/material/colors";
export interface ISection1 {}
const WhiteButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#000",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: grey[300]
  }
}));
const BlackButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#000",
  "&:hover": {
    backgroundColor: grey[900]
  }
}));
const Section1: React.FC<ISection1> = () => {
  return (
    <Box css={styles.container}>
      <Box css={styles.title}>一站式的远程地产投资平台</Box>
      <Box css={styles.desc}>
        <Box>我们致力帮助我们的客户最大化实现时间、空间、财富自由，</Box>
        <Box>在任何地方花费少量的时间和精力，承担最少的风险，</Box>
        <Box>投资管理最多的地产项目，获得最多的收益。</Box>
      </Box>
      <Box css={styles.btnGrp}>
        <WhiteButton css={styles.whiteBtn} variant="contained">
          开启投资之旅
        </WhiteButton>
        <BlackButton css={styles.blackBtn} variant="contained">
          点击观看视频
        </BlackButton>
      </Box>
    </Box>
  );
};
export default Section1;

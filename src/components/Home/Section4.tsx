import React from "react";
import { Box } from "@mui/material";
import * as styles from "./sectionStyle4";
export interface ISection4 {}
const Section4: React.FC<ISection4> = () => {
  return <Box css={styles.container}>
<Box css={styles.title}>Parcel REI 的目标与价值观</Box>
    <Box css={styles.text}>{`Parcel REI 全称 Parcel RealEstate Investment，我们的目标是帮助每一个人都有可能成为成功的地产投资人，帮助每一个成功地产投资人实现一定程度的财务与时间自由能更好的享受您的人生。

我们的价值观就是每一个人都应该有机会赚到足够的金钱并且能有时间去体验人生，去为这个世界创造更多丰富的体验和精彩的创新。`}</Box>
  </Box>;
};
export default Section4;

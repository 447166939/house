import React from "react";
import { Box } from "@mui/material";
import * as styles from "./sectionStyle2";
export interface ISection2 {}
const Section2: React.FC<ISection2> = () => {
  return <Box css={styles.container}></Box>;
};
export default Section2;

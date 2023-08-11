import React from "react";
import { Box } from "@mui/material";
import * as styles from "./bannerStyle";
export interface IBanner {}
const Banner: React.FC<IBanner> = () => {
  return <Box css={styles.container}></Box>;
};
export default Banner;

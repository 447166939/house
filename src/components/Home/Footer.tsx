import React from "react";
import { Box } from "@mui/material";
import * as styles from "./footerStyle";
export interface IFooter {}
const Footer: React.FC<IFooter> = () => {
  return <Box css={styles.container}></Box>;
};
export default Footer;

import React from "react";
import { Box } from "@mui/material";
import * as styles from "./filemanageStyle";
export interface IFileManage {}
const FileManage: React.FC<IFileManage> = (props) => {
  return <Box css={styles.container}></Box>;
};
export default FileManage;

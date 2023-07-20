import React from "react";
import { Box } from "@mui/material";
import * as styles from "./pannelStyle";
export interface IPannel {}
const Pannel: React.FC<IPannel> = (props) => {
  return <Box css={styles.container}>
<Box></Box>

  </Box>;
};
export default Pannel;

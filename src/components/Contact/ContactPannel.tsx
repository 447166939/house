import React from "react";
import { Box } from "@mui/material";
import * as styles from "./contactPannelStyle";
export interface IContactPannel {}
const ContactPannel: React.FC<IContactPannel> = (props) => {
  return <Box css={styles.container}></Box>;
};
export default ContactPannel;

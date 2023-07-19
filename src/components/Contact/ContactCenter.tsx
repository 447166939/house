import React from "react";
import { Box } from "@mui/material";
import * as styles from "./contactCenterStyle";
export interface IContactCenter {}
const ContactCenter: React.FC<IContactCenter> = (props) => {
  return <Box css={styles.container}>
<Box css={styles.centerHeader}>

</Box>
  </Box>;
};
export default ContactCenter;

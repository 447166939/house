import React from "react";
import { Box } from "@mui/material";
import * as styles from "./contactPannelStyle";
import {useSelector} from "react-redux";
import {RootState} from "@/store/index";
export interface IContactPannel {}
const ContactPannel: React.FC<IContactPannel> = (props) => {
  const {contactInfo}=useSelector((state:RootState)=>state.contact)
  return <Box css={styles.container}>
<Box>{contactInfo.name}</Box>

  </Box>;
};
export default ContactPannel;

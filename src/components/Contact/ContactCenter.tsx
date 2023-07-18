import React from 'react';
import {Box} from "@mui/material";
import * as styles from './contactCenterStyle'
export interface IContactCenter{}
const ContactCenter:React.FC<IContactCenter>=(props)=>{
    return (
        <Box css={styles.container}></Box>
    )
}
export default ContactCenter

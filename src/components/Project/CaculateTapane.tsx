import React from 'react';
import {Box} from "@mui/material";
import * as styles from  './taskTabpaneStyle'
export interface ICaculateTabpane{}
const CaculateTabpane:React.FC<ICaculateTabpane>=()=>{
    return (
        <Box css={styles.container}></Box>
    )
}
export default CaculateTabpane

import React, {useState} from 'react';
import {Box, Grid, InputBase, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import * as styles from './tabpane1Style'
import {useSelector} from "react-redux";
import {RootState} from "@/store/index";
import Image from "next/image";
import downIcon from "@/assets/images/down.png";
export interface ITabpane1{}
const Tabpane1:React.FC<ITabpane1>=(props)=>{
    const [cate,setCate]=useState('')
    const {tabpane1Data}=useSelector((state:RootState)=>state.map)
    const handleCateChange = (event: SelectChangeEvent) => {
        setCate(event.target.value);
    };
    return (
        <Box css={styles.container}>
            <Box css={styles.title}>{tabpane1Data.title}</Box>
            <Box css={styles.head}>
                <Box css={styles.result}>{tabpane1Data.result}</Box>
                <Box css={styles.cateBox}>
                    <Select
                        IconComponent={(props) => (
                            <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                        )}
                        value={cate}
                        onChange={handleCateChange}
                        input={<InputBase css={styles.selectInput} name="cate" id="cate" />}>
                        <MenuItem value="">
                            <em>分类</em>
                        </MenuItem>
                        <MenuItem value={10}>分类1</MenuItem>
                        <MenuItem value={20}>分类2</MenuItem>
                        <MenuItem value={30}>分类3</MenuItem>
                    </Select>
                </Box>
            </Box>
            <Box css={styles.gridContainer}>
            <Box css={styles.list}>
                {
tabpane1Data.list.map((item:any,index:number)=>(
        <Box key={index
        } css={styles.card}>

        </Box>
))}
            </Box>
            </Box>
        </Box>
    )
}
export default Tabpane1;

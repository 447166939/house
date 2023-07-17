import React from 'react';
import Grid from "@mui/system/Unstable_Grid";
import {Box} from "@mui/material";
import checkedIcon from '@/assets/images/checked.png'
import Image from "next/image";
import * as styles from './subtaskStyle'
export interface ISubtask{}
const SubTask:React.FC<ISubtask>=(props)=>{
    const data={
        title:'第二阶段：',
        text:'2.办理房产保险(Insurance) - 此子任务需要完成: ',
        list:['1.完成房屋过户手续合同流程',
        '2.办理房产Insurance',
        '3.收集原房屋出租合同以及相关文件',
        '4.和Property Manager沟通',
        '5.(支持自定义子任务)']
    }
    return (
        <Box css={styles.container}>
            <Grid container>
                <Box>{data.title}</Box>
                <Box css={styles.text}>{data.text}</Box>
            </Grid>
            <Grid>
                {
                    data.list.map((item,index)=>(
                        <Grid css={styles.listItem} key={index}>
                           <Image css={styles.checkIcon} src={checkedIcon} alt={''}/>
                           <Box css={styles.listText}>{item}</Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
export default SubTask

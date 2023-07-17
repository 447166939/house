import React,{useState} from 'react';
import {Avatar, IconButton, Fab, Switch, Box} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import plusIcon from '@/assets/images/plus.png'
import menuIcon from '@/assets/images/menu.png';
import homeIcon from '@/assets/images/home.png';
import * as styles from './siderStyle'
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/store/index";
export interface ISider{}
const Sider:React.FC<ISider>=(props)=>{
    const projectsData=[{name:'1',id:1},{name:'2',id:2},{name:'T',id:3},{name:'G',id:4}]
    const{commonChannels,currentChannel,projects,currentManageChannel}=useSelector((state:RootState)=>state.global)
    return (
        <Grid css={styles.container}>
            <Grid container direction={'column'} css={styles.toolbar}>
                {
                    projectsData.map((item,index)=>(
                        <Avatar css={styles.avatar} key={item.id}>{item.name}</Avatar>
                    ))
                }
                <Fab css={styles.plusFab}>
<Image css={styles.plusIcon} src={plusIcon} alt={''} />
                </Fab>
                <Switch css={styles.switchStyle}  size="medium" />
                <Box css={styles.switchText}>已完成</Box>
                <IconButton css={styles.menuBtn}>
                    <Image css={styles.menuIcon} src={menuIcon} alt={''} />
                </IconButton>
            </Grid>
            <Grid css={styles.channelWrapper}>
<Box css={styles.projectText}>项目</Box>
                <Box css={styles.projectName}>
                    <Image css={styles.homeIcon} src={homeIcon} alt={''} />
                    <Box css={styles.projectNameText}>自定义名称</Box>
                </Box>
                <Box css={styles.projectContent}>1115 Toward Ter, Cincinati OH 45216</Box>
                <Box css={styles.splitline}></Box>
                <Box css={styles.channelTitle}>公共频道</Box>
                <Box>
                    {commonChannels.map((item,index)=>(
                        <Box css={styles.channelItem({isActive:index==currentChannel})} key={item.id}>
                            {item.icon ? <Image width={20} height={20} css={styles.channelIcon} src={item.icon} alt={''} /> : '#'}
                            <Box css={styles.channelText({isActive:index==currentChannel})}>{item.title}</Box>
                        </Box>
                    ))}
                </Box>
                <Box css={styles.splitline}></Box>
                <Box css={styles.projectTitle}>项目管理频道</Box>
                <Box>
                    {projects.map((item,index)=>(
                        <Box css={styles.manItem({isActive:currentManageChannel==index})} key={item.id}>
<Box css={styles.manName({isActive:currentManageChannel==index})}>{item.name}</Box>
                            <Box css={styles.manTitle}>{item.title}</Box>
                        </Box>
                    ))}
                </Box>
            </Grid>
        </Grid>
    )
}
export default Sider

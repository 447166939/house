import React from 'react';
import Grid from "@mui/system/Unstable_Grid";
import {Avatar, Box, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import * as styles from './chatStyle'
import circlePlusIcon from '@/assets/images/circlePlus.png'
import faceIcon from '@/assets/images/face.png'
import Image from "next/image";
export interface IChat{}
const Chat:React.FC<IChat>=(props)=>{
    const data=[{id:1,name:'Mitch Lujan',avatar:'/avatar.jpg',
        msg:'Oops! we actually pushed a version of panning. that didn\'t have all the bug fixes in it... We just upgraded it again and now your panned images should have improved coherence and less image splitting. Enjoy!'},
        {
            id:2,name:'Sean Potts',avatar:'/avatar.jpg',msg:'Oops! we actually pushed a version of panning. that didn\'t have all the bug fixes in it... We just upgraded it again and now your panned images should have improved coherence and less image splitting. Enjoy!'
        },
        {
            id:3,name:'martelantoine',avatar: '/avatar.jpg',msg:'Oops! we actually pushed a version of panning. that didn\'t have all the bug fixes in it... We just upgraded it again and now your panned images should have improved coherence and less image splitting. Enjoy!'
        }
    ]
    const contacts=[
        {
            id:1,name:'Mitch Lujan',
            avatar:'/avatar.jpg',
        },
        {
            id:2,name:'Mitch Lujan',
            avatar:'/avatar.jpg',
        },
        {
            id:3,name:'Mitch Lujan',
            avatar:'/avatar.jpg',
        },
        {
            id:4,name:'Mitch Lujan',
            avatar:'/avatar.jpg',
        },
        {
            id:5,name:'Mitch Lujan',
            avatar:'/avatar.jpg',
        },
        {
            id:6,name:'Mitch Lujan',
            avatar:'/avatar.jpg',
        }
    ]

    return (
        <Box css={styles.container}>
            <Box css={styles.left}>
                <Box css={styles.chatTitle}>聊天窗口</Box>
                <Box css={styles.chatList}>
                    {
                        data.map((item,index)=>(
                            <Box css={styles.listItem} alignItems={'flex-start'} key={index}>
                                    <Avatar alt="Remy Sharp" src={item?.avatar||''} />
                                    <Box css={styles.listItemText}>
                                        <Box css={styles.listItemTitle}>{item.name}</Box>
                                        <Box css={styles.listItemContent}>{item.msg}</Box>
                                    </Box>


                            </Box>
                        ))
                    }

                </Box>
                <Box>
                    <InputBase />
                    <Image src={circlePlusIcon} alt={''} />
                    <Image src={faceIcon} alt={''} />
                </Box>
            </Box>
            <Box css={styles.right}>
                <Box>项目联系人</Box>
                <Box css={styles.contactList}>
                    {
                        contacts.map((item,index)=>(
                            <Box css={styles.contactItem} key={item.id}>
                                <Avatar src={item.avatar} />
                                <Box>{item.name}</Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
export default Chat

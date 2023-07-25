import React,{useRef} from 'react';
import {Avatar, Box, Button, IconButton, InputBase} from "@mui/material";
import * as styles from './settingDialogStyle'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/index";
import actions from '@/store/modules/global/action'
import {useClickOutside} from "@/hooks/useClickoutside";
import closeIcon from '@/assets/images/close.png'
import addIcon from '@/assets/images/settingAdd.png'
import Image from "next/image";
const {setSettingdialogopen}=actions
export interface ISettingDialog{}
const SettingDialog:React.FC<ISettingDialog>=()=>{
    const {settingDialogOpen,userInfo}=useSelector((state:RootState)=>state.global)
    const dialogRef=useRef(null)
    const dispatch=useDispatch()
    const closeDialog=()=>{
        dispatch(setSettingdialogopen(false))
    }
    useClickOutside(dialogRef,closeDialog)
    return settingDialogOpen ? (
        <Box ref={dialogRef} css={styles.container}>
            <Box css={styles.header}>
                <Box css={styles.title}>账户</Box>
                <IconButton onClick={closeDialog} css={styles.closeBtn}>
                    <Image css={styles.closeIcon} src={closeIcon} alt={''} />
                </IconButton>
            </Box>
            <Box css={styles.content}>
<Box css={styles.avatarContainer}>
    <Avatar css={styles.avatar} src={userInfo.avatar}/>
    <Box css={styles.editText}>编辑</Box>
</Box>
                <Box css={styles.rightBox}>
                    <Box css={styles.nameText}>{userInfo.name}</Box>
                    <Box css={styles.editNameText}>修改名字</Box>
                    <InputBase css={styles.remarkText} multiline value={userInfo.remark} />
                    <Box css={styles.editRemarkText}>修改简介</Box>
                    <InputBase css={styles.jobText} value={userInfo.job} />
                    <Box css={styles.editJobText}>修改职称</Box>
                    <Box css={styles.addressContainer}>
                        {userInfo.address.map((item:any,index:number)=>(<Box css={styles.addressItem} key={index}>
                            {item}
                        </Box>))}
                        <IconButton css={styles.addBtn}>
                            <Image css={styles.addIcon} src={addIcon} alt={''} />
                        </IconButton>
                    </Box>
                    <Box css={styles.langContainer}>
                        {userInfo.lang.map((item:any,index:number)=>(<Box css={styles.langItem} key={index}>
                            {item}
                        </Box>))}
                        <IconButton css={styles.addBtn}>
                            <Image css={styles.addIcon} src={addIcon} alt={''} />
                        </IconButton>
                    </Box>
                    <InputBase css={styles.passText} placeholder={'请输入密码'} />
                    <Box css={styles.editPassText}>修改密码</Box>
                    <Box css={styles.accountText}>账户</Box>
                    <Box css={styles.deleteAccountText}>删除账户</Box>
                    <Box css={styles.planText}>升级 Remote 会员计划</Box>
                    <Button css={styles.upgradeBtn} variant={'contained'}>升 级</Button>
                </Box>
            </Box>
        </Box>
    ):null
}
export default SettingDialog

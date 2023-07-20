import React, {useState} from 'react';
import {Box, Button, IconButton, InputBase, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import searchIcon from '@/assets/images/mapSearch.png'
import * as styles from './contentStyle'
import Image from "next/image";
import downIcon from "@/assets/images/down.png";
import MyMap from "@/components/Map/MyMap";
import Script from "next/script";
export interface IContent{}
const Content:React.FC<IContent>=(props)=>{
    const [price,setPrice]=useState('')
    const[roomNum,setRoomnum]=useState('')
    const [roomType,setRoomtype]=useState('')
    const handlePriceChange = (event: SelectChangeEvent) => {
        setPrice(event.target.value);
    };
    const handleRoomNumChange = (event: SelectChangeEvent) => {
        setRoomnum(event.target.value);
    };
    const handleRoomTypeChange = (event: SelectChangeEvent) => {
        setRoomtype(event.target.value);
    };
    return (
        <Box css={styles.container}>
            <Box css={styles.header}>
                <Box css={styles.searchInputWrapper}>
                    <InputBase placeholder={'搜索一下'} css={styles.searchInput} />
                    <IconButton>
                        <Image css={styles.searchIcon} src={searchIcon} alt={''} />
                    </IconButton>
                </Box>
                <Box css={styles.priceBox}>
                    <Select
                        IconComponent={(props) => (
                            <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                        )}
                        value={price}
                        onChange={handlePriceChange}
                        input={<InputBase css={styles.selectInput} name="price" id="price" />}>
                        <MenuItem value="">
                            <em>价格区间</em>
                        </MenuItem>
                        <MenuItem value={10}>100</MenuItem>
                        <MenuItem value={20}>200</MenuItem>
                        <MenuItem value={30}>300</MenuItem>
                    </Select>
                </Box>
                <Box css={styles.numBox}>
                    <Select
                        IconComponent={(props) => (
                            <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                        )}
                        value={roomNum}
                        onChange={handleRoomNumChange}
                        input={<InputBase css={styles.selectInput} name="roomnum" id="roomnum" />}>
                        <MenuItem value="">
                            <em>房间数量</em>
                        </MenuItem>
                        <MenuItem value={10}>100</MenuItem>
                        <MenuItem value={20}>200</MenuItem>
                        <MenuItem value={30}>300</MenuItem>
                    </Select>
                </Box>
                <Box css={styles.typeBox}>
                    <Select
                        IconComponent={(props) => (
                            <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                        )}
                        value={roomType}
                        onChange={handleRoomTypeChange}
                        input={<InputBase css={styles.selectInput} name="roomtype" id="roomtype" />}>
                        <MenuItem value="">
                            <em>房屋类型</em>
                        </MenuItem>
                        <MenuItem value={10}>100</MenuItem>
                        <MenuItem value={20}>200</MenuItem>
                        <MenuItem value={30}>300</MenuItem>
                    </Select>
                </Box>
                <Button css={styles.saveBtn} size={'small'} variant={'contained'}>保存搜索</Button>
            </Box>
            <Box css={styles.mapContainer}>
            <MyMap  containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}/>
            </Box>
        </Box>
    )
}
export default Content

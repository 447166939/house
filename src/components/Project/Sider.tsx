import React, { useState } from "react";
import { Avatar, IconButton, Fab, Switch, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import plusIcon from "@/assets/images/plus.png";
import menuIcon from "@/assets/images/menu.png";
import homeIcon from "@/assets/images/home.png";
import * as styles from "./siderStyle";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import actions from "@/store/modules/global/action";
const { setChannel, setManagechannel } = actions;
export interface ISider {}
const Sider: React.FC<ISider> = (props) => {
  const projectsData = [
    { name: "1", id: 1 },
    { name: "2", id: 2 },
    { name: "T", id: 3 },
    { name: "G", id: 4 }
  ];
  const { commonChannels, currentChannel, projects, currentManageChannel } = useSelector(
    (state: RootState) => state.global
  );
  const dispatch = useDispatch();
  const handleChangeChannel = (idx: number) => {
    dispatch(setChannel(idx));
  };
  const handleChangeManageChannel = (idx: number) => {
    dispatch(setManagechannel(idx));
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.toolbar}>
        {projectsData.map((item, index) => (
          <Avatar css={styles.avatar} key={item.id}>
            {item.name}
          </Avatar>
        ))}
        <Fab css={styles.plusFab}>
          <Image css={styles.plusIcon} src={plusIcon} alt={""} />
        </Fab>
        <Switch css={styles.switchStyle} size="medium" />
        <Box css={styles.switchText}>已完成</Box>
        <IconButton css={styles.menuBtn}>
          <Image css={styles.menuIcon} src={menuIcon} alt={""} />
        </IconButton>
      </Box>
      <Box css={styles.channelWrapper}>
        <Box css={styles.projectText}>项目</Box>
        <Box css={styles.projectName}>
          <Image css={styles.homeIcon} src={homeIcon} alt={""} />
          <Box css={styles.projectNameText}>自定义名称</Box>
        </Box>
        <Box css={styles.projectContent}>1115 Toward Ter, Cincinati OH 45216</Box>
        <Box css={styles.splitline}></Box>
        <Box css={styles.channelTitle}>公共频道</Box>
        <Box>
          {commonChannels.map((item, index) => (
            <Box
              onClick={handleChangeChannel.bind(null, index)}
              css={styles.channelItem({ isActive: index == currentChannel })}
              key={item.id}>
              {item.icon ? (
                <Image width={20} height={20} css={styles.channelIcon} src={item.icon} alt={""} />
              ) : (
                "#"
              )}
              <Box css={styles.channelText({ isActive: index == currentChannel })}>
                {item.title}
              </Box>
            </Box>
          ))}
        </Box>
        <Box css={styles.splitline}></Box>
        <Box css={styles.projectTitle}>项目管理频道</Box>
        <Box>
          {projects.map((item, index) => (
            <Box
              onClick={handleChangeManageChannel.bind(null, index)}
              css={styles.manItem({
                isActive: currentManageChannel == index,
                isGoing: item.status == 1
              })}
              key={item.id}>
              <Box
                data-hover
                css={styles.manName({
                  isActive: currentManageChannel == index,
                  isGoing: item.status == 1
                })}>
                {item.name}
              </Box>
              <Box css={styles.manTitle}>{item.title}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Sider;

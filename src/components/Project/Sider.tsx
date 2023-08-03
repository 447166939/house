import React, { useState, useRef, useEffect } from "react";
import {
  Avatar,
  IconButton,
  Fab,
  Switch,
  Box,
  styled,
  SwitchProps,
  Badge,
  BadgeProps, Button
} from "@mui/material";
import addIcon from "@/assets/images/add.png";
import homeIcon from "@/assets/images/home.png";
import * as styles from "./siderStyle";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import actions from "@/store/modules/global/action";
import { useProjects } from "@/hooks/useProjects";
const {
  setChannel,
  setManagechannel,
  setSiderwidth,
  setProjectinfopos,
  setProjectinfovisible,
  setCurrentproject,
  setHoverproject
} = actions;
export interface ISider {}
const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: "#00E1FE",
      "& + .MuiSwitch-track": {
        backgroundColor: "#00E1FE",
        opacity: 1
      }
    },
    "& .MuiSwitch-thumb": {
      color: "#00E1FE"
    }
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#333"
  }
}));
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 10,
    padding: "0 4px"
  }
}));
const Sider: React.FC<ISider> = (props) => {
  const { data } = useProjects();
  console.log("data", data);
  const projectsData = [
    { name: "1", id: 1, avatar: "/avatar.jpg", count: 1 },
    { name: "2", id: 2, avatar: "/avatar.jpg", count: 2 },
    { name: "T", id: 3, avatar: "/avatar.jpg", count: 3 },
    { name: "G", id: 4, avatar: "/avatar.jpg", count: 4 }
  ];
  const {
    commonChannels,
    currentChannel,
    projects,
    currentManageChannel,
    siderWidth,
    projectInfoPos,
    projectInfoVisible,
    currentProject,
    hoverProject,
    projectConfig
  } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  const siderRef = useRef<HTMLDivElement | null>(null);
  const handleChangeChannel = (idx: number) => {
    dispatch(setChannel(idx));
  };
  const handleChangeManageChannel = (idx: number) => {
    dispatch(setManagechannel(idx));
  };
  const resize = (event: MouseEvent) => {
    const size = `${event.x}px`;
    dispatch(setSiderwidth(size));
  };
  const hoverProjectHandler = (item: any, event: React.MouseEvent) => {
    const target = event.target as HTMLSpanElement;
    const rect = target.getBoundingClientRect();
    dispatch(setHoverproject(item));
    dispatch(setProjectinfopos({ left: rect.x + rect.width + 20 + "px", top: rect.y + "px" }));
    dispatch(setProjectinfovisible(true));
  };
  const blurProject = () => {
    dispatch(setProjectinfovisible(false));
  };
  const handleClickProject = (item: any) => {
    dispatch(setCurrentproject(item));
  };
  useEffect(() => {
    siderRef.current!.addEventListener("mousedown", (event) => {
      document.addEventListener("mousemove", resize, false);
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", resize, false);
        },
        false
      );
    });
  }, []);
  return (
    <Box style={{ flexBasis: siderWidth }} css={styles.container}>
      {/**
      项目提示对话框start
       ***/}
      <Box
        css={styles.projectInfo({
          left: projectInfoPos.left,
          top: projectInfoPos.top,
          visible: projectInfoVisible
        })}>
        <Box css={styles.projectInfoHead}>
          <Image css={styles.projectInfoIcon} src={homeIcon} alt={""} />
          <Box css={styles.projectInfoName}>{hoverProject.project_name}</Box>
        </Box>
        <Box css={styles.projectInfoContent}>1115 Toward Ter, Cincinati OH 45216</Box>
        <Box css={styles.projectInfoTaskItem}>
          <Box css={styles.projectInfoTaskNum}>{hoverProject.process_id}</Box>
          <Box css={styles.projectInfoTaskText}>
            {projectConfig?.process[hoverProject.process_id]}
          </Box>
        </Box>
      </Box>
      {/**
       项目提示对话框end
       ***/}
      <Box ref={siderRef} css={styles.resizer}></Box>
      <Box css={styles.toolbar}>
        <Box css={styles.projectContainer}>
          {data?.list.map((item: any, index: number) => (
            <StyledBadge
              onClick={handleClickProject.bind(null, item)}
              onMouseLeave={blurProject}
              onMouseEnter={hoverProjectHandler.bind(null, item)}
              css={styles.projectBadge}
              color={"error"}
              badgeContent={item.count || 0}
              key={item.project_id}>
              <Avatar src={item.avatar} css={styles.avatar}>
                {item.project_name}
              </Avatar>
            </StyledBadge>
          ))}
        </Box>
        <CustomSwitch css={styles.switchStyle} size="medium" />
        <Box css={styles.switchText}>已完成</Box>
      </Box>
      <Box css={styles.channelWrapper}>
        <Box css={styles.projectText}>项目</Box>
        <Box css={styles.projectName}>
          <Image css={styles.homeIcon} src={homeIcon} alt={""} />
          <Box css={styles.projectNameText}>{currentProject.project_name}</Box>
        </Box>
        <Box css={styles.projectContent}>1115 Toward Ter, Cincinati OH 45216</Box>
        <Box css={styles.topSplitline}></Box>
        <Box css={styles.channelTitle}>
          公共频道
          <IconButton css={styles.addChannelBtn}>
            <Image css={styles.addIcon} src={addIcon} alt={""} />
          </IconButton>
        </Box>
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
        <Box css={styles.bottomSplitline}></Box>
        <Box css={styles.projectTitle}>
          项目管理频道
          <IconButton css={styles.addProjectBtn}>
            <Image css={styles.addIcon} src={addIcon} alt={""} />
          </IconButton>
        </Box>
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

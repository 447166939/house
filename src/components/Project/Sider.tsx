import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Avatar,
  IconButton,
  Switch,
  Box,
  styled,
  Badge,
  BadgeProps,
  InputBase
} from "@mui/material";
import addIcon from "@/assets/images/add.png";
import homeIcon from "@/assets/images/home.png";
import * as styles from "./siderStyle";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import actions from "@/store/modules/global/action";
import { useProjects } from "@/hooks/useProjects";
import { useEditProject } from "@/hooks/useEditProject";
import { queryChannels, useChannels } from "@/hooks/useChannels";
import { useProjectinfo } from "@/hooks/useProjectinfo";
import { useCreatechannel } from "@/hooks/useCreatechannel";
import { useCreateProcess } from "@/hooks/useCreateProcess";
import { useProjectConfig } from "@/hooks/useProjectConfig";
import { useQueryClient } from "@tanstack/react-query";
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
  const config = useProjectConfig();
  const editProject = useEditProject();
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.fetchQuery(["projects"]);
  }, []);
  const {
    commonChannels,
    currentChannel,
    currentManageChannel, //当前选中的大阶段的索引
    siderWidth,
    projectInfoPos,
    projectInfoVisible,
    currentProject,
    hoverProject,
    projectConfig
  } = useSelector((state: RootState) => state.global);
  const channels = useChannels({ projectId: currentProject.project_id });
  console.log("channellist", channels.data);
  const createChannel = useCreatechannel({ projectId: currentProject.project_id });
  const projectInfo = useProjectinfo({ projectId: currentProject.project_id });
  const createProcessApi = useCreateProcess({ projectId: currentProject.project_id });
  const addChannel = async () => {
    createChannel.mutate({ project_id: currentProject.project_id, channel_name: "自定义聊天频道" });
  };
  const addProcess = async () => {
    createProcessApi.mutate({ projectId: currentProject.project_id, processName: "自定义大阶段" });
  };
  useEffect(() => {
    if (!currentProject.project_id) return;
    queryClient.fetchQuery(["channels", currentProject.project_id], () =>
      queryChannels({ projectId: currentProject.project_id })
    );
  }, [currentProject.project_id]);
  useEffect(() => {
    if (!currentProject.project_id) return;
    queryClient.fetchQuery(["projectInfo", currentProject.project_id]);
  }, [currentProject.project_id]);
  const [readonly, setReadonly] = useState(true);
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
    dispatch(setManagechannel(0));
  };
  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentproject({ ...currentProject, project_name: event.target.value }));
  };
  const handleClickProjectName = () => {
    setReadonly(false);
  };
  const projectNameBlur = () => {
    setReadonly(true);
    editProject.mutate({
      project_id: currentProject.project_id,
      project_name: currentProject.project_name
    });
  };
  const confirmEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code == "Enter") {
      setReadonly(true);
      editProject.mutate({
        project_id: currentProject.project_id,
        project_name: currentProject.project_name
      });
    }
  };
  const getProcessName = (project: any, processId: any) => {
    const process_name = project?.process_config?.process_name;
    const config_process_name = config?.data?.process;
    let name = Object.assign({}, process_name, config_process_name);
    return name[processId];
  };
  const isComplete = (idx: number) => {
    const processId = currentProject?.process_id;
    const process_list = currentProject?.process_config?.process_list;
    const index = process_list?.findIndex((item: any) => item == processId);
    return idx < index;
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
          <InputBase
            onKeyPress={confirmEdit}
            onBlur={projectNameBlur}
            onClick={handleClickProjectName}
            readOnly={readonly}
            onChange={handleProjectNameChange}
            value={currentProject?.project_name}
            css={styles.projectNameText}
          />
        </Box>
        <Box css={styles.projectContent}>1115 Toward Ter, Cincinati OH 45216</Box>
        <Box css={styles.topSplitline}></Box>
        <Box css={styles.channelTitle}>
          公共频道
          <IconButton onClick={addChannel} css={styles.addChannelBtn}>
            <Image css={styles.addIcon} src={addIcon} alt={""} />
          </IconButton>
        </Box>
        <Box css={styles.channelBox}>
          {channels?.data?.list?.map((item: any, index: number) => (
            <Box
              onClick={handleChangeChannel.bind(null, index)}
              css={styles.channelItem({ isActive: index == currentChannel })}
              key={item.channel_id}>
              {item.icon ? (
                <Image width={20} height={20} css={styles.channelIcon} src={item.icon} alt={""} />
              ) : (
                "#"
              )}
              <Box css={styles.channelText({ isActive: index == currentChannel })}>
                {item.channel_name}
              </Box>
            </Box>
          ))}
        </Box>
        <Box css={styles.bottomSplitline}></Box>
        <Box css={styles.projectTitle}>
          项目管理频道
          <IconButton onClick={addProcess} css={styles.addProjectBtn}>
            <Image css={styles.addIcon} src={addIcon} alt={""} />
          </IconButton>
        </Box>
        <Box css={styles.processBox}>
          {currentProject.process_config?.process_list?.map((item: any, index: number) => (
            <Box
              onClick={handleChangeManageChannel.bind(null, index)}
              css={styles.manItem({
                isActive: currentManageChannel == index,
                isGoing: currentProject.process_id == item,
                isComplete: isComplete(index)
              })}
              key={index}>
              <Box
                data-hover
                css={styles.manName({
                  isActive: currentManageChannel == index,
                  isGoing: item.status == 1
                })}>
                {index}
              </Box>
              <Box css={styles.manTitle}>{getProcessName(currentProject, item)}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Sider;

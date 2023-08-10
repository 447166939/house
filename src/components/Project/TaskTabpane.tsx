import React, { Fragment, useMemo, useState } from "react";
import { Box, Checkbox, ClickAwayListener, IconButton } from "@mui/material";
import * as styles from "@/components/Project/taskTabpaneStyle";
import Image from "next/image";
import addIcon from "@/assets/images/add.png";
import elliseIcon from "@/assets/images/ellisis.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import { useProjectConfig } from "@/hooks/useProjectConfig";
import { useSelectStage } from "@/hooks/useSelectStage";
import { useProjectinfo } from "@/hooks/useProjectinfo";
import { useCreateStage } from "@/hooks/useCreateStage";

export interface ITaskTabpane {}
const TaskTabpane: React.FC<ITaskTabpane> = () => {
  const { currentManageChannel, currentProject } = useSelector((state: RootState) => state.global);
  const config = useProjectConfig();
  const projectInfo = useProjectinfo({ projectId: currentProject?.project_id });
  const stageApi = useSelectStage({ projectId: currentProject?.project_id });
  const createStageApi = useCreateStage({ projectId: currentProject?.project_id });
  const data = {
    title: "此环节需要完成：",
    list: [
      { id: 1, text: "1.完成房屋过户手续合同流程", status: 0 },
      { id: 2, text: "2.办理房产Insurance", status: 1 },
      { id: 3, text: "3.收集原房屋出租合同以及相关文件", status: 0 },
      { id: 4, text: "4.和Property Manager沟通", status: 0 },
      { id: 5, text: "5.(支持自定义子任务)", status: 0 }
    ]
  };
  const handleCheckedChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
    stage_id: string
  ) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      await stageApi.mutate({
        project_id: currentProject.project_id,
        stage_id: stage_id,
        select: 2
      });
    } else {
      await stageApi.mutate({
        project_id: currentProject.project_id,
        stage_id: stage_id,
        select: 1
      });
    }
    setChecked((pre: any) => {
      pre[idx] = e.target.checked;
      return [...pre];
    });
    console.log(checked);
  };
  const [checked, setChecked] = useState<any>([]);
  const [currentMenu, setCurrentMenu] = useState<number | undefined>();

  const handleClickaway = (idx: number) => {
    setCurrentMenu((pre) => {
      if (pre == idx) {
        return -1;
      } else return pre;
    });
  };
  const handleClick = (idx: number) => {
    setCurrentMenu(idx);
  };
  const stages = useMemo(() => {
    let process_stage = currentProject?.process_config?.process_stage;
    let processData = currentProject?.process_config?.process_list;
    let process_id = processData?.[currentManageChannel];
    const stageNames = Object.assign(
      {},
      config.data?.stage_names,
      currentProject?.process_config?.stage_name
    );
    const stageIds = process_stage?.[process_id];
    console.log("process_id", process_id);
    console.log("stageIds", stageIds);
    console.log("processStage", process_stage);
    console.log("stateNames", stageNames);
    let ret = stageIds?.map((stageId: number, index: number) => ({
      stage_id: stageId,
      stage_name: stageNames?.[stageId]
    }));
    console.log("ret", ret);
    return ret;
  }, [currentProject?.project_id, currentManageChannel]);
  const isChecked = (stageId: number) => {
    return projectInfo?.data?.stageSelect?.[stageId] == 2; //2选中1未选中
  };
  const addStage = async (stage_name: string) => {
    let processData = currentProject?.process_config?.process_list;
    let process_id = processData?.[currentManageChannel];
    await createStageApi.mutate({ project_id: currentProject.project_id, process_id, stage_name });
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.taskBox}>
        <Box css={styles.taskTitle}>第二阶段</Box>
        <Box css={styles.taskBottom}>
          <Box css={styles.taskNum}>2</Box>
          <Box css={styles.taskText}>Offer被采纳</Box>
        </Box>
      </Box>
      <Box css={styles.taskDetail}>
        <Box css={styles.taskHead}>
          <Box css={styles.taskHeadTitle}>{data.title}</Box>
          <IconButton onClick={addStage.bind(null, "自定义小阶段")} css={styles.addBtn}>
            <Image css={styles.addIcon} src={addIcon} alt={""} />
          </IconButton>
        </Box>
        <Fragment>
          {stages?.map((item: any, index: number) => (
            <Box css={styles.taskItem} key={index}>
              <span
                css={styles.taskListItemText({
                  isChecked: isChecked(item.stage_id),
                  isGoing: item.status == 1
                })}>
                {item.stage_name}
              </span>
              <Checkbox
                checked={isChecked(item.stage_id) || false}
                onChange={(e) => handleCheckedChange(e, index, item.stage_id)}
                color={(item.status == 1 ? "green" : "checkbox") as "primary"}
                size={"small"}
                css={styles.taskCheckbox({ isGoing: item.status == 1 })}
              />

              <ClickAwayListener onClickAway={handleClickaway.bind(null, index)}>
                <IconButton onClick={handleClick.bind(null, index)} css={styles.menuBtn}>
                  <Image css={styles.elliseIcon} src={elliseIcon} alt={""} />
                  <Box css={styles.menus({ isActive: currentMenu == index })}>
                    <Box css={styles.menuItem}>编辑</Box>
                    <Box css={styles.menuItem}>删除</Box>
                    <Box css={styles.menuItem}>锁定</Box>
                  </Box>
                </IconButton>
              </ClickAwayListener>
            </Box>
          ))}
        </Fragment>
      </Box>
    </Box>
  );
};
export default TaskTabpane;

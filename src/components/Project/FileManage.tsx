import React, { useState } from "react";
import { Box, ClickAwayListener, IconButton } from "@mui/material";
import * as styles from "./filemanageStyle";
import Image from "next/image";
import fileAdd from "@/assets/images/fileAdd.png";
import elliseIcon from "@/assets/images/ellisis.png";
export interface IFileManage {}
const FileManage: React.FC<IFileManage> = (props) => {
  const [files, setFiles] = useState([
    { id: 1, title: "我的文档", date: "07/09  12:00", icon: "/blueFolder.png" },
    { id: 2, title: "我的文档", date: "07/09  12:00", icon: "/blueFolder.png" },
    { id: 3, title: "我的文档", date: "07/09  12:00", icon: "/blueFolder.png" },
    { id: 4, title: "我的文档", date: "07/09  12:00", icon: "/purpleFolder.png" },
    { id: 5, title: "我的文档", date: "07/09  12:00", icon: "/purpleFolder.png" },
    { id: 6, title: "我的文档", date: "07/09  12:00", icon: "/purpleFolder.png" },
    { id: 7, title: "我的文档", date: "07/09  12:00", icon: "/purpleFolder.png" },
    { id: 8, title: "我的文档", date: "07/09  12:00", icon: "/purpleFolder.png" }
  ]);
  const [currentMenu, setCurrentMenu] = useState<number | undefined>();
  const handleClick = (idx: number) => {
    setCurrentMenu(idx);
  };
  const handleClickaway = (idx: number) => {
    setCurrentMenu((pre) => {
      if (pre == idx) {
        return undefined;
      } else return pre;
    });
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.head}>
        <Box css={styles.headText}>
          项目 / 1115 Toward Ter, Cincinati OH 45216 / 阶段二: Offer被采纳 / 2.办理房产Insurance
        </Box>
        <IconButton>
          <Image css={styles.fileAddIcon} src={fileAdd} alt={""} />
        </IconButton>
      </Box>
      <Box css={styles.fileList}>
        {files.map((item, index) => (
          <Box key={item.id} css={styles.fileItem}>
            <ClickAwayListener onClickAway={handleClickaway.bind(null, item.id)}>
              <IconButton data-btn onClick={handleClick.bind(null, item.id)} css={styles.menuBtn}>
                <Image css={styles.elliseIcon} src={elliseIcon} alt={""} />
                <Box css={styles.menus({ isActive: currentMenu == item.id })}>
                  <Box css={styles.downloadItem}>下载</Box>
                  <Box css={styles.renameItem}>重命名</Box>
                  <Box css={styles.moveItem}>移动</Box>
                  <Box css={styles.recycleItem}>放入回收站</Box>
                </Box>
              </IconButton>
            </ClickAwayListener>
            <Image css={styles.folderIcon} width={103} height={82} src={item.icon} alt={""} />
            <Box css={styles.fileTitle}>{item.title}</Box>
            <Box css={styles.fileDate}>{item.date}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default FileManage;

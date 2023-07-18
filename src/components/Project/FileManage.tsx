import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import * as styles from "./filemanageStyle";
import Image from "next/image";
import fileAdd from "@/assets/images/fileAdd.png";
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

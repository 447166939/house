import React, { useState } from "react";
import { Box, Button, InputBase, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Link from "@/components/Link";
import * as styles from "./headerStyle";
import Image from "next/image";
import downIcon from "@/assets/images/homedown.png";
export interface IHeader {}
const Header: React.FC<IHeader> = () => {
  const [lang, setLang] = useState("1");
  const [idx, setIdx] = useState(0);
  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };
  const handleClickLink = (index: number) => {
    setIdx(index);
  };
  return (
    <Box css={styles.container}>
      <Image css={styles.logo} width={220} height={43} src={"/homelogo.png"} alt={""} />
      <Link
        onClick={handleClickLink.bind(null, 0)}
        css={styles.homeLink({ isActive: idx == 0 })}
        href={"/"}>
        首页
      </Link>
      <Link
        onClick={handleClickLink.bind(null, 1)}
        css={styles.productLink({ isActive: idx == 1 })}
        href={"/"}>
        产品与服务
      </Link>
      <Link
        onClick={handleClickLink.bind(null, 2)}
        css={styles.aboutMeLink({ isActive: idx == 2 })}
        href={"/"}>
        关于我们
      </Link>
      <Link
        onClick={handleClickLink.bind(null, 3)}
        css={styles.helpLink({ isActive: idx == 3 })}
        href={""}>
        帮助
      </Link>
      <Select
        css={styles.langSelect}
        MenuProps={{
          PaperProps: {
            style: {
              backgroundColor: "#313136",
              color: "#fff",
              fontSize: "16px"
            }
          }
        }}
        IconComponent={(props) => (
          <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
        )}
        value={lang}
        onChange={handleChange}
        input={<InputBase css={styles.selectInput} name="lang" />}>
        <MenuItem css={styles.selectItem} value={1}>
          中文
        </MenuItem>
        <MenuItem css={styles.selectItem} value={2}>
          英文
        </MenuItem>
      </Select>
      <Button css={styles.myBtn} variant="contained">
        开启投资之旅
      </Button>
    </Box>
  );
};
export default Header;

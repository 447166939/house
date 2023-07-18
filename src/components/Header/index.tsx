import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  Grid,
  SvgIcon,
  Avatar,
  Popper,
  Box,
  IconButton
} from "@mui/material";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Link from "@/components/Link";
import * as styles from "@/components/Header/headerStyle";
import headerLogo from "@/assets/images/header_logo.png";
import cnIcon from "@/assets/images/cn.png";
import settingIcon from "@/assets/images/setting.png";
import moonIcon from "@/assets//images/moon.png";
import userAdd from "@/assets/images/userAdd.png";
import exitIcon from "@/assets/images/exit.png";
import playIcon from "@/assets/images/play.png";
import editIcon from "@/assets/images/edit.png";
import { RootState } from "@/store/index";
import actions from "@/store/modules/global/action";
export interface IHeader {}
const { setCurrentnav } = actions;
function PersonIcon(props: any) {
  return (
    <SvgIcon viewBox="0 0 28 26" {...props}>
      <path
        d="M27.9696 21.7436C27.9696 22.8188 27.1939 23.6862 25.9121 23.6641C25.2687 23.6618 25.3186 23.6769 24.7311 23.6641C23.7023 23.642 23.7698 23.0186 23.4353 21.7436C22.6121 18.6075 19.1299 14.5017 18.3357 14.0269C16.2421 12.7751 18.8999 13.6076 18.8999 9.58202C18.8999 8.54874 18.6643 7.25061 18.2428 6.37741C17.913 5.69352 17.6413 5.06182 18.8999 5.10253C21.4033 5.18145 23.4341 7.10888 23.4341 9.58202C23.4341 11.1333 22.6365 12.4999 21.4243 13.3047C21.6611 13.3592 21.9014 13.4162 22.1685 13.487C25.4975 14.4554 27.9696 18.4205 27.9696 21.7436ZM21.3337 23.9405C21.3245 24.9681 20.8808 25.991 19.1381 25.9898C15.2112 25.9864 4.19914 26.0038 2.29838 25.9898C0.168909 25.9747 0.101562 24.9251 0.101562 23.9405C0.101562 19.1961 3.33758 14.9453 7.68244 13.7226C5.77017 12.6997 4.81222 10.7989 4.81222 8.59859C4.81222 5.38688 7.45955 2.77441 10.7142 2.77441C13.9688 2.77441 16.6161 5.38688 16.6161 8.59859C16.6161 10.8 15.5664 12.6997 13.6542 13.7226C18.0025 14.9453 21.3801 19.2391 21.3337 23.9405Z"
        fill="white"
      />
    </SvgIcon>
  );
}
function HelperIcon(props: any) {
  return (
    <SvgIcon viewBox={"0 0 27 27"} {...props}>
      <path
        d="M13.3516 0.652344C10.7804 0.652344 8.26699 1.41478 6.12915 2.84324C3.99132 4.2717 2.32507 6.30202 1.34113 8.67746C0.357195 11.0529 0.0997519 13.6668 0.60136 16.1885C1.10297 18.7103 2.3411 21.0266 4.15918 22.8447C5.97726 24.6628 8.29364 25.9009 10.8154 26.4025C13.3371 26.9042 15.951 26.6467 18.3264 25.6628C20.7019 24.6788 22.7322 23.0126 24.1607 20.8748C25.5891 18.7369 26.3516 16.2235 26.3516 13.6523C26.3516 10.2045 24.9819 6.89793 22.544 4.45995C20.106 2.02198 16.7994 0.652344 13.3516 0.652344ZM13.3516 22.7523C13.0944 22.7523 12.8431 22.6761 12.6293 22.5332C12.4155 22.3904 12.2489 22.1874 12.1505 21.9498C12.0521 21.7123 12.0264 21.4509 12.0765 21.1987C12.1267 20.9465 12.2505 20.7149 12.4323 20.5331C12.6141 20.3513 12.8458 20.2275 13.0979 20.1773C13.3501 20.1272 13.6115 20.1529 13.8491 20.2513C14.0866 20.3497 14.2896 20.5163 14.4325 20.7301C14.5753 20.9439 14.6516 21.1952 14.6516 21.4523C14.6516 21.6231 14.6179 21.7921 14.5526 21.9498C14.4873 22.1076 14.3915 22.2509 14.2708 22.3716C14.1501 22.4923 14.0068 22.5881 13.8491 22.6534C13.6913 22.7187 13.5223 22.7523 13.3516 22.7523ZM16.1336 15.4463C15.6971 15.695 15.3317 16.0515 15.0722 16.4816C14.8128 16.9118 14.6679 17.4013 14.6516 17.9033V18.8523H12.0516V17.9033C12.0692 16.9632 12.3254 16.0429 12.7961 15.2288C13.2668 14.4148 13.9365 13.7337 14.7426 13.2493C15.208 12.9582 15.5694 12.5273 15.7749 12.0182C15.9804 11.5091 16.0195 10.948 15.8866 10.4153C15.7728 9.95626 15.5359 9.53692 15.2014 9.20248C14.867 8.86803 14.4476 8.63115 13.9886 8.51734C13.6009 8.42145 13.1964 8.41613 12.8064 8.5018C12.4164 8.58747 12.0513 8.76182 11.7396 9.01134C11.4314 9.25483 11.1825 9.56497 11.0113 9.91846C10.8402 10.2719 10.7514 10.6596 10.7516 11.0523H8.15157C8.15166 10.2701 8.32822 9.49803 8.66809 8.79352C9.00797 8.08902 9.5024 7.47026 10.1146 6.98334C10.731 6.48988 11.4517 6.14328 12.2221 5.96984C12.9924 5.79641 13.7921 5.80068 14.5606 5.98234C15.555 6.22 16.4573 6.74553 17.1546 7.49324C17.852 8.24094 18.3134 9.17763 18.4813 10.1862C18.6492 11.1947 18.516 12.2304 18.0984 13.1637C17.6808 14.0969 16.9974 14.8864 16.1336 15.4333V15.4463Z"
        fill="white"
      />
    </SvgIcon>
  );
}
const Index: React.FC<IHeader> = () => {
  const dispatch = useDispatch();
  const { navs, currentNav } = useSelector((state: RootState) => state.global);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const { userInfo } = useSelector((state: RootState) => state.global);
  const handleChangeNav = (index: number) => {
    dispatch(setCurrentnav(index));
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  return (
    <AppBar css={styles.appBar} position="static">
      <Toolbar>
        <Image css={styles.headerLogo} src={headerLogo} alt={""} />
        <Grid css={styles.navBox} container>
          {navs.map((item, index) => (
            <Link
              onClick={handleChangeNav.bind(null, index)}
              css={styles.navItem({ isActive: currentNav == index })}
              key={item.id}
              href={item.path}>
              {item.text}
            </Link>
          ))}
        </Grid>
        <Badge badgeContent={4} color="error">
          <PersonIcon />
        </Badge>
        <Image css={styles.cnIcon} src={cnIcon} alt={""} />
        <HelperIcon css={styles.helpIcon} />
        <Avatar onClick={handleClick} css={styles.avatar} alt="Remy Sharp" src={"/avatar.jpg"} />
      </Toolbar>
      <Popper
        id="placement-popper"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement={"bottom-end"}>
        <Box css={styles.popoverContainer}>
          <Avatar css={styles.userAvatar} src={userInfo.avatar}></Avatar>
          <Box css={styles.userinfoName}>{userInfo.name}</Box>
          <Box css={styles.userEmail}>{userInfo.email}</Box>
          <Box css={styles.userMenuItem}>
            <IconButton>
              <Image width={15} height={15} css={styles.settingIcon} src={settingIcon} alt={""} />
            </IconButton>
            <Box css={styles.settingText}>设置</Box>
          </Box>
          <Box css={styles.userMenuItem}>
            <IconButton>
              <Image css={styles.moonIcon} width={15} height={15} src={moonIcon} alt={""} />
            </IconButton>
            <Box css={styles.moonText}>黑夜</Box>
            <IconButton css={styles.playBtn}>
              <Image css={styles.playIcon} width={11} height={11} src={playIcon} alt={""} />
            </IconButton>
          </Box>
          <Box css={styles.userMenuItem}>
            <IconButton>
              <Image width={12} height={12} css={styles.userAddIcon} src={userAdd} alt={""} />
            </IconButton>
            <Box css={styles.addUserText}>添加账户</Box>
          </Box>
          <Box css={styles.userMenuItem}>
            <IconButton>
              <Image css={styles.exitIcon} src={exitIcon} alt={""} />
            </IconButton>
            <Box css={styles.exitText}>退出</Box>
            <IconButton css={styles.playBtn}>
              <Image css={styles.playIcon} src={playIcon} alt={""} />
            </IconButton>
          </Box>
        </Box>
      </Popper>
    </AppBar>
  );
};
export default Index;

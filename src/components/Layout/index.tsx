import React, { useState, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SvgIcon from "@material-ui/core/SvgIcon";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";
import Switch from "@/components/Switch";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, createStyles } from "@material-ui/core";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";
import ButtonBase from "@material-ui/core/ButtonBase";
import Link from "@material-ui/core/Link";
import anime from "animejs";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import upSvg from "@/assets/up.svg";
import chatSvg from "@/assets/chat.svg";
import logoSvg from "@/assets/logo.svg";
import { RootState } from "@/store/index";
export interface IUPIconProps {}
const UPIcon: React.FC<IUPIconProps> = (props: IUPIconProps) => {
  return <SvgIcon component={upSvg} viewBox={"0 0 21 26"} />;
};
export interface IChatIconProps {}
const ChatIcon: React.FC<IChatIconProps> = (props: IChatIconProps) => {
  return <SvgIcon component={chatSvg} viewBox={"0 0 26.6 22.3"} />;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      color: theme.palette.common.black,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      paddingBottom: "1px",
      zIndex: 1000
    },
    appBar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 40000
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingLeft: "14.7%",
      paddingRight: "14.2%"
    },
    toolbarGrp1: {
      display: "flex",
      alignItems: "center"
    },
    toolbarGrp2: {
      display: "flex",
      alignItems: "center"
    },
    toolbarGrp3: {
      display: "flex",
      alignItems: "center"
    },
    drawer: {
      position: "absolute"
    },
    offset: theme.mixins.toolbar,
    servBtn: {
      width: "144px",
      marginRight: "48px"
    },
    techBtn: {
      width: "144px",
      marginRight: "48px"
    },
    blogBtn: {
      width: "144px",
      marginRight: "48px"
    },
    searchBtn: {
      width: "41px",
      marginRight: "26px",
      marginLeft: "129px"
    },
    nameText: {
      color: "#2699FB",
      marginLeft: theme.spacing(2),
      fontSize: "25px",
      fontWeight: "bold",
      marginRight: "10.5%",
      flexShrink: 0
    },
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      paddingBottom: "97px"
    },
    bg: {
      position: "absolute",
      background: theme.custom.background,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -10000
    },
    serviceContainer: {
      display: "flex",
      justifyContent: "space-between",
      padding: "107px 280px",
      backgroundColor: "#f7f8fa"
    },
    serviceCol1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "430px"
    },
    serviceCol2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    serviceCol3: {
      display: "flex",
      flexDirection: "column"
    },
    serviceCol4: {
      display: "flex",
      flexDirection: "column"
    },
    serviceTitle: {
      color: "#2A2D31",
      fontSize: "20px",
      lineHeight: "50px",
      fontWeight: "bold",
      position: "relative",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "60px",
        height: "4px",
        bottom: 0,
        left: 0,
        backgroundColor: "#2699FB"
      }
    },
    serviceCol1Text: {
      fontSize: "16px",
      color: "#2A2D31",
      lineHeight: "24px"
    },
    serviceContactBtnWrapper: {},
    serviceContactBtn: {
      color: "#2699FB",
      position: "relative",
      background: "inherit",
      outline: "none",
      border: "none",
      boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
      borderRadius: "8px",
      cursor: "pointer",
      textTransform: "uppercase",
      height: "44px",
      padding: theme.spacing(2),
      width: "207px"
    },
    serviceCol2Btn: {
      color: "#2699FB",
      position: "relative",
      background: "inherit",
      outline: "none",
      border: "none",
      boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
      borderRadius: "8px",
      cursor: "pointer",
      textTransform: "uppercase",
      height: "44px",
      padding: theme.spacing(2),
      width: "224px"
    },
    serviceCol3Link: {
      fontSize: "16px",
      color: "#2A2D31",
      lineHeight: "50px"
    },
    serviceCol4Link: {
      fontSize: "16px",
      color: "#2A2D31",
      lineHeight: "50px"
    },
    upAnchor: {
      position: "fixed",
      bottom: "397px",
      right: "50px",
      backgroundColor: "#fff",
      zIndex: 30000
    },
    chatBtn: {
      position: "fixed",
      bottom: "317px",
      right: "50px",
      backgroundColor: "#fff",
      zIndex: 30000
    }
  })
);
export interface ILogoIconProps {}
const LogoIcon: React.FC<ILogoIconProps> = (props: ILogoIconProps) => (
  <SvgIcon component={logoSvg} viewBox="0 0 53 53"></SvgIcon>
);
export interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const classes = useStyles();
  const [idx, setIdx] = useState();
  const {
    serviceMenuVisible,
    technologiesMenuVisible,
    solutionsMenuVisible,
    blogAndNewsMenuVisible
  } = useSelector((state: RootState) => state.global);
  const handleChange = useCallback((index) => {
    setIdx(index);
  }, []);
  const cb = useCallback(() => {
    var textWrapper = document.querySelector(".ml11 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 100,
      offset: "-=775",
      delay: (el, i) => 34 * i
    });
    textWrapper = null;
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position={"fixed"}>
        <Toolbar className={classes.toolbar}>
          <Link href={"/"} className={classes.toolbarGrp1}>
            <LogoIcon />
            <span className={classes.nameText}>Module X</span>
          </Link>
          <div className={classes.toolbarGrp2}>
            <Tabs
              onChange={handleChange}
              menus={["services", "technologies", "solutions", "blog&news"]}></Tabs>
          </div>
          <div className={classes.toolbarGrp3}>
            <Button className={classes.searchBtn}>
              <SearchIcon />
            </Button>
            <Switch />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <Drawer cb={cb} visible={idx == 0 && serviceMenuVisible}>
        <div className={classes.serviceContainer}>
          <div className={classes.serviceCol1}>
            <div className={classes.serviceTitle}>Services</div>

            <h1 className="ml11">
              <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters">
                  Our service portfolio covers an entire software development life cycle and meets
                  varied business needs.
                </span>
              </span>
            </h1>
            <div className={classes.serviceContactBtnWrapper}>
              <ButtonBase className={classes.serviceContactBtn}>CONTACT</ButtonBase>
            </div>
          </div>
          <div className={classes.serviceCol2}>
            <div>
              <ButtonBase className={classes.serviceCol2Btn}>Programming Languages</ButtonBase>
            </div>
            <div>
              <ButtonBase className={classes.serviceCol2Btn}>Advanced Technologies</ButtonBase>
            </div>
            <div>
              <ButtonBase className={classes.serviceCol2Btn}>Cloud Technologies</ButtonBase>
            </div>
          </div>
          <div className={classes.serviceCol3}>
            <Link className={classes.serviceCol3Link} href={"#"}>
              Software Development
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              Data Analytics
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              UI/UX Design
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              Testing And QA
            </Link>
          </div>
          <div className={classes.serviceCol4}>
            <Link className={classes.serviceCol4Link} href={"#"}>
              Infrastructure Services
            </Link>
            <Link className={classes.serviceCol4Link} href={"#"}>
              IT OutSourcing
            </Link>
            <Link className={classes.serviceCol4Link} href={"#"}>
              IT Consulting
            </Link>
            <Link className={classes.serviceCol4Link} href={"#"}>
              IT Support
            </Link>
          </div>
        </div>
      </Drawer>

      <div className={classes.content}>
        <div className={classes.bg}></div>
        {children}
      </div>
      <IconButton className={classes.upAnchor}>
        <UPIcon />
      </IconButton>
      <IconButton className={classes.chatBtn}>
        <ChatIcon />
      </IconButton>
      <Footer />
    </div>
  );
};
export default Layout;

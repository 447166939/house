import React, { useState, useCallback, useEffect } from "react";
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
import InputBase from "@material-ui/core/InputBase";
import Link from "@material-ui/core/Link";
import anime from "animejs";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import upSvg from "@/assets/up.svg";
import chatSvg from "@/assets/chat.svg";
import logoSvg from "@/assets/logo.svg";
import { RootState } from "@/store/index";
import CloseIcon from "@material-ui/icons/Close";
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
    toolbarGrp4: {
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
    searchCloseBtn: {
      width: "41px",
      marginRight: "26px"
    },
    searchInputWrapper: {
      width: "764px",
      height: "44px",
      position: "relative",
      background: "inherit",
      outline: "none",
      border: "none",
      boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
      borderRadius: "22px",
      display: "flex",
      alignItems: "center",
      color: "#CBD5E5",
      fontSize: "14px",
      lineHeight: "50px",
      fontWeight: "bold",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      marginRight: "41px",
      "&:after": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        boxShadow: "2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset",
        borderRadius: "22px"
      }
    },
    searchInput: {
      color: "#CBD5E5",
      fontSize: "14px",
      lineHeight: "50px",
      fontWeight: "bold",
      flex: 1
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
      position: "fixed",
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
    },
    ball: {
      position: "fixed",
      width: "92px",
      height: "auto",
      left: "100px",
      top: "900px",
      zIndex: 1
    },
    circle: {
      position: "fixed",
      top: "600px",
      left: "-300px",
      width: "253px",
      height: "auto",
      zIndex: -50
    },
    circleB: {
      position: "fixed",
      top: "1000px",
      left: "600px",
      width: "253px",
      height: "auto",
      zIndex: -100
    },
    circleSB: {
      position: "fixed",
      top: "900px",
      left: "400px",
      width: "100px",
      height: "auto",
      zIndex: -200
    },
    cube: {
      position: "fixed",
      width: "82px",
      height: "auto",
      left: "0px",
      top: "1000px",
      zIndex: -50
    },
    cubeB: {
      position: "fixed",
      width: "156px",
      height: "auto",
      left: "400px",
      top: "1050px",
      zIndex: -100
    },
    egg: {
      position: "fixed",
      width: "700px",
      height: "aoto",
      left: -500,
      transform: "scale(0.1)",
      top: "1350px",
      zIndex: -50
    },
    rect: {
      position: "fixed",
      width: "185px",
      height: "auto",
      left: "200px",
      top: "900px",
      zIndex: -50
    },
    rectB: {
      position: "fixed",
      width: "185px",
      height: "auto",
      left: "100px",
      top: "1100px",
      zIndex: -100
    },
    tetrahedron: {
      position: "fixed",
      width: "156px",
      height: "auto",
      left: "100px",
      top: "900px",
      zIndex: -50
    },
    tetrahedronB: {
      position: "fixed",
      width: "156px",
      height: "auto",
      left: "300px",
      top: "1150px",
      zIndex: -100
    },
    triangle: {
      position: "fixed",
      width: "148px",
      height: "auto",
      left: "400px",
      top: "1000px",
      zIndex: -50
    },
    triangleB: {
      position: "fixed",
      width: "82px",
      height: "auto",
      left: "300px",
      top: "1200px",
      zIndex: -100
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
  const [searchOpen, setSearchOpen] = useState(false);
  const {
    serviceMenuVisible,
    technologiesMenuVisible,
    solutionsMenuVisible,
    blogAndNewsMenuVisible
  } = useSelector((state: RootState) => state.global);
  useEffect(() => {
    var ballTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var circleTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      delay:2000,
      loop: true
    });
    var circleBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var circleSBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var cubeTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var cubeBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var eggTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var rectTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var rectBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var tetrahedronTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var tetrahedronBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var triangleTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var triangleBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    ballTl.add({
      targets: ["#ball"],
      top: -100,
      left: "1200px",
      rotate: "360deg",
      duration: 30000
    });
    circleTl.add({
      targets: ["#circle"],
      top: -300,
      left: "700px",
      rotate: "360deg",
      delay:500,
      duration: 30000
    });
    circleBTl.add({
      targets: ["#circleB"],
      top: 800,
      left: "2600px",
      rotate: "360deg",
      delay: 500,
      duration: 50000
    });
    circleSBTl.add({
      targets: ["#circleSB"],
      left: "2000px",
      top: -200,
      rotate: "360deg",
      delay: 50000,
      duration: 60000
    });
    cubeTl.add({
      targets: ["#cube"],
      left: "1500px",
      top: -400,
      rotate: "360deg",
      delay: 30000,
      duration: 30000
    });
    cubeBTl.add({
      targets: ["#cubeB"],
      left: "1400px",
      top: -600,
      delay: 0,
      rotate: "360deg",
      duration: 50000
    });
    eggTl.add({
      targets: ["#egg"],
      left: "1100px",
      top: -400,
      delay: 20000,
      rotate: "360deg",
      duration: 30000
    });
    rectTl.add({
      targets: ["#rect"],
      left: "1300px",
      top: 0,
      delay: 16000,
      rotate: "360deg",
      duration: 30000
    });
    rectBTl.add({
      targets: ["#rectB"],
      left: "1100px",
      top: "-600px",
      delay:30000,
      rotate: "360deg",
      duration: 50000
    });
    tetrahedronTl.add({
      targets: ["#tetrahedron"],
      left: "900px",
      top: 100,
      delay: 19000,
      rotate: "360deg",
      duration: 30000
    });
    tetrahedronBTl.add({
      targets: ["#tetrahedronB"],
      left: "800px",
      top: 0,
      delay: 2000,
      rotate: "360deg",
      duration: 50000
    });
    triangleTl.add({
      targets: ["#triangle"],
      left: "1500px",
      top:0,
      rotate: "360deg",
      delay: 9000,
      duration: 30000
    });
    triangleBTl.add({
      targets: ["#triangleB"],
      left: "1500px",
      top: 0,
      rotate: "360deg",
      delay: 14000,
      duration: 50000
    });
  }, []);
  const handleChange = useCallback((index) => {
    setIdx(index);
  }, []);
  const openSearch = useCallback(() => {
    setSearchOpen(true);
  }, []);
  const closeSearch = useCallback(() => {
    console.log("close");
    setSearchOpen(false);
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
          {searchOpen ? null : (
            <div className={classes.toolbarGrp2}>
              <Tabs
                onChange={handleChange}
                menus={["services", "technologies", "solutions", "blog&news"]}></Tabs>
            </div>
          )}
          <div className={classes.toolbarGrp3}>
            {searchOpen ? (
              <div className={classes.toolbarGrp4}>
                <div className={classes.searchInputWrapper}>
                  <SearchIcon />
                  <InputBase className={classes.searchInput} placeholder={"SERVICES"} />
                </div>
              </div>
            ) : null}
            {searchOpen ? (
              <Button key={"close"} onClick={closeSearch} className={classes.searchCloseBtn}>
                <CloseIcon />
              </Button>
            ) : (
              <Button key={"open"} onClick={openSearch} className={classes.searchBtn}>
                <SearchIcon />
              </Button>
            )}
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
        <img id={"circle"} className={classes.circle} src={"/circle.png"} />
        <img id={"ball"} className={classes.ball} src={"/ball.png"} />
        <img id={"rect"} className={classes.rect} src={"/rect.png"} />
        <img id={"triangle"} className={classes.triangle} src={"/triangle.png"} />
        <img id={"cube"} className={classes.cube} src={"/cube.png"} />
        <img className={classes.egg} id={"egg"} src={"/egg.png"} />
        <img id="tetrahedron" className={classes.tetrahedron} src={"/tetrahedron.png"} />

        <img id={"circleB"} className={classes.circleB} src={"/circleB.png"} />
        <img id={"circleSB"} className={classes.circleSB} src={"/circleSB.png"} />
        <img id="cubeB" className={classes.cubeB} src={"/cubeB.png"} />
        <img id={"rectB"} className={classes.rectB} src={"/rectB.png"} />
        <img id="tetrahedronB" className={classes.tetrahedronB} src={"/tetrahedronB.png"} />
        <img id={"triangleB"} className={classes.triangleB} src={"/triangleB.png"} />

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

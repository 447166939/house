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
import {useDispatch, useSelector} from "react-redux";
import upSvg from "@/assets/up.svg";
import chatSvg from "@/assets/chat.svg";
import logoSvg from "@/assets/logo.svg";
import { RootState } from "@/store/index";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import actions from "@/store/modules/global/action";
export interface IUPIconProps {}
const UPIcon: React.FC<IUPIconProps> = (props: IUPIconProps) => {
  return <SvgIcon component={upSvg} viewBox={"0 0 21 26"} />;
};
export interface IChatIconProps {}
const ChatIcon: React.FC<IChatIconProps> = (props: IChatIconProps) => {
  return <SvgIcon component={chatSvg} viewBox={"0 0 26.6 22.3"} />;
};
const {
    // MAIN MENUS APP BAR
    setAppBarServiceMenuVisible,
    setAppBarTechnologiesMenuVisible,
    setAppBarSolutionsMenuVisible,
    setAppBarBlogAndNewsMenuVisible,

    // TECHNOLOGIES SUB-MENUS APP_BAR
    setAppBarTechnologiesProgrammingLanguagesSubMenuVisible,
    setAppBarTechnologiesAdvancedTechnologiesSubMenuVisible,
    setAppBarTechnologiesCloudTechnologiesSubMenuVisible,

} = actions;

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
      boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
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
      boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
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
    circle: {
      position: "absolute",
      top: "800px",
      left: "-1400px",
      width: "253px",
      height: "auto"
    },
    circle2: {
      position: "absolute",
      bottom: "-100px",
      left: "0px",
      width: "253px",
      height: "auto"
    },
    ball: {
      position: "absolute",
      width: "92px",
      height: "auto",
      left: "-3000px",
      top: "1800px",
      zIndex: 1
    },
    rect: {
      position: "absolute",
      width: "185px",
      height: "auto",
      left: "-2000px",
      top: "1610px"
    },
    triangle: {
      position: "absolute",
      width: "148px",
      height: "auto",
      left: "-800px",
      top: "1650px"
    },
    egg: {
      position: "absolute",
      width: "700px",
      height: "aoto",
      left: "-400px",
      transform: "scale(0.1)",
      top: "550px"
    },
    egg2: {
      position: "absolute",
      width: "700px",
      height: "aoto",
      left: "200px",
      transform: "scale(0.1)",
      bottom: "-100px"
    },
    triangle1: {
      position: "absolute",
      width: "82px",
      height: "auto",
      left: "-700px",
      top: "1200px"
    },
    cube: {
      position: "absolute",
      width: "82px",
      height: "auto",
      left: "-300px",
      top: "2000px",
      zIndex: -100
    },
    cube1: {
      position: "absolute",
      width: "156px",
      height: "auto",
      left: "-800px",
      top: "900px",
      zIndex: -50
    },
    tetrahedron: {
      position: "absolute",
      width: "156px",
      height: "auto",
      left: "100px",
      top: "1000px",
      zIndex: -50
    },
    circle1: {
      position: "absolute",
      width: "156px",
      height: "auto",
      left: "-500px",
      top: "8000px",
      zIndex: -50
    },
    active: {
      color: "#CBD5E5",
      "&:after": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        boxShadow:
          "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset",
        borderRadius: "8px"
      }
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
  const dispatch = useDispatch();
  const [idx, setIdx] = useState();
  const [searchOpen, setSearchOpen] = useState(false);
  const {
    appBarServiceMenuVisible,
    appBarTechnologiesMenuVisible,
    appBarTechnologiesProgrammingLanguagesSubMenuVisible,
    appBarTechnologiesAdvancedTechnologiesSubMenuVisible,
    appBarTechnologiesCloudTechnologiesSubMenuVisible,
    appBarSolutionsMenuVisible,
    appBarBlogAndNewsMenuVisible
  } = useSelector((state: RootState) => state.global);
  // useEffect(() => {
  //   var t1 = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var t2 = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var t3 = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var t4 = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var t5 = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var t6 = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var cubeTimeLine = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var cubeTimeLine1 = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var tetrahedronTimeLine = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var circle1TimeLine = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var circle2TimeLine = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   var egg2TimeLine = anime.timeline({
  //     easing: "linear",
  //     duration: 3000,
  //     loop: true
  //   });
  //   t1.add({
  //     targets: ["#circle"],
  //     top: "0px",
  //     left: "2500px",
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  //   t2.add({
  //     targets: ["#ball"],
  //     top: 200,
  //     left: "2500px",
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  //   t3.add({
  //     targets: ["#rect"],
  //     top: 100,
  //     left: "2500px",
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  //   t4.add({
  //     targets: ["#triangle"],
  //     left: "2500px",
  //     top: 300,
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  //   t5.add({
  //     targets: ["#egg"],
  //     left: "2500px",
  //     top: -400,
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  //   t6.add({
  //     targets: ["#triangle1"],
  //     left: "2500px",
  //     top: -600,
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  //   cubeTimeLine.add({
  //     targets: ["#cube"],
  //     left: "2500px",
  //     top: "-600px",
  //     rotate: "360deg",
  //     duration: 50000
  //   });
  //   cubeTimeLine1.add({
  //     targets: ["#cube1"],
  //     left: "2500px",
  //     top: "-600px",
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  //   tetrahedronTimeLine.add({
  //     targets: ["#tetrahedron"],
  //     left: "1000px",
  //     top: "-600px",
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  //   circle1TimeLine.add({
  //     targets: ["#circle1"],
  //     left: "800px",
  //     top: "300px",
  //     rotate: "360deg",
  //     duration: 60000
  //   });
  //   circle2TimeLine.add({
  //     targets: ["#circle2"],
  //     left: "1500px",
  //     bottom: "3000px",
  //     rotate: "360deg",
  //     duration: 60000
  //   });
  //   egg2TimeLine.add({
  //     targets: ["#egg2"],
  //     left: "800px",
  //     bottom: "6000px",
  //     rotate: "360deg",
  //     duration: 30000
  //   });
  // }, []);
  const handleChange = useCallback((index) => {
    setIdx(index);
  }, []);
  const handleSubClick = useCallback((subMenuState: string) => {
      console.log(" handling sub-click!");
      if(subMenuState === "appBarTechnologiesProgrammingLanguagesSubMenuVisible"){
        // dispatch(setAppBarTechnologiesMenuVisible(!appBarTechnologiesMenuVisible));
        dispatch(setAppBarTechnologiesProgrammingLanguagesSubMenuVisible(!appBarTechnologiesProgrammingLanguagesSubMenuVisible));
      }else if(subMenuState === "appBarTechnologiesAdvancedTechnologiesSubMenuVisible"){
        dispatch(setAppBarTechnologiesAdvancedTechnologiesSubMenuVisible(!appBarTechnologiesAdvancedTechnologiesSubMenuVisible));
      }else if(subMenuState === "appBarTechnologiesCloudTechnologiesSubMenuVisible"){
        dispatch(setAppBarTechnologiesCloudTechnologiesSubMenuVisible(!appBarTechnologiesCloudTechnologiesSubMenuVisible));
      }else{
          console.log("do nothing");
      }
  }, [appBarTechnologiesProgrammingLanguagesSubMenuVisible, appBarTechnologiesAdvancedTechnologiesSubMenuVisible, appBarTechnologiesCloudTechnologiesSubMenuVisible]);
  const openSearch = useCallback(() => {
    setSearchOpen(true);
  }, []);
  const closeSearch = useCallback(() => {
    console.log("close");
    setSearchOpen(false);
  }, []);
  const cb = useCallback(() => {
    console.log(" calling back!... ");
    var textWrapper = document.querySelector(".ml11 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: ".ml11 .letters",
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 100,
      offset: "-=775",
      delay: (el, i) => 34 * i
    });
    textWrapper = null;
  }, [idx]);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position={"fixed"}>
        <Toolbar className={classes.toolbar}>
          <Link href={"/"} className={classes.toolbarGrp1}>
            <LogoIcon />
            <span className={classes.nameText}>ModuleX</span>
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
      <Drawer cb={cb} key={0} visible={idx == 0 && appBarServiceMenuVisible}>
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
              <ButtonBase
                className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                disableRipple>
                CONTACT
              </ButtonBase>
            </div>
          </div>
          <div className={classes.serviceCol3}>
            <Link className={classes.serviceCol3Link} href={"#"}>
              Software Development
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              UI/UX Design
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              Testing And QA
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              Infrastructure Services
            </Link>
          </div>
          <div className={classes.serviceCol4}>
            <Link className={classes.serviceCol4Link} href={"#"}>
              Data Analytics
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

      <Drawer cb={cb} key={1} visible={idx == 1 && appBarTechnologiesMenuVisible}>
        <div className={classes.serviceContainer}>
          <div className={classes.serviceCol1}>
            <div className={classes.serviceTitle}>Technologies</div>

            <h1 className="ml11">
              <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters">
                  Our expertise spans all major technologies and platforms, and advances to
                  innovative technology trends.
                </span>
              </span>
            </h1>
            <div className={classes.serviceContactBtnWrapper}>
              <ButtonBase
                className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                disableRipple>
                CONTACT
              </ButtonBase>
            </div>
          </div>
          <div className={classes.serviceCol2}>
            <div>
              <ButtonBase className={clsx(classes.serviceCol2Btn, {[classes.active]: appBarTechnologiesProgrammingLanguagesSubMenuVisible})} onClick={() => handleSubClick("appBarTechnologiesProgrammingLanguagesSubMenuVisible")} disableRipple>
                Programming Languages
              </ButtonBase>
            </div>
            <div>
              <ButtonBase className={clsx(classes.serviceCol2Btn, {[classes.active]: appBarTechnologiesAdvancedTechnologiesSubMenuVisible})} onClick={() => handleSubClick("appBarTechnologiesAdvancedTechnologiesSubMenuVisible")} disableRipple>
                Advanced Technologies
              </ButtonBase>
            </div>
            <div>
              <ButtonBase className={clsx(classes.serviceCol2Btn, {[classes.active]: appBarTechnologiesCloudTechnologiesSubMenuVisible})} onClick={() => handleSubClick("appBarTechnologiesCloudTechnologiesSubMenuVisible")} disableRipple>
                Cloud Technologies
              </ButtonBase>
            </div>
          </div>
            {appBarTechnologiesProgrammingLanguagesSubMenuVisible && (
                <>
                    <div className={classes.serviceCol3}>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Java
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Python
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Golang
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            C++
                        </Link>
                    </div>
                    <div className={classes.serviceCol4}>
                        <Link className={classes.serviceCol4Link} href={"#"}>
                        JavaScript
                        </Link>
                        <Link className={classes.serviceCol4Link} href={"#"}>
                        NodeJS
                        </Link>
                        <Link className={classes.serviceCol4Link} href={"#"}>
                        PHP
                        </Link>
                        <Link className={classes.serviceCol4Link} href={"#"}>
                        .Net
                        </Link>
                    </div>
                </>
            )}
            {appBarTechnologiesAdvancedTechnologiesSubMenuVisible && (
                <>
                    <div className={classes.serviceCol3}>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Data Science
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Artificial Intelligence
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Virtual Reality
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Big Data
                        </Link>
                    </div>
                    <div className={classes.serviceCol4}>
                        <Link className={classes.serviceCol4Link} href={"#"}>
                            Internet Of Things
                        </Link>
                        <Link className={classes.serviceCol4Link} href={"#"}>
                            Cloud Computing
                        </Link>
                    </div>
                </>
            )}
            {appBarTechnologiesCloudTechnologiesSubMenuVisible && (
                <>
                    <div className={classes.serviceCol3}>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Amazon Web Service
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            MicroSoft Azure
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Saleforce
                        </Link>
                        <Link className={classes.serviceCol3Link} href={"#"}>
                            Google Cloud Platform
                        </Link>
                    </div>
                </>
            )}
        </div>
      </Drawer>
      <Drawer cb={cb} key={2} visible={idx == 2 && appBarSolutionsMenuVisible}>
        <div className={classes.serviceContainer}>
          <div className={classes.serviceCol1}>
            <div className={classes.serviceTitle}>Solutions</div>

            <h1 className="ml11">
              <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters">
                  We build on the IT domain expertise and industry knowledge to design sustainable
                  technology solutions.
                </span>
              </span>
            </h1>
            <div className={classes.serviceContactBtnWrapper}>
              <ButtonBase
                className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                disableRipple>
                CONTACT
              </ButtonBase>
            </div>
          </div>
          <div className={classes.serviceCol3}>
            <Link className={classes.serviceCol3Link} href={"#"}>
              CRM
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              ERP
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              Marketing & Advertising
            </Link>
            <Link className={classes.serviceCol3Link} href={"#"}>
              Data Anylytics
            </Link>
          </div>
          <div className={classes.serviceCol4}>
            <Link className={classes.serviceCol4Link} href={"#"}>
              E-commerce
            </Link>
            <Link className={classes.serviceCol4Link} href={"#"}>
              Supply Chain Management
            </Link>
            <Link className={classes.serviceCol4Link} href={"#"}>
              Human Resources
            </Link>
            <Link className={classes.serviceCol4Link} href={"#"}>
              E-Learning
            </Link>
          </div>
        </div>
      </Drawer>
      <Drawer cb={cb} key={3} visible={idx == 3 && appBarBlogAndNewsMenuVisible}>
        <div className={classes.serviceContainer}>
          <div className={classes.serviceCol1}>
            <div className={classes.serviceTitle}>Blogs & News</div>

            <h1 className="ml11">
              <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters">
                  Knowing everything about us and the IT industry...
                </span>
              </span>
            </h1>
            <div className={classes.serviceContactBtnWrapper}>
              <ButtonBase
                className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                disableRipple>
                CONTACT
              </ButtonBase>
            </div>
          </div>
            <div className={classes.serviceCol2}>
                <div>
                    <ButtonBase className={classes.serviceCol2Btn} disableRipple>
                        Check out our updates
                    </ButtonBase>
                </div>
            </div>
        </div>
      </Drawer>

      <div className={classes.content}>
        <div className={classes.bg}></div>
        <img id={"circle"} className={classes.circle} src={"/circle.svg"} />
        <img id={"ball"} className={classes.ball} src={"/ball.svg"} />
        <img id={"rect"} className={classes.rect} src={"/rect.svg"} />
        <img id={"triangle"} className={classes.triangle} src={"/triangle.svg"} />
        <img className={classes.egg} id={"egg"} src={"/egg.svg"} />
        <img id={"triangle1"} className={classes.triangle1} src={"/triangle1.svg"} />
        <img id={"cube"} className={classes.cube} src={"/cube.png"} />
        <img id="cube1" className={classes.cube1} src={"/cube1.png"} />
        <img id="tetrahedron" className={classes.tetrahedron} src={"/tetrahedron.png"} />
        <img id="circle1" className={classes.circle1} src={"/circle1.png"} />
        <img id={"circle2"} className={classes.circle2} src={"/circle.svg"} />
        <img className={classes.egg2} id={"egg2"} src={"/egg.svg"} />
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

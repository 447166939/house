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
import { useDispatch, useSelector } from "react-redux";
import upSvg from "@/assets/up.svg";
import chatSvg from "@/assets/chat.svg";
import logoSvg from "@/assets/logo.svg";
import userSvg from "@/assets/person.svg";
import EmailSvg from "@/assets/email.svg";
import { RootState } from "@/store/index";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import actions from "@/store/modules/global/action";
import TextareaAutosize from "@material-ui/core/TextareaAutosize/TextareaAutosize";
import Card from "@/components/Card";
import { IEmailIconProps } from "../../pages";
import PhoneSvg from "@/assets/phone.svg";
import useGlobalStyles from "../../theme/globalStyles/globalStyles";
import { px2vw, px2vwMo } from "@/utils/pxtovw";
import MenuIcon from "@material-ui/icons/Menu";
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
  setAppBarTechnologiesCloudTechnologiesSubMenuVisible
} = actions;

export interface IUserIconProps {}
const UserIcon: React.FC<IUserIconProps> = (props: IUserIconProps) => {
  return <SvgIcon component={userSvg} viewBox={"0 0 14.843 14.843"} />;
};
const EmailIcon = (props: IEmailIconProps) => (
  <SvgIcon component={EmailSvg} viewBox="0 0 19.79 19.79" />
);
export interface IPhoneIconProps {}
const PhoneIcon = (props: IPhoneIconProps) => (
  <SvgIcon component={PhoneSvg} viewBox="0 0 19.79 19.79" />
);
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
      alignItems: "center",
      width: "100%",
      paddingLeft: "14.7%",
      paddingRight: "14.2%",
      position: "relative"
    },
    toolbarGrp1: {
      display: "flex",
      alignItems: "center",
      marginRight: "202px"
    },
    toolbarGrp2: {
      display: "flex",
      alignItems: "center"
    },
    toolbarGrp3: {
      display: "flex",
      alignItems: "center",
      position: "absolute",
      right: "283px"
    },
    toolbarGrp4: {
      display: "flex",
      alignItems: "center",
      position: "absolute",
      right: "463px"
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
    userBtn: {
      width: "41px",
      marginRight: "26px"
    },
    searchCloseBtn: {
      width: "41px",
      marginRight: "26px"
    },
    searchInputWrapper: {
      opacity: 0,
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
      fontSize: `${px2vw(25)}`,
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
      height: "auto",
      display: "flex",
      justifyContent: "space-between",
      padding: "107px 280px",
      backgroundColor: "#f7f8fa"
    },
    technologiesContainer: {
      display: "flex",
      padding: "107px 280px",
      backgroundColor: "#f7f8fa",
      height: "500px"
    },
    technologiesCol1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "430px",
      marginRight: "104px"
    },
    technologiesCol2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginRight: "177px"
    },
    technologiesCol3: {
      display: "flex",
      flexDirection: "column",
      marginRight: "115px"
    },
    technologiesCol4: {
      display: "flex",
      flexDirection: "column"
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
      position: "relative"
      // "&:after": {
      //   content: "''",
      //   position: "absolute",
      //   width: "60px",
      //   height: "4px",
      //   bottom: 0,
      //   left: 0,
      //   backgroundColor: "#2699FB"
      // }
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
      width: "207px",
      "&:active": {
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
      left: -100,
      top: 900,
      zIndex: -100
    },
    egg: {
      position: "fixed",
      width: "700px",
      height: "aoto",
      left: -500,
      top: "1350px",
      zIndex: -49
    },
    rect: {
      position: "fixed",
      width: "185px",
      height: "auto",
      left: "-300px",
      top: "1200px",
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
      left: 100,
      top: "1000px",
      zIndex: -50
    },
    tetrahedronB: {
      position: "fixed",
      width: "156px",
      height: "auto",
      left: -300,
      top: 1100,
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
    },
    contactSection: {
      alignSelf: "stretch",
      marginLeft: "252px",
      marginRight: "252px",
      padding: "60px",
      marginTop: "50px",
      borderRadius: "10px"
    },
    contactBtnWrapper: {},
    contactTitle: {
      fontSize: "38px",
      lineHeight: "50px",
      color: "#000",
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(2),
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
    contactLeft: {
      display: "inline-block",
      width: "65%"
    },
    contactRight: {
      display: "inline-block",
      width: "35%",
      paddingLeft: "100px",
      verticalAlign: "bottom"
    },
    contactFormLabel: {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#000"
    },
    inputGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "30px"
    },
    contactInputWrapper: {
      width: "23%",
      boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30",
      borderRadius: "8px",
      paddingLeft: theme.spacing(2),
      backgroundColor: "#fff",
      opacity: 0.6,
      zIndex: 1
    },
    contactInput: {
      color: "#000"
    },
    contactTextAreaWrapper: {
      width: "100%",
      height: "120px",
      borderRadius: "8px",
      background: "none",
      marginTop: "60px"
    },
    contactTextArea: {
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      opacity: 0.6,
      boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30",
      padding: theme.spacing(2),
      borderRadius: "8px"
    },
    contactRightTitle: {
      fontSize: "20px",
      color: "#000",
      lineHeight: "24px",
      marginBottom: theme.spacing(1.5)
    },
    contactRightText: {
      fontSize: "16px",
      lineHeight: "18px",
      color: "#2699FB",
      marginLeft: theme.spacing(1)
    },
    contactRightBtn: {
      width: "189px",
      height: "52px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      opacity: 0.5,
      marginTop: theme.spacing(1.5)
    },
    phoneWrapper: {
      marginBottom: theme.spacing(1.5),
      display: "flex",
      alignItems: "center"
    },
    emailWrapper: {
      marginBottom: theme.spacing(1.5),
      display: "flex",
      alignItems: "center"
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
  const globalClasses = useGlobalStyles();
  const dispatch = useDispatch();
  const [idx, setIdx] = useState();
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const {
    appBarServiceMenuVisible,
    appBarTechnologiesMenuVisible,
    appBarTechnologiesProgrammingLanguagesSubMenuVisible,
    appBarTechnologiesAdvancedTechnologiesSubMenuVisible,
    appBarTechnologiesCloudTechnologiesSubMenuVisible,
    appBarSolutionsMenuVisible,
    appBarBlogAndNewsMenuVisible
  } = useSelector((state: RootState) => state.global);
  useEffect(() => {
    var t1 = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var t2 = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var t3 = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var t4 = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var t5 = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var t6 = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var cubeTimeLine = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var cubeTimeLine1 = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var tetrahedronTimeLine = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var circle1TimeLine = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var circle2TimeLine = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var egg2TimeLine = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    t1.add({
      targets: ["#circle"],
      top: "0px",
      left: "2500px",
      rotate: "360deg",
      duration: 30000
    });
    t2.add({
      targets: ["#ball"],
      top: 200,
      left: "2500px",
      rotate: "360deg",
      duration: 30000
    });
    t3.add({
      targets: ["#rect"],
      top: 100,
      left: "2500px",
      rotate: "360deg",
      duration: 30000
    });
    t4.add({
      targets: ["#triangle"],
      left: "2500px",
      top: 300,
      rotate: "360deg",
      duration: 30000
    });
    t5.add({
      targets: ["#egg"],
      left: "2500px",
      top: -400,
      rotate: "360deg",
      duration: 30000
    });
    t6.add({
      targets: ["#triangle1"],
      left: "2500px",
      top: -600,
      rotate: "360deg",
      duration: 30000
    });
    cubeTimeLine.add({
      targets: ["#cube"],
      left: "2500px",
      top: "-600px",
      rotate: "360deg",
      duration: 50000
    });
    cubeTimeLine1.add({
      targets: ["#cube1"],
      left: "2500px",
      top: "-600px",
      rotate: "360deg",
      duration: 30000
    });
    tetrahedronTimeLine.add({
      targets: ["#tetrahedron"],
      left: "1000px",
      top: "-600px",
      rotate: "360deg",
      duration: 30000
    });
    circle1TimeLine.add({
      targets: ["#circle1"],
      left: "800px",
      top: "300px",
      rotate: "360deg",
      duration: 60000
    });
    circle2TimeLine.add({
      targets: ["#circle2"],
      left: "1500px",
      bottom: "3000px",
      rotate: "360deg",
      duration: 60000
    });
    egg2TimeLine.add({
      targets: ["#egg2"],
      left: "800px",
      bottom: "6000px",
      rotate: "360deg",
      duration: 30000
    });
  }, []);
  useEffect(() => {
    var ballTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var circleTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      delay: 2000,
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
      top: 100,
      left: "1300px",
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 40000
    });
    circleTl.add({
      targets: ["#circle"],
      top: -300,
      left: "700px",
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 0,
      duration: 40000
    });
    circleBTl.add({
      targets: ["#circleB"],
      top: 800,
      left: "2600px",
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 500,
      duration: 50000
    });
    circleSBTl.add({
      targets: ["#circleSB"],
      left: "2000px",
      top: -200,
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 50000,
      duration: 60000
    });
    cubeTl.add({
      targets: ["#cube"],
      left: "1500px",
      top: -400,
      scale: [2, 2],
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 33000,
      duration: 40000
    });
    cubeBTl.add({
      targets: ["#cubeB"],
      left: "1400px",
      top: -600,
      delay: 3000,
      scale: [0.5, 0.5],
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 50000
    });
    eggTl.add({
      targets: ["#egg"],
      left: "1100px",
      top: -400,
      delay: 40000,
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 30000
    });
    rectTl.add({
      targets: ["#rect"],
      left: "900px",
      top: -300,
      delay: 10000,
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 40000
    });
    rectBTl.add({
      targets: ["#rectB"],
      left: "1300px",
      top: "-600px",
      scale: [0.5, 0.5],
      delay: 34000,
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 50000
    });
    tetrahedronTl.add({
      targets: ["#tetrahedron"],
      left: "900px",
      top: 100,
      delay: 21000,
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 40000
    });
    tetrahedronBTl.add({
      targets: ["#tetrahedronB"],
      left: "1300px",
      top: 200,
      delay: 1600,
      scale: [0.8, 0.8],
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 50000
    });
    triangleTl.add({
      targets: ["#triangle"],
      left: "2000px",
      top: 100,
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 9000,
      duration: 40000
    });
    triangleBTl.add({
      targets: ["#triangleB"],
      left: "1500px",
      top: 0,
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 14000,
      duration: 50000
    });
  }, []);
  const handleChange = useCallback((index) => {
    setIdx(index);
  }, []);
  const handleSubClick = useCallback(
    (subMenuState: string) => {
      console.log(" handling sub-click!");
      if (subMenuState === "appBarTechnologiesProgrammingLanguagesSubMenuVisible") {
        // dispatch(setAppBarTechnologiesMenuVisible(!appBarTechnologiesMenuVisible));
        dispatch(
          setAppBarTechnologiesProgrammingLanguagesSubMenuVisible(
            !appBarTechnologiesProgrammingLanguagesSubMenuVisible
          )
        );
      } else if (subMenuState === "appBarTechnologiesAdvancedTechnologiesSubMenuVisible") {
        dispatch(
          setAppBarTechnologiesAdvancedTechnologiesSubMenuVisible(
            !appBarTechnologiesAdvancedTechnologiesSubMenuVisible
          )
        );
      } else if (subMenuState === "appBarTechnologiesCloudTechnologiesSubMenuVisible") {
        dispatch(
          setAppBarTechnologiesCloudTechnologiesSubMenuVisible(
            !appBarTechnologiesCloudTechnologiesSubMenuVisible
          )
        );
      } else {
        console.log("do nothing");
      }
    },
    [
      appBarTechnologiesProgrammingLanguagesSubMenuVisible,
      appBarTechnologiesAdvancedTechnologiesSubMenuVisible,
      appBarTechnologiesCloudTechnologiesSubMenuVisible
    ]
  );
  const toggleSearchOpen = useCallback(() => {
    let searchInputVar = anime.timeline({
      easing: "easeInOutQuad",
      duration: 300,
      loop: false
    });
    if (!searchOpen) {
      searchInputVar
        .add({
          targets: ["#tabs"],
          translateY: -50,
          opacity: 0,
          duration: 500
        })
        .add({
          targets: [`#searchInput`],
          width: "764px",
          opacity: 1,
          duration: 270
        });
    } else {
      searchInputVar
        .add({
          targets: [`.${classes.searchInputWrapper}`],
          width: "41px",
          opacity: 0,
          duration: 500
        })
        .add({
          targets: ["#tabs"],
          translateY: 0,
          opacity: 1,
          duration: 500
        });
    }
    setSearchOpen(!searchOpen);
  }, [searchOpen]);
  const toggleUserOpen = useCallback(() => {
    console.log(" toggle UserOpen! Now UserState: " + userOpen + " and !userOpen: " + !userOpen);
    setUserOpen(!userOpen);
  }, [userOpen]);
  const cb = useCallback(() => {
    var textWrapper = document.querySelector("#service");
    console.log("service");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: `#service .letter`,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
    textWrapper = null;
  }, []);
  const cb1 = useCallback(() => {
    var textWrapper = document.querySelector("#technologies");
    console.log("technologies");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: `#technologies .letter`,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
    textWrapper = null;
  }, []);
  const cb2 = useCallback(() => {
    var textWrapper = document.querySelector("#solutions");
    console.log("solutions");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: `#solutions .letter`,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
    textWrapper = null;
  }, []);
  const cb3 = useCallback(() => {
    var textWrapper = document.querySelector("#blogAndNews");
    console.log("blogandnews");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: `#blogAndNews .letter`,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
    textWrapper = null;
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position={"fixed"}>
        <Toolbar className={classes.toolbar}>
          <Link href={"/"} className={classes.toolbarGrp1}>
            <LogoIcon />
            <span className={classes.nameText}>ModuleX</span>
          </Link>
          <div id={"tabs"} className={classes.toolbarGrp2}>
            <Tabs
              onChange={handleChange}
              menus={["services", "technologies", "solutions", "blog&news"]}></Tabs>
          </div>
          <div className={classes.toolbarGrp4}>
            <div id={"searchInput"} className={classes.searchInputWrapper}>
              <SearchIcon />
              <InputBase className={classes.searchInput} placeholder={"SERVICES"} />
            </div>
          </div>
          <div className={classes.toolbarGrp3}>
            {searchOpen ? (
              <Button key={"close"} onClick={toggleSearchOpen} className={classes.searchCloseBtn}>
                <CloseIcon />
              </Button>
            ) : (
              <Button key={"open"} onClick={toggleSearchOpen} className={classes.searchBtn}>
                <SearchIcon />
              </Button>
            )}
            <Button
              key={"user"}
              onClick={toggleUserOpen}
              className={clsx(classes.userBtn, { [classes.active]: userOpen })}>
              <UserIcon />
            </Button>
            <Switch />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <Drawer cb={cb} key={"serviceMenu"} visible={idx == 0 && appBarServiceMenuVisible}>
        <div className={classes.serviceContainer}>
          <div className={classes.serviceCol1}>
            <div className={clsx(classes.serviceTitle, globalClasses.cardTitleDashLineBlue)}>
              Services
            </div>
            <span className="text-wrapper">
              {/*<span className={globalClasses.lineBlue} />*/}
              <span id={"service"} className="letters">
                Our service portfolio covers an entire software development life cycle and meets
                varied business needs.
              </span>
            </span>
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
            <Link className={classes.serviceCol3Link} href={"/services/WebDesignService"}>
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
            <Link className={classes.serviceCol4Link} href={"/services/ITSupport"}>
              IT Support
            </Link>
          </div>
        </div>
      </Drawer>
      <Drawer cb={cb1} key={"technologiesMenu"} visible={idx == 1 && appBarTechnologiesMenuVisible}>
        <div className={classes.technologiesContainer}>
          <div className={classes.technologiesCol1}>
            <div className={clsx(classes.serviceTitle, globalClasses.cardTitleDashLineBlue)}>
              Technologies
            </div>
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span id={"technologies"} className="letters">
                Our expertise spans all major technologies and platforms, and advances to innovative
                technology trends.
              </span>
            </span>
            <div className={classes.serviceContactBtnWrapper}>
              <ButtonBase
                className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                disableRipple>
                CONTACT
              </ButtonBase>
            </div>
          </div>
          <div className={classes.technologiesCol2}>
            <div>
              <ButtonBase
                className={clsx(classes.serviceCol2Btn, {
                  [classes.active]: appBarTechnologiesProgrammingLanguagesSubMenuVisible
                })}
                onClick={() =>
                  handleSubClick("appBarTechnologiesProgrammingLanguagesSubMenuVisible")
                }
                disableRipple>
                Programming Languages
              </ButtonBase>
            </div>
            <div>
              <ButtonBase
                className={clsx(classes.serviceCol2Btn, {
                  [classes.active]: appBarTechnologiesAdvancedTechnologiesSubMenuVisible
                })}
                onClick={() =>
                  handleSubClick("appBarTechnologiesAdvancedTechnologiesSubMenuVisible")
                }
                disableRipple>
                Advanced Technologies
              </ButtonBase>
            </div>
            <div>
              <ButtonBase
                className={clsx(classes.serviceCol2Btn, {
                  [classes.active]: appBarTechnologiesCloudTechnologiesSubMenuVisible
                })}
                onClick={() => handleSubClick("appBarTechnologiesCloudTechnologiesSubMenuVisible")}
                disableRipple>
                Cloud Technologies
              </ButtonBase>
            </div>
          </div>
          {appBarTechnologiesProgrammingLanguagesSubMenuVisible && (
            <>
              <div className={classes.technologiesCol3}>
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
              <div className={classes.technologiesCol4}>
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
              <div className={classes.technologiesCol3}>
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
              <div className={classes.technologiesCol4}>
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
              <div className={classes.technologiesCol3}>
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
      <Drawer cb={cb2} key={"solutionsMenu"} visible={idx == 2 && appBarSolutionsMenuVisible}>
        <div className={classes.serviceContainer}>
          <div className={classes.serviceCol1}>
            <div className={clsx(classes.serviceTitle, globalClasses.cardTitleDashLineBlue)}>
              Solutions
            </div>
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span id={"solutions"} className="letters">
                We build on the IT domain expertise and industry knowledge to design sustainable
                technology solutions.
              </span>
            </span>
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
      <Drawer cb={cb3} key={"blogAndNewsMenu"} visible={idx == 3 && appBarBlogAndNewsMenuVisible}>
        <div className={classes.serviceContainer}>
          <div className={classes.serviceCol1}>
            <div className={clsx(classes.serviceTitle, globalClasses.cardTitleDashLineBlue)}>
              Blogs & News
            </div>
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span id={"blogAndNews"} className="letters">
                Knowing everything about us and the IT industry...{" "}
              </span>
            </span>
            <div className={classes.serviceContactBtnWrapper}>
              <ButtonBase
                className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                disableRipple>
                CONTACT
              </ButtonBase>
            </div>
          </div>
          <div className={classes.serviceCol1}>
            <div>
              <Link className={classes.serviceCol4Link} href={"#"}>
                Check out our updates
              </Link>
            </div>
          </div>
        </div>
      </Drawer>

      <div className={classes.content}>
        <div className={classes.bg}></div>
        {/*<img id={"circle"} className={classes.circle} src={"/circle.png"} />*/}
        {/*<img id={"ball"} className={classes.ball} src={"/ball.png"} />*/}
        {/*<img id={"rect"} className={classes.rect} src={"/rect.png"} />*/}
        {/*<img id={"triangle"} className={classes.triangle} src={"/triangle.png"} />*/}
        {/*<img id={"cube"} className={classes.cube} src={"/cube.png"} />*/}
        {/*<img className={classes.egg} id={"egg"} src={"/egg.png"} />*/}
        {/*<img id="tetrahedron" className={classes.tetrahedron} src={"/tetrahedron.png"} />*/}

        {/*<img id={"circleB"} className={classes.circleB} src={"/circleB.png"} />*/}
        {/*<img id={"circleSB"} className={classes.circleSB} src={"/circleSB.png"} />*/}
        {/*<img id="cubeB" className={classes.cubeB} src={"/cubeB.png"} />*/}
        {/*<img id={"rectB"} className={classes.rectB} src={"/rectB.png"} />*/}
        {/*<img id="tetrahedronB" className={classes.tetrahedronB} src={"/tetrahedronB.png"} />*/}
        {/*<img id={"triangleB"} className={classes.triangleB} src={"/triangleB.png"} />*/}

        {children}

        <Card
          customStyles={clsx(classes.contactSection, globalClasses.cardGlassEffect)}
          blurActive={true}>
          <div className={clsx(globalClasses.cardBigTitle, globalClasses.cardTitleDashLineGold)}>
            Contact Us
          </div>
          <div className={classes.contactLeft}>
            <div className={classes.contactFormLabel}>
              Drop us a line! We are here to answer your questions 24/7.
            </div>
            <div className={classes.inputGroup}>
              <div
                className={clsx(classes.contactInputWrapper, globalClasses.cardBlurBtnBoxShadow)}>
                {" "}
                <InputBase
                  className={clsx(classes.contactInput, globalClasses.cardSmallText)}
                  placeholder="Your FirstName:"
                />
              </div>
              <div
                className={clsx(classes.contactInputWrapper, globalClasses.cardBlurBtnBoxShadow)}>
                {" "}
                <InputBase
                  className={clsx(classes.contactInput, globalClasses.cardSmallText)}
                  placeholder="Your LastName:"
                />
              </div>
              <div
                className={clsx(classes.contactInputWrapper, globalClasses.cardBlurBtnBoxShadow)}>
                {" "}
                <InputBase
                  className={clsx(classes.contactInput, globalClasses.cardSmallText)}
                  placeholder="Your Email:"
                />
              </div>
              <div
                className={clsx(classes.contactInputWrapper, globalClasses.cardBlurBtnBoxShadow)}>
                {" "}
                <InputBase
                  className={clsx(classes.contactInput, globalClasses.cardSmallText)}
                  placeholder="Your Number:"
                />
              </div>
            </div>
            <div className={classes.contactTextAreaWrapper}>
              <TextareaAutosize
                className={clsx(classes.contactTextArea, globalClasses.cardSmallText)}
                rowsMin={4}
                placeholder="How can we help you?"
              />
            </div>
          </div>
          <div className={classes.contactRight}>
            <div className={classes.contactRightTitle}>Our contact details</div>
            <div className={classes.phoneWrapper}>
              <PhoneIcon />
              <span className={classes.contactRightText}>+ 1 626-265-5257</span>
            </div>
            <div className={classes.emailWrapper}>
              <EmailIcon />
              <span className={classes.contactRightText}>zion@galaxycgi.com</span>
            </div>
            <div className={classes.contactRightTitle}>GET IN TOUCH WITH US</div>
            {/*<div className={classes.contactRightText}>GET IN TOUCH WITH US</div>*/}
            <div className={classes.contactBtnWrapper}>
              <ButtonBase className={globalClasses.cardBlurBtn} disableRipple>
                SEND IT!
              </ButtonBase>
            </div>
          </div>
        </Card>
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

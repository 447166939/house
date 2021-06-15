import { makeStyles } from "@material-ui/core";
import { px2vw, px2vwMo } from "@/utils/pxtovw";

const useGlobalStyles = makeStyles((theme) => ({
  // for Buttons
  cardBlurBtn: {
    width: `${px2vw(148)}`,
    height: `${px2vw(48)}`,
    color: "#fff",
    fontSize: `${px2vw(12)}`,
    lineHeight: `${px2vw(30)}`,
    backdropFilter: "blur(23px)",
    backgroundColor: "rgba(247, 248, 250, .45)",
    borderRadius: `${px2vw(4)}`,
    boxShadow: "-8px -4px 12px 3px #7b3bed30, 8px 4px 12px 6px #30cfda5d",
    marginTop: `${px2vw(30)}`,
    zIndex: 100,
    "&:active": {
      color: "#CBD5E5",
      paddingLeft: theme.spacing(2),
      backgroundColor: "#fff",
      opacity: 0.45,
      boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30"
    }
  },
  mainMenuBtn: {
    color: "#2699FB",
    position: "relative",
    background: "inherit",
    outline: "none",
    border: "none",
    boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    height: "40px",
    padding: theme.spacing(2),
    marginRight: "32px",
    [theme.breakpoints.down("xl")]: {
      marginRight: theme.spacing(4)
    },
    [theme.breakpoints.down("lg")]: {
      marginRight: theme.spacing(2)
    },
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(1)
    }
  },
  mainMenuBtnActive: {
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
  cardNormalBtn: {
    width: `${px2vw(331)}`,
    height: `${px2vw(69)}`,
    color: "#2699FB",
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: `${px2vw(8)}`,
    cursor: "pointer",
    textTransform: "uppercase",
    marginRight: `${px2vw(15)}`
  },
  cardNormalBtnActive: {
    color: "#CBD5E5",
    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      boxShadow: "2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset",
      borderRadius: `${px2vw(8)}`
    }
  },
  // boxShadows
  cardBlurBtnBoxShadow: {
    boxShadow: "-8px -4px 12px 3px #7b3bed30, 8px 4px 12px 6px #30cfda5d"
  },
  cardBlurBtnBoxShadowActive: {
    boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30"
  },
  menuBtnBoxShadow: {
    boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA"
  },
  menuBtnBoxShadowActive: {
    boxShadow:
      "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset"
  },
  normalBtnBoxShadow: {
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA"
  },
  normalBtnBoxShadowActive: {
    boxShadow: "2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset"
  },
  // Decorator

  // Cards
  cardBlurBackground: {
    backdropFilter: "blur(23px)",
    background: "rgba(247, 248, 250, .3)"
  },
  cardWhiteBackground: {
    backgroundColor: "#f7f8fa"
  },
  // Cards Title Text
  cardBigTitle: {
    fontSize: `${px2vw(40)}`,
    lineHeight: `${px2vw(56)}`,
    fontWeight: "bold",
    position: "relative",
    marginBottom: theme.spacing(2),
    [`${theme.breakpoints.down('sm')}`]:{
        fontSize:`${px2vwMo(30)}`,
      lineHeight:`${px2vwMo(50)}`,
      marginBottom:`${px2vwMo(8)}`
    }
  },
  cardMediumTitle: {
    textAlign: "center",
    fontSize: `${px2vw(32)}`,
    lineHeight: `${px2vw(48)}`,
    fontWeight: "bold",
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  cardSmallTitle: {
    fontSize: `${px2vw(24)}`,
    lineHeight: `${px2vw(40)}`,
    fontWeight: "bold",
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  cardTitleDashLineBlue: {
    "&:after": {
      content: "''",
      position: "absolute",
      width: `${px2vw(60)}`,
      height: `${px2vw(4)}`,
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  cardTitleDashLineBlueMobile: {
    width: "60px",
    height: "4px",
    margin: "0 auto 21px auto",
    backgroundColor: "#2699FB"
  },
  cardTitleDashLineGold: {
    "&:after": {
      content: "''",
      position: "absolute",
      width: `${px2vw(60)}`,
      height: `${px2vw(4)}`,
      bottom: 0,
      left: 0,
      backgroundColor: "#ffef96",
      [`${theme.breakpoints.down('sm')}`]:{
        width:`${px2vwMo(60)}`,
        height:`${px2vwMo(4)}`,
      }
    }
  },
  cardBigText: {
    fontSize: `${px2vw(24)}`,
    color: "#000000",
    lineHeight: `${px2vw(24)}`
  },
  cardMediumText: {
    fontSize: `${px2vw(20)}`,
    color: "#000000",
    lineHeight: `${px2vw(20)}`
  },
  cardSmallText: {
    fontSize: `${px2vw(16)}`,
    color: "#000000",
    lineHeight: `${px2vw(16)}`
  },
  // Effects
  cardGlassEffect: {
    position: "relative",
    overflow: "hidden",
    zIndex:1,
    "&:after": {
      zIndex:-1,
      content: "''",
      position: "absolute",
      top: "0px",
      left: `-${px2vw(1000)}`,
      width: "100%",
      height: "100%",
      opacity: 0.5,
      transform: "translateX(-100%)",
      background:
        "linear-gradient(to right, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.09) 75%, rgba(255, 255, 255, 0.36) 90%, rgba(255, 255, 255, 0.12) 100%)"
    },
    "&:hover:after": {
      zIndex:-1,
      width: "100%",
      height: "100%",
      opacity: 0.5,
      top: "0px",
      left: "0px",
      transform: "translateX(15%)",
      transitionProperty: "transform, opacity",
      transitionDuration: "0.45s, 0.15s",
      transitionTimingFunction: "cubic-bezier"
    }
  },
  // Colors
  // Text Colors
  textWhite: {
    color: "#FFFFFF"
  },
  textBlack: {
    color: "#000000"
  },
  textBlue: {
    color: "#2699FB"
  },
  textGrey: {
    color: "#CBD5E5"
  },
  textGold: {
    color: "#ffef96"
  },
  // backGround Colors
  backgroundColorWhite: {
    backgroundColor: "#FFFFFF"
  },
  backgroundColorBlack: {
    backgroundColor: "#000000"
  },
  backgroundColorBlue: {
    backgroundColor: "#2699FB"
  },
  backgroundColorGrey: {
    backgroundColor: "#CBD5E5"
  },
  backgroundColoGold: {
    backgroundColor: "#ffef96"
  },

  // events
  pointerEventsNone: {
    pointerEvents: "none"
  }
}));

export default useGlobalStyles;

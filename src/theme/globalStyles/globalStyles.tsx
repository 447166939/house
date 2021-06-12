import { makeStyles } from "@material-ui/core";
import { px2vwMo } from "@/utils/pxtovw";

const useGlobalStyles = makeStyles((theme) => ({
  // for Buttons
  cardBlurBtn: {
    width: "148px",
    height: "48px",
    color: "#fff",
    fontSize: "12px",
    lineHeight: "30px",
    backdropFilter: "blur(23px)",
    backgroundColor: "rgba(247, 248, 250, .45)",
    borderRadius: "4px",
    boxShadow: "-8px -4px 12px 3px #7b3bed30, 8px 4px 12px 6px #30cfda5d",
    marginTop: "30px",
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
    width: "331px",
    height: "69px",
    color: "#2699FB",
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    marginRight: "15px"
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
      borderRadius: "8px"
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
    fontSize: "40px",
    lineHeight: "56px",
    fontWeight: "bold",
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  cardMediumTitle: {
    textAlign: "center",
    fontSize: "32px",
    lineHeight: "48px",
    fontWeight: "bold",
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  cardSmallTitle: {
    fontSize: "24px",
    lineHeight: "40px",
    fontWeight: "bold",
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  cardTitleDashLineBlue: {
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
      width: "60px",
      height: "4px",
      bottom: 0,
      left: 0,
      backgroundColor: "#ffef96"
    }
  },
  cardBigText: {
    fontSize: "24px",
    color: "#000000",
    lineHeight: "24px"
  },
  cardMediumText: {
    fontSize: "20px",
    color: "#000000",
    lineHeight: "20px"
  },
  cardSmallText: {
    fontSize: "16px",
    color: "#000000",
    lineHeight: "16px"
  },
  // Effects
  cardGlassEffect: {
    position: "relative",
    overflow: "hidden",
    "&:after": {
      content: "''",
      position: "absolute",
      top: "0px",
      left: "-1000px",
      width: "100%",
      height: "100%",
      opacity: 0.5,
      transform: "translateX(-100%)",
      background:
        "linear-gradient(to right, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.09) 75%, rgba(255, 255, 255, 0.36) 90%, rgba(255, 255, 255, 0.12) 100%)"
    },
    "&:hover:after": {
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

import { makeStyles } from "@material-ui/core";

// const useGlobalColors = makeStyles((theme) => ({
//     // Text Colors
//     textWhite: {
//         color: "#FFFFFF"
//     },
//     textBlack: {
//         color: "#000000"
//     },
//     textBlue: {
//         color: "#2699FB"
//     },
//     textGrey: {
//         color: "#CBD5E5"
//     },
//     textGold: {
//         color: "#ffef96"
//     },
// }));

const useGlobalStyles = makeStyles((theme) =>({
    // for Buttons
    cardBlurBtn: {
        width: "148px",
        height: "48px",
        color: "#FFFFFF",
        fontSize: "12px",
        lineHeight: "30px",
        opacity: 0.75,
        backgroundColor: "rgba(247, 248, 250, .5)",
        borderRadius: "4px",
        boxShadow: "-8px -4px 12px 3px #7b3bed30, 8px 4px 12px 6px #30cfda5d",
        "&:active":{
            // boxShadow: "inset 3px 3px 3px 3px rgba(0,0,0,0.2), 3px 3px 3px 0px rgba(255,255,255,0.2)",
            boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30",
            paddingLeft: theme.spacing(2),
            backgroundColor: "#fff",
            opacity: 0.45
        }
    },
    mainMenuBtn:{
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
        marginRight: "32px"
    },
    mainMenuBtnActive:{
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
    cardNormalBtn:{
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
    cardNormalBtnActive:{
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
    menuBtnBoxShadow:{
        boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA"
    },
    menuBtnBoxShadowActive:{
        boxShadow: "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset"
    },
    normalBtnBoxShadow:{
        boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA"
    },
    normalBtnBoxShadowActive:{
        boxShadow: "2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset"
    },
    // Cards
    // Cards Title Text
    cardBigTitle: {
        fontSize: "40px",
        lineHeight: "56px",
        fontWeight: "bold",
        position: "relative",
        marginBottom: theme.spacing(2),
    },
    cardMediumTitle: {
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
    cardTitleDashLine: {
        "&:after": {
            content: "''",
            position: "absolute",
            width: "60px",
            height: "4px",
            backgroundColor: "#ffef96",
            bottom: 0,
            left: 0
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
    }
}));

export default useGlobalStyles;
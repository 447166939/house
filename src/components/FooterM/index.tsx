import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import logoSvg from "@/assets/footerLogo.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import { px2vw, px2vwMo } from "@/utils/pxtovw";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";
export interface IFooterMProps {}
export interface IMobileLogoIconProps {
  classes?: object;
}
function LogoIcon(props: IMobileLogoIconProps) {
  return <SvgIcon {...props} component={logoSvg} viewBox="0 0 20 20"></SvgIcon>;
}
const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: "#2699FB"
    },
    ModuleX: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: `${px2vwMo(43)}`,
      lineHeight: 1
    },
    nameText: {
      color: "#fff",
      fontSize: `${px2vwMo(25)}`,
      fontWeight: "bold",
      marginLeft: theme.spacing(1)
    },
    footerBody: {
      borderRadius: `${px2vwMo(8)}`,
      boxShadow: "-4px -4px 5px #64B8FF99,4px 0 5px #64B8FF99,0 4px 10px rgba(0,0,0,.3)",
      display: "flex",
      flexDirection: "column",
      marginLeft: `${px2vwMo(20)}`,
      marginRight: `${px2vwMo(20)}`,
      marginTop: `${px2vwMo(49)}`,
      padding: `${px2vwMo(58)} ${px2vwMo(67)} ${px2vwMo(65)} ${px2vwMo(67)}`
    },
    linksBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch"
    },
    leftLink: {
      color: "#fff",
      fontSize: `${px2vwMo(23)}`,
      lineHeight: `${px2vwMo(39)}`
    },
    rightLink: {
      color: "#fff",
      fontSize: `${px2vwMo(23)}`,
      lineHeight: `${px2vwMo(39)}`
    },
    linkItem: {
      alignItems: "center",
      display: "flex",
      lineHeight: `${px2vwMo(39)}`,
      color: "#fff",
      fontSize: `${px2vwMo(23)}`
    },
    linkText: {
      marginLeft: `${px2vwMo(10)}`
    },
    contactBox: {
      marginTop: `${px2vwMo(52)}`
    },
    contactItem: {
      fontSize: `${px2vwMo(23)}`,
      lineHeight: `${px2vwMo(38)}`,
      color: "#fff"
    },
    subscribeText: {
      fontSize: `${px2vwMo(23)}`,
      lineHeight: `${px2vwMo(38)}`,
      color: "#fff",
      marginTop: `${px2vwMo(51)}`
    },
    okBtn: {
      boxShadow: "-4px -2px 4px #47AAFF,1px 1px 10px rgba(0,0,0,0.3)",
      width: `${px2vwMo(82)}`,
      height: `${px2vwMo(42)}`,
      color: "#fff"
    },
    inputWrapper: {
      boxShadow: "inset 3px 3px 3px 0px rgba(0,0,0,0.2), 3px 3px 3px 0px rgba(255,255,255,0.2)",
      borderRadius: `${px2vwMo(8)}`,
      paddingLeft: theme.spacing(2),
      backgroundColor: "#2699FB"
    },
    inputStyle: {
      height: `${px2vwMo(41)}`,
      minWidth: `${px2vwMo(220)}`
    },
    row: {
      display: "flex",
      marginTop: `${px2vwMo(15)}`,
      justifyContent: "space-between",
      alignItems: "center"
    },
    copyRight: {
      fontSize: `${px2vwMo(17)}`,
      lineHeight: `${px2vwMo(84)}`,
      color: "#fff",
      textAlign: "center"
    }
  })
);
const FooterM: React.FC<IFooterMProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.ModuleX}>
        <LogoIcon />
        <span className={classes.nameText}>Module X</span>
      </div>
      <div className={classes.footerBody}>
        <div className={classes.linksBox}>
          <div className={classes.leftLink}>
            <div>About Us</div>
            <div>Contact</div>
            <div>Terms & Conditions</div>
          </div>
          <div className={classes.rightLink}>
            <div className={classes.linkItem}>
              <FacebookIcon />
              <span className={classes.linkText}>Facebook</span>
            </div>
            <div className={classes.linkItem}>
              <TwitterIcon />
              <span className={classes.linkText}>Twitter</span>
            </div>
            <div className={classes.linkItem}>
              <InstagramIcon />
              <span className={classes.linkText}>Instagram</span>
            </div>
          </div>
        </div>
        <div className={classes.contactBox}>
          <div className={classes.contactItem}>497 Evergreen Rd. Roseville, CA 95673</div>
          <div className={classes.contactItem}>+44 345 678 903</div>
          <div className={classes.contactItem}>adobexd@mail.com</div>
        </div>
        <div className={classes.subscribeText}>Subscribe to our newsletter</div>
        <div className={classes.row}>
          <div className={classes.inputWrapper}>
            <InputBase placeholder={"Email Address"} className={classes.inputStyle} />
          </div>
          <ButtonBase className={classes.okBtn}>OK</ButtonBase>
        </div>
      </div>
      <div className={classes.copyRight}>© AdobeXD Kit 2017</div>
    </div>
  );
};
export default FooterM;

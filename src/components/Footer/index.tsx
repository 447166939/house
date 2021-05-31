import React from "react";
import { makeStyles } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputBase from "@material-ui/core/InputBase";
import logoSvg from '@/assets/footerLogo.svg'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "267px",
    backgroundColor: "#2699FB",
    padding: "42px 273px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    bottom: 0,
    zIndex: 30000
  },
  footerText: {},
  linksBox: {
    borderRadius: "8px",
    boxShadow: "-4px -4px 10px #64B8FF99,4px 4px 5px rgba(0,0,0,.3)",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "60px 0"
  },
  linkItem: {
    alignItems: "center",
    display: "flex",
    lineHeight: "30px",
    color: "#fff",
    fontSize: "12px"
  },
  ModuleX: {
    lineHeight: "54px"
  },
  nameText: {
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bold",
    marginLeft: theme.spacing(1)
  },
  okBtn: {
    boxShadow: "-4px -2px 4px #47AAFF,1px 1px 10px rgba(0,0,0,0.3)",
    width: "82px",
    height: "42px",
    marginLeft: '24px'
  },
  inputWrapper: {
    boxShadow: "inset 3px 3px 3px 0px rgba(0,0,0,0.2), 3px 3px 3px 0px rgba(255,255,255,0.2)",
    borderRadius: "8px",
    paddingLeft: theme.spacing(2),
    backgroundColor: "#2699FB"
  },
  inputStyle: {
    height: "41px",
    minWidth: "220px",
  },
  row:{
    display:'flex'
  }
}));
export interface ILogoIconProps {}
function LogoIcon(props: ILogoIconProps) {
  return (
    <SvgIcon component={logoSvg} viewBox="0 0 20 20">
    </SvgIcon>
  );
}
export interface IFooterProps {}
const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.linksBox}>
        <div>
          <div className={classes.ModuleX}>
            <LogoIcon />
            <span className={classes.nameText}>Module X</span>
          </div>
          <div className={classes.footerText}>© AdobeXD Kit 2017</div>
        </div>
        <div>
          <div className={classes.linkItem}>About Us</div>
          <div className={classes.linkItem}>Contact Terms</div>
          <div className={classes.linkItem}>Conditions</div>
        </div>
        <div>
          <div className={classes.linkItem}>
            <FacebookIcon />
            <span>Facebook</span>
          </div>
          <div className={classes.linkItem}>
            <TwitterIcon />
            <span>Twitter</span>
          </div>
          <div className={classes.linkItem}>
            <InstagramIcon />
            <span>Instagram</span>
          </div>
        </div>
        <div>
          <div className={classes.linkItem}>497 Evergreen Rd. Roseville, CA 95673</div>
          <div className={classes.linkItem}>+44 345 678 903</div>
          <div className={classes.linkItem}>adobexd@mail.com</div>
        </div>
        <div>
          <div className={classes.linkItem}>Subscribe to our newsletter</div>
          <div className={classes.row}>
          <div className={classes.inputWrapper}>
            <InputBase className={classes.inputStyle} />
          </div>
          <ButtonBase className={classes.okBtn}>OK</ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

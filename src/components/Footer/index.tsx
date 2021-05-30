import React from "react";
import { makeStyles } from "@material-ui/core";
import Image from "next/dist/client/image";
import Toolbar from "@material-ui/core/Toolbar";
import SvgIcon from "@material-ui/core/SvgIcon";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "267px",
    backgroundColor: "#2699FB",
    padding: "42px 273px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    zIndex: 30000
  },
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
    height: "42px"
  },
  inputWrapper: {
    boxShadow: "inset 3px 3px 3px 0px rgba(0,0,0,0.2), 3px 3px 3px 0px rgba(255,255,255,0.2)",
    borderRadius: "8px",
    paddingLeft: theme.spacing(2),
    backgroundColor: "#2699FB"
  },
  inputStyle: {
    height: "41px",
    minWidth: "220px"
  }
}));
function LogoIcon(props) {
  return (
    <SvgIcon viewBox="0 0 20 20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.541"
        height="20.541"
        viewBox="0 0 20.541 20.541">
        <g id="组_2568" data-name="组 2568" transform="translate(0)">
          <path
            id="路径_1646"
            data-name="路径 1646"
            d="M306.943,241.608a4.09,4.09,0,0,1-3.136,1.2h-4a2.738,2.738,0,0,0-2.739,2.739v4a2.738,2.738,0,0,0,2.738,2.738h4a2.738,2.738,0,0,0,2.738-2.739v-4a4.109,4.109,0,0,1,4.333-4.334h4a2.737,2.737,0,0,0,2.738-2.738v-4a2.738,2.738,0,0,0-2.738-2.738h-4a2.738,2.738,0,0,0-2.739,2.738v4A4.089,4.089,0,0,1,306.943,241.608Z"
            transform="translate(-297.071 -231.737)"
            fill="#fff"
          />
          <path
            id="路径_1648"
            data-name="路径 1648"
            d="M4.778,0h0a4.778,4.778,0,1,1,0,9.557h0A4.778,4.778,0,0,1,4.778,0Z"
            transform="translate(0 0)"
            fill="#fff"
          />
          <path
            id="路径_1647"
            data-name="路径 1647"
            d="M4.956,2.781a1.473,1.473,0,0,1,2.559,0l3.321,5.824a1.473,1.473,0,0,1-1.28,2.2H2.915a1.473,1.473,0,0,1-1.28-2.2Z"
            transform="translate(9.51 9.734)"
            fill="#fff"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
const Footer = (props) => {
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
          <div className={classes.inputWrapper}>
            <InputBase className={classes.inputStyle} />
          </div>
        </div>
        <div style={{ alignSelf: "center" }}>
          <ButtonBase className={classes.okBtn}>OK</ButtonBase>
        </div>
      </div>
    </div>
  );
};
export default Footer;

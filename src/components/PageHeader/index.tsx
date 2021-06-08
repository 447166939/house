import React from "react";
import { makeStyles } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Card from "../Card";
import { useRouter } from "next/router";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "71px",
    marginTop: "20px"
  },
  headerBtn: {
    width: "320px",
    backgroundColor: "#f7f8fa",
    height: "100%",
    borderRadius: "10px",
    color: "#349FFB",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "50px",
    marginRight: "20px"
  },
  breadCrumbWrapper: {
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "36px",
    opacity: 0.65,
    borderRadius: "10px",
    backgroundColor: "#fff"
  },
  breadCrumb: {
    fontSize: "16px",
    lineHeight: "50px",
    color: "#000"
  }
}));
export interface IPageHeaderProps {}
const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  const classes = useStyles();
  const { pathname } = useRouter();
  console.log(pathname);
  let pathArr = pathname.split("/");
  let path2, path1;
  if (pathArr[1] == "services") {
    path2 = "Services";
  }
  if (pathArr[2] == "ITSupport") {
    path1 = "IT Support Services";
  } else if (pathArr[2] == "WebDesignService") {
    path1 = "UI/UX(Web Design Services)";
  }

  return (
    <div className={classes.root}>
      <ButtonBase className={classes.headerBtn}>SOFTWARE DEVELOPMENT</ButtonBase>
      <Card customStyles={classes.breadCrumbWrapper} blurActive={false}>
        <Breadcrumbs className={classes.breadCrumb}>
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href={"#"}>
            {path2}
          </Link>
          <Typography color="inherit">{path1}</Typography>
        </Breadcrumbs>
      </Card>
    </div>
  );
};
export default PageHeader;

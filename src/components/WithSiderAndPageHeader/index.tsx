import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import Layout from "@/components/Layout";
import Sider from "@/components/Sider";
import PageHeader from "@/components/PageHeader";
export interface IWithSiderAndPageHeaderProps {
  children: JSX.Element | JSX.Element[];
}
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: "276px",
      paddingRight: "276px",
      alignSelf: "stretch"
    },
    container: {
      display: "flex",
      marginTop: "20px"
    },
    siderWrapper: {
      width: "320px",
      marginRight: "20px"
    },
    content: {
      flex: 1
    }
  })
);
const WithSiderAndPageHeader: React.FC<IWithSiderAndPageHeaderProps> = (
  props: IWithSiderAndPageHeaderProps
) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Layout>
      <div className={classes.root}>
        <PageHeader />
        <div className={classes.container}>
          <div className={classes.siderWrapper}>
            <Sider />
          </div>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </Layout>
  );
};
export default WithSiderAndPageHeader;

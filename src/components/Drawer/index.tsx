import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
const useStyles = makeStyles((themme) => ({
  root: {
    position: "relative",
    width: "100%"
  },
  drawer: {
    position: "fixed",
    left: 0,
    right: 0,
    zIndex: 10000
  }
}));
export interface IDrawerProps {
  children: JSX.Element | JSX.Element[];
  visible: boolean;
  cb: () => void;
}
const Drawer: React.FC<IDrawerProps> = (props: IDrawerProps) => {
  const { children, visible, cb = function () {} } = props;
  const classes = useStyles();
  useEffect(() => {
    console.log("aaaa");
    cb();
  }, [visible]);
  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <Collapse in={visible}>{children}</Collapse>
      </div>
    </div>
  );
};
export default Drawer;

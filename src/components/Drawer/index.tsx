import React, { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import { useDispatch } from "react-redux";
import actions from "@/store/modules/global/action";
const { setCloseAllMenu } = actions;
const useStyles = makeStyles((themme) => ({
  root: {
    position: "relative",
    width: "100%"
  },
  drawer: {
    position: "fixed",
    left: 0,
    right: 0,
    zIndex: 40000,
    overflow: "hidden"
  },
  mask: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    opacity: 0,
    zIndex: 39000
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
  const dispatch = useDispatch();
  useEffect(() => {
    if (visible) cb();
  }, [visible]);
  const handleClick = useCallback(() => {
    dispatch(setCloseAllMenu());
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <Collapse in={visible}>{children}</Collapse>
      </div>
      {visible && <div onClick={handleClick} className={classes.mask}></div>}
    </div>
  );
};
export default Drawer;

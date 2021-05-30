import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  sider: {
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#f7f8fa",
    padding: "25px 21px 55px 21px"
  },
  serviceBtn: {
    color: "#2699FB",
    width: "278px",
    height: "44px",
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "25px"
  },
  active: {
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
  nested: {
    paddingLeft: theme.spacing(4)
  },
  childNested: {
    paddingLeft: theme.spacing(8)
  }
}));
const Sider = (props) => {
  const classes = useStyles();
  const [idx, setIdx] = useState();
  const [plOpen, setPlOpen] = useState(false);
  const handleClick = useCallback((idx) => {
    setIdx(idx);
  }, []);
  const handleClickPl = useCallback(() => {
    setPlOpen((pre) => !pre);
  }, []);
  return (
    <List component={"nav"} className={classes.sider}>
      <ListItem
        onClick={handleClick.bind(null, 0)}
        className={clsx(classes.serviceBtn, { [classes.active]: idx == 0 })}
        button>
        Services
      </ListItem>
      <ListItem
        button
        onClick={handleClick.bind(null, 1)}
        className={clsx(classes.serviceBtn, { [classes.active]: idx == 1 })}>
        Technologies
      </ListItem>
      <Collapse in={idx == 1} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem className={classes.nested} button onClick={handleClickPl}>
            <ListItemText>Programming Languages</ListItemText>
            {plOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={plOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem className={classes.childNested}>Java</ListItem>
              <ListItem className={classes.childNested}>Python</ListItem>
              <ListItem className={classes.childNested}>Golang</ListItem>
              <ListItem className={classes.childNested}>C++</ListItem>
              <ListItem className={classes.childNested}>Javascript</ListItem>
              <ListItem className={classes.childNested}>NodeJs</ListItem>
              <ListItem className={classes.childNested}>Php</ListItem>
            </List>
          </Collapse>
          <ListItem className={classes.nested}>Advanced Technologies</ListItem>
          <ListItem className={classes.nested}>Cloud Technologies</ListItem>
        </List>
      </Collapse>
      <ListItem
        button
        onClick={handleClick.bind(null, 2)}
        className={clsx(classes.serviceBtn, { [classes.active]: idx == 2 })}>
        Solutions
      </ListItem>
      <ListItem
        button
        onClick={handleClick.bind(null, 3)}
        className={clsx(classes.serviceBtn, { [classes.active]: idx == 3 })}>
        Blog & News
      </ListItem>
    </List>
  );
};
export default Sider;

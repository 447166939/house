import React, { useState, useCallback } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import anime from "animejs";
import {px2vw, px2vwMo} from "@/utils/pxtovw";

const useStyles = makeStyles((theme) => ({
  swContainer: {
    isolation: "isolate",
    width: "73px",
    height: "36px",
    color: "#2699FB",
    position: "relative",
    background: "inherit",
    outline: "none",
    border: "none",
    boxShadow:
      "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset",
    borderRadius: "18px",
    textTransform: "uppercase",
    display: "flex",
    [theme.breakpoints.down('sm')]:{
    width:`${px2vwMo(73)}`,
      height:`${px2vwMo(37)}`,
    },
    [theme.breakpoints.down('xs')]:{
      width:`${px2vwMo(120)}`,
      height:`${px2vwMo(57)}`,
    },
    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      boxShadow: "2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset",
      borderRadius: "18px",
      [theme.breakpoints.down('sm')]:{
        boxShadow:`${px2vwMo(2)} ${px2vwMo(2)} ${px2vwMo(2)} 0 #DFE4EA inset,-${px2vwMo(2)} -${px2vwMo(2)} ${px2vwMo(2)} 0 #fff inset `,

      }
    }
  },
  thumb: {
    width: "39px",
    height: "39px",
    borderRadius: "39px",
    lineHeight: "40px",
    color: "#2699FB",
    background: "#fff",
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    cursor: "pointer",
    textAlign: "center",
    zIndex: 10000,
    Left: 0,
    transition: "transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35)",
    boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
    [theme.breakpoints.down('sm')]:{
    }
  },
  off: {
    left: 0
  },
  on: {
    right: 0
  }
}));
export interface IMySwitchProps {}
const MySwitch: React.FC<IMySwitchProps> = (props) => {
  const classes = useStyles();
  const [on, setOn] = useState(false);
  const handleClick = useCallback(() => {
    let tl = anime.timeline({
      easing: "spring(1, 80, 9, 2)",
      duration: 180
    });
    if (!on) {
      tl.add({
        targets: ["#switch"],
        left: "50%",
        duration: 180
      });
    } else {
      tl.add({
        targets: ["#switch"],
        left: "0%",
        duration: 190
      });
    }
    setOn(!on);
  }, [on]);
  return (
    <div onClick={handleClick} className={clsx(classes.swContainer)}>
      <div id={"switch"} className={clsx(classes.thumb)}>
        {on ? "中" : "EN"}
      </div>
    </div>
  );
};
export default MySwitch;

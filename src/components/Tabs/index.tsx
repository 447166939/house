import React, { Fragment, useState, useCallback } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import actions from "@/store/modules/global/action";
import { RootState } from "@/store/index";
const {
  setServiceMenuVisible,
  setTechnologiesMenuVisible,
  setSolutionsMenuVisible,
  setBlogAndNewsMenuVisible
} = actions;
const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#2699FB",
    position: "relative",
    background: "inherit",
    outline: "none",
    border: "none",
    boxShadow: '-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA',
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    height: "40px",
    padding: theme.spacing(2),
    marginRight: "32px",
    // '&:after': {
    //   content: "''",
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   width: '200%',
    //   height: '100%',
    //   opacity: 0,
    //   transform: 'translateX(-100%)',
    //   backgroundColor: 'rgba(255, 255, 255, 0.13)',
    //   background: 'linear-gradient(to right,rgba(255, 255, 255, 0.13) 0%,rgba(255, 255, 255, 0.13) 77%,rgba(255, 255, 255, 0.5) 92%,rgba(255, 255, 255, 0.3) 100%)',
    // },
    // '&:hover:after': {
    //     opacity: 1,
    //     top: 0,
    //     left: 0,
    //     transform: 'translateX(0)',
    //     transitionProperty: 'transform, opacity',
    //     transitionDuration: '0.7s, 0.15s',
    //     transitionTimingFunction: 'ease'
    // },
    // '&:active:after': {
    //   opacity: 0
    // }
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
      // boxShadow: "2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset",
      boxShadow: "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset",
      borderRadius: "8px"
    }
  }
}));
export interface ITabsProps {
  menus: string[];
  onChange: (index: number) => void;
}
const Tabs: React.FC<ITabsProps> = (props: ITabsProps) => {
  const { onChange = function () {}, menus = []} = props;
  // const { onChange, menus } = props;
  const classes = useStyles();
  const [idx, setIdx] = useState();
  const dispatch = useDispatch();
  const {
    serviceMenuVisible,
    technologiesMenuVisible,
    solutionsMenuVisible,
    blogAndNewsMenuVisible
  } = useSelector((state: RootState) => state.global);
  const handleClick = useCallback(
    (index) => {
      setIdx(index);
      if (index == 0) {
        dispatch(setServiceMenuVisible(!serviceMenuVisible));
      } else if (index == 1) {
        dispatch(setTechnologiesMenuVisible(!technologiesMenuVisible));
      } else if (index == 2) {
        dispatch(setSolutionsMenuVisible(!solutionsMenuVisible));
      } else if (index == 3) {
        dispatch(setBlogAndNewsMenuVisible(!blogAndNewsMenuVisible));
      }
      onChange(index);
    },
    [idx, serviceMenuVisible, technologiesMenuVisible, solutionsMenuVisible, blogAndNewsMenuVisible]
  );
  
  return (
    <>
      {menus.map((item, index) => {
        return (
          <ButtonBase
            key={index}
            onClick={handleClick.bind(null, index)}
            className={clsx(classes.btn, {
              [classes.active]: [
                serviceMenuVisible,
                technologiesMenuVisible,
                solutionsMenuVisible,
                blogAndNewsMenuVisible
              ][index]
            })}
            disableRipple>
            {item}
          </ButtonBase>
        );
      })}
    </>
  );
};
export default Tabs;

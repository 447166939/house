import React, { Fragment, useState, useCallback } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#2699FB",
    position: "relative",
    background: "inherit",
    outline: "none",
    border: "none",
    boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    height: "40px",
    padding: theme.spacing(2),
    "&:active,&:focus": {
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
    }
  }
}));
export interface IButtonProps {
  children: JSX.Element | JSX.Element[];
  className: string;
  onClick?: () => void;
}
const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { children, className, onClick = function () {} } = props;
  const classes = useStyles();
  const handleClick = useCallback(() => {
    onClick();
  }, []);
  return (
    <ButtonBase onClick={handleClick} className={clsx(classes.btn, className)} disableRipple>
      {children}
    </ButtonBase>
  );
};
export default Button;

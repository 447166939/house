import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backdropFilter: "blur(23px)",
    background: "rgba(247, 248, 250, .3)",
    borderRadius: "3px"
  }
}));
export interface ICardProps {
  className: string;
  children: JSX.Element | JSX.Element[];
}
const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { className, children } = props;
  const classes = useStyles();
  return <div className={clsx(classes.root, className)}>{children}</div>;
};
export default Card;

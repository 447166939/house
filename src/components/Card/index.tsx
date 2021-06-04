import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import useGlobalStyles from "../../theme/globalStyles/globalStyles";

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
  // blurActive: boolean;
  // width: number;
  // height: number;
  children: JSX.Element | JSX.Element[];
}
const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { className, children } = props;
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  return <div className={clsx(classes.root, className)}>{children}</div>;
};
export default Card;

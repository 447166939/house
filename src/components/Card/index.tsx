import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import useGlobalStyles from "../../theme/globalStyles/globalStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    borderRadius: "3px"
  }
}));
export interface ICardProps {
  customStyles: string;
  blurActive: boolean;
  children: JSX.Element | JSX.Element[];
}
const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { customStyles, blurActive, children } = props;
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  return (
    <div
      className={clsx(classes.root, customStyles, {
        [globalClasses.cardBlurBackground]: blurActive
      }, globalClasses.cardGlassAfter, globalClasses.cardGlassHoverAfter)}>
      {children}
    </div>
  );
};
export default Card;

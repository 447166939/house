import React from "react";
import Link from "@/components/Link";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import actions from "@/store/modules/global/action";
const { addCount } = actions;
export interface IHomeProps {}
const index: React.FC<IHomeProps> = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addCount(3));
  };
  return (
    <div className={"test"}>
      hello world
      <Button variant="contained" component={Link} noLinkStyle href="/test">
        Go to the test page
      </Button>
      <div
        style={{ width: "300px", height: "80px", backgroundColor: "green" }}
        onClick={handleClick}></div>
    </div>
  );
};
export default index;

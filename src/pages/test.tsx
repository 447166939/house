import React from "react";
import { useSelector } from "react-redux";
import Link from "@/components/Link";
export interface ITestProps {}
const index: React.FC<ITestProps> = (props) => {
  const { count } = useSelector((state: any) => state.global);
  return (
    <div className={"test"}>
      {count}
      <Link href="/" color="secondary">
        Go to the home page
      </Link>
    </div>
  );
};
export default index;

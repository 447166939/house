import { css } from "@emotion/react";
import { t20 } from "@/style/baseStyle";

export const container = css`
  width: 25.39rem;
  background-color: #1e1f22;
  display: flex;
  flex-direction: column;
`;
export const tab = css`
  display: flex;
  align-items: center;
  margin-left: 0.97rem;
  margin-right: 0.97rem;
  height: 2.5rem;
  border-bottom: 1px solid #313338;
`;
export const tabItem = ({ isActive }: any) => css`
  color: ${isActive ? "#fff" : "#80848E"};
  cursor: pointer;
  height: 100%;
  align-items: center;
  display: flex;
  ${t20};
  margin-right: 2.09rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    background-color: #00e0fd;
    width: 2.83rem;
    height: 0.14rem;
    left: 50%;
    transform: translateX(-50%);
    display: ${isActive ? "block" : "none"};
  }
`;

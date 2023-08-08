import { css } from "@emotion/react";
import { t20 } from "@/style/baseStyle";

export const container = css`
  width: 699px;
  background-color: #1e1f22;
  display: flex;
  flex-direction: column;
`;
export const tab = css`
  display: flex;
  align-items: center;
  margin-left: 26.95px;
  margin-right: 26.95px;
  height: 69.65px;
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
    bottom: 2px;
    background-color: #00e0fd;
    width: auto;
    height: 4px;
    left: 0;
    right: 0;
    display: ${isActive ? "block" : "none"};
  }
`;

import { css } from "@emotion/react";
import { t20 } from "@/style/baseStyle";

export const container = css`
  background-color: #111113;
  height: 69px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-left: 48px;
`;
export const tabItem = ({ isActive }: any) => css`
  position: relative;
  ${t20};
  color: ${isActive ? "#fff" : "#80848E"};
  margin-right: 27px;
  &:after {
    position: absolute;
    content: "";
    background-color: #00e0fd;
    width: 100px;
    height: 4px;
    left: 50%;
    transform: translateX(-50%);
    display: ${isActive ? "block" : "none"};
  }
`;

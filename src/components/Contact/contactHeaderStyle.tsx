import { css } from "@emotion/react";
import { t20 } from "@/style/baseStyle";

export const container = css`
  background-color: #111113;
  flex-grow: 0;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 44px 0 19px 30px;
  box-sizing: border-box;
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
    width: auto;
    height: 4px;
    left: 0;
    right: 0;
    bottom: -18px;
    display: ${isActive ? "block" : "none"};
  }
`;

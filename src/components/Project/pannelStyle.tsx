import { css } from "@emotion/react";
import { t20 } from "@/style/baseStyle";

export const container = css`
  background-color: #1e1f22;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  min-width: 0;
`;
export const resizer = css`
  position: absolute;
  cursor: col-resize;
  left: -5px;
  height: 100%;
  width: 10px;
  z-index: 20000;
`;
export const pannelTabs = css`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 20.9px;
  height: 69px;
  position: relative;
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    background-color: #313338;
    left: 20.9px;
    right: 20.9px;
  }
`;
export const pannelTabItem = ({ isActive }: any) => css`
  color: ${isActive ? "#fff" : "#686B74"};
  ${t20};
  cursor: pointer;
  margin-right: 30.35px;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  &:last-child {
    margin-right: 0;
  }
`;
export const pannelTabItemText = ({ isActive }: any) => css`
  color: ${isActive ? "#fff" : "#686B74"};
  ${t20};
`;
export const tabItemBorder = ({ isActive }: any) => css`
  display: ${isActive ? "block" : "none"};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #00e0fd;
  height: 5px;
  width: 138px;
`;

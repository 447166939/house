import { css } from "@emotion/react";
import { grey, h16, h18, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  width: 419px;
  background-color: #1e1f22;
  min-height: 100%;
  display: flex;
  flex-direction: column;
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

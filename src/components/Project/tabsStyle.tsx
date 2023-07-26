import { css } from "@emotion/react";
import { t20 } from "@/style/baseStyle";

export const container = css`
  display: flex;
  align-items: center;
  background-color: #111113;
  height: 71.86px;
  padding-left: 43.9px;
  position: relative;
  overflow: hidden;
`;
export const boderBottom = css`
  position: absolute;
  bottom: 0;
  width: auto;
  height: 1px;
  background-color: #313338;
  left: 0;
  right: 0;
  margin: auto 43.9px;
`;
export const tabItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 2.29rem;
  height: 100%;
  cursor: pointer;
`;
export const tabItemText = (props: any) => css`
  ${t20};
  color: ${props.isActive ? "#fff" : "#80848E"};
  margin-left: 5px;
`;
export const tabSplit = ({ isActive }: any) => css`
  display: ${isActive ? "block" : "none"};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #00e0fd;
  height: 4px;
  width: 166px;
`;

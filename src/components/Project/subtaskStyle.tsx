import { css } from "@emotion/react";
import { grey, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  background-color: #111113;
  width: 100%;
  padding-bottom: 40px;
  position: relative;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
`;
export const resizer = css`
  position: absolute;
  cursor: row-resize;
  bottom: 5px;
  width: 100%;
  height: 10px;
  z-index: 20000;
`;
export const taskHead = css`
  display: flex;
  margin-top: 29.94px;
  margin-left: 47.04px;
`;
export const taskList = css`
  margin-top: 27.81px;
  margin-left: 89.31px;
`;
export const taskTitle = css`
  ${t20};
  ${white};
`;
export const title = css`
  ${t20};
  ${white};
`;

export const text = css`
  margin-left: 11.39px;
  ${t20};
  ${white};
`;
export const listText = css`
  ${t18};
  ${grey};
  margin-left: 16.14px;
`;
export const listItem = css`
  display: flex;
  align-items: center;
`;
export const checkIcon = css`
  width: 22px;
  height: auto;
`;

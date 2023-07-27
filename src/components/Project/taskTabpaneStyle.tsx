import { css } from "@emotion/react";
import { h16, t16, t18, t20, white } from "@/style/baseStyle";
export const container = css`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const taskBox = css`
  background-color: #1a1a1d;
  width: auto;
  height: 115px;
  margin-left: 21px;
  margin-right: 21px;
  margin-top: 26px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const taskTitle = css`
  ${t20};
  ${white};
`;
export const taskBottom = css`
  display: flex;
  align-items: center;
`;
export const taskNum = css`
  background-color: #23a55a;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  ${h16};
  color: #222226;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const taskText = css`
  color: #23a55a;
  ${t18};
  margin-left: 5px;
`;
export const taskDetail = css`
  margin-top: 28px;
  padding-left: 21px;
  padding-right: 21px;
`;
export const taskHead = css`
  display: flex;
  align-items: center;
`;
export const taskHeadTitle = css`
  ${t18};
  ${white};
`;
export const addBtn = css`
  margin-left: auto;
`;
export const addIcon = css`
  width: 12px;
  height: auto;
`;
export const taskItem = css`
  display: flex;
  align-items: center;
`;
export const taskListItemText = ({ isChecked, isGoing }: any) => css`
  ${t18};
  color: ${isGoing ? "#23A55A" : isChecked ? "#fff" : "#80848E"};
`;

export const taskCheckbox = (props: any) => css`
  margin-left: auto;
  color: ${props.isGoing ? "#23A55A" : "#80848e"};
`;
export const menuBtn = css`
  position: relative;
`;
export const elliseIcon = css`
  width: 22px;
  height: auto;
`;
export const menus = ({ isActive }: any) => css`
  display: ${isActive ? "flex" : "none"};
  position: absolute;
  width: 85px;
  height: 147px;
  border-radius: 10px;
  background-color: #313136;
  top: 100%;
  right: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const menuItem = css`
  ${t16};
  ${white};
  line-height: 2.45;
`;

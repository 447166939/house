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
  height: 4.18rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  margin-top: 0.96rem;
  border-radius: 0.36rem;
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
  width: 0.81rem;
  height: 0.81rem;
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
  margin-left: 0.18rem;
`;
export const taskDetail = css`
  margin-top: 1.02rem;
  padding-left: 0.75rem;
  padding-right: 0.78rem;
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
  width: 0.42rem;
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
  width: 0.79rem;
  height: auto;
`;
export const menus = ({ isActive }: any) => css`
  display: ${isActive ? "flex" : "none"};
  position: absolute;
  width: 3.08rem;
  height: 5.34rem;
  border-radius: 0.36rem;
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
  line-height: 1.42rem;
`;

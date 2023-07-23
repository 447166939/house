import { css } from "@emotion/react";
import { grey, h16, h18, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  width: 15.23rem;
  background-color: #1e1f22;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
export const pannelTabs = css`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 0.72rem;
  padding-right: 1.01rem;
  height: 2.61rem;
  position: relative;
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    background-color: #313338;
    left: 0.76rem;
    right: 1.01rem;
    width: 9.84rem;
  }
`;
export const pannelTabItem = ({ isActive }: any) => css`
  color: ${isActive ? "#fff" : "#686B74"};
  ${t20};
  cursor: pointer;
  margin-right: 1.09rem;
  position: relative;
  height: 2.61rem;
  display: flex;
  align-items: center;
  user-select: none;
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
  height: 0.15rem;
  width: 3.56rem;
`;
export const taskTitle = css`
  ${t20};
  ${white};
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
export const taskHead = css`
  display: flex;
  align-items: center;
`;
export const taskHeadTitle = css`
  ${t18};
  ${white};
`;
export const taskListItemText = ({ isChecked, isGoing }: any) => css`
  ${t18};
  color: ${isGoing ? "#23A55A" : isChecked ? "#fff" : "#80848E"};
`;
export const addIcon = css`
  width: 0.42rem;
  height: auto;
`;
export const addBtn = css`
  margin-left: auto;
`;
export const taskDetail = css`
  margin-top: 1.02rem;
  padding-left: 0.75rem;
  padding-right: 0.78rem;
`;
export const taskCheckbox = (props: any) => css`
  margin-left: auto;
  color: ${props.isGoing ? "#23A55A" : "#80848e"};
`;
export const taskItem = css`
  display: flex;
  align-items: center;
`;
export const elliseIcon = css`
  width: 0.79rem;
  height: auto;
`;
export const menuBtn = css`
  position: relative;
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

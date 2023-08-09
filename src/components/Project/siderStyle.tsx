import { css } from "@emotion/react";
import { grey, t14, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  display: flex;
  background-color: #222226;
  position: relative;
  user-select: none;
  min-width: 0;
  overflow: hidden;
  max-height: 100%;
  flex-grow: 0;
`;
export const resizer = css`
  position: absolute;
  cursor: col-resize;
  right: -5px;
  height: 100%;
  width: 10px;
  z-index: 20000;
`;
export const toolbar = css`
  display: flex;
  flex-basis: 82.785px;
  height: 100%;
  background-color: #1e1f22;
  align-items: center;
  padding-top: 25.08px;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`;
export const projectContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  align-items: center;
`;
export const projectBadge = css`
  cursor: pointer;
`;
export const projectInfo = ({ top, left, visible }: any) => css`
  position: fixed;
  background-color: #313136;
  width: 227px;
  border-radius: 10px;
  top: ${top};
  left: ${left};
  display: ${visible ? "flex" : "none"};
  padding: 13.5px 13.5px 22.1px 13.5px;
  flex-direction: column;
  z-index: 20000;
`;
export const projectInfoName = css`
  margin-left: 11.1px;
  ${t16};
  ${white};
`;
export const projectInfoIcon = css`
  width: 28px;
  height: auto;
`;
export const projectInfoContent = css`
  ${t14};
  ${white};
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 22px;
`;
export const projectInfoTaskItem = css`
  display: flex;
  align-items: center;
  margin-top: 22px;
`;
export const projectInfoDelBtn = css`
  width: 68px;
  height: 30px;
  border-radius: 4px;
  ${t14};
  ${white};
  margin: 14.96px auto 0;
`;
export const projectInfoTaskNum = css`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #23a55a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222226;
  ${t16};
`;

export const projectInfoTaskText = css`
  ${t18};
  color: #23a55a;
  margin-left: 5px;
`;

export const projectInfoHead = css`
  display: flex;
  align-items: center;
`;
export const avatar = css`
  margin-bottom: 20px;
  background-color: #313338;
  width: 53px;
  height: 53px;
  ${t20};
  ${white};
`;
export const switchStyle = css`
  margin-top: auto;
  &.Mui-checked {
    color: #00e0fd;
  }
  "& .mui-checked+.muiswitch-track": {
    background-color: "#00E1FE";
  }
`;
export const switchText = css`
  ${t16};
  ${grey};
  margin-bottom: 27.62px;
`;
export const channelWrapper = css`
  background-color: #222226;
  padding-left: 22.21px;
  padding-right: 21.1px;
  flex-basis: 276px;
  min-width: 0;
  display:flex;
  flex-direction:column;
`;
export const projectText = css`
  ${t20};
  ${white};
  margin-top: 20px;
`;
export const projectName = css`
  display: flex;
  align-items: center;
  margin-top: 23.5px;
`;
export const homeIcon = css`
  width: 28px;
  height: auto;
  flex-shrink: 0;
`;
export const projectNameText = css`
  ${t16};
  ${white};
  margin-left: 8.51px;
`;
export const projectContent = css`
  ${t18};
  ${grey};
  white-space: pre-wrap;
  width: 233px;
  margin-top: 34px;
  margin-bottom: 28px;
`;
export const channelBox=css`
flex-basic:132px;
overflow-x:hidden;
overflow-y:auto;
`
export const channelTitle = css`
  ${t20};
  ${white};
  margin-top: 9.52px;
  margin-bottom: 12.7px;
  position: relative;
`;
export const addChannelBtn = css`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
export const addIcon = css`
  width: 12px;
  height: auto;
`;
export const channelIcon = css`
  width: 20px;
  height: 20px;
`;
export const channelItem = (props: any) => css`
  background-color: ${props.isActive ? "#3A3A3F" : "transparent"};
  color: ${props.isActive ? "#fff" : "#80848E"};
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding-left: 11.77px;
  height: 36px;
  cursor: pointer;
  &:hover {
    background-color: #3a3a3f;
    color: #fff;
  }
`;
export const channelText = (props: any) => css`
  color: ${props.isActive ? "#fff" : "#80848E"};
  font-size: 18px;
  margin-left: 6.04px;
`;
export const topSplitline = css`
  width: 232px;
  height: 1px;
  background-color: #313338;
`;
export const bottomSplitline = css`
  width: 232px;
  height: 1px;
  background-color: #313338;
  margin-top: 31.99px;
`;
export const projectTitle = css`
  ${t20};
  ${white};
  margin-top: 31.99px;
  margin-bottom: 12.7px;
  position: relative;
`;
export const addProjectBtn = css`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
export const processBox=css`
margin-bottom:2px;
flex-basis:278px;
overflow-x:hidden;
overflow-y:auto;
`
export const manName = (props: any) => css`
  background-color: ${props.isGoing ? "#23A55A" : props.isActive ? "#fff" : "#80848E"};
  color: #222226;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 16px;
`;
export const manItem = (props: any) => css`
  background-color: ${props.isActive ? "#3A3A3F" : "transparent"};
  color: ${props.isGoing ? "#23A55A" : props.isActive ? "#fff" : "#80848E"};
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding-left: 11.77px;
  height: 36px;
  cursor: pointer;
  &:hover {
    background-color: #3a3a3f;
    color: #fff;
    & > [data-hover] {
      background-color: #fff;
    }
  }
`;

export const manTitle = (props: any) => css`
  ${t18};
  margin-left: 5px;
  flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

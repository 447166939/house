import { css } from "@emotion/react";
import { grey, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  display: flex;
  background-color: #222226;
  position: relative;
  user-select: none;
  min-width: 0;
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
  flex-direction: column;
  flex-basis: 3.05rem;
  height: 100%;
  background-color: #1e1f22;
  align-items: center;
  padding-top: 0.73rem;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`;
export const avatar = css`
  margin-bottom: 0.73rem;
  background-color: #313338;
  width: 1.93rem;
  height: 1.93rem;
  ${t20};
  ${white};
`;
export const plusIcon = css`
  width: 0.7rem;
  height: auto;
`;
export const plusFab = css`
  width: 1.93rem;
  height: 1.93rem;
  background-color: #313338;
  &:hover {
    background-color: #313338;
  }
`;
export const switchStyle = css`
  margin-top: auto;
  &.Mui-checked {
    color: #00E0FD;
  }
  '& .Mui-checked+.MuiSwitch-track':{
    background-color:'#00E1FE';
  }
`;
export const switchText = css`
  ${t16};
  ${grey};
  margin-top: 0.24rem;
`;
export const menuIcon = css`
  width: 0.84rem;
  height: auto;
`;
export const menuBtn = css`
  margin-top: 0.88rem;
  margin-bottom: 0.73rem;
  width: 0.84rem;
  height: 0.44rem;
`;
export const channelWrapper = css`
  background-color: #222226;
  padding-left: 0.43rem;
  padding-right: 0.51rem;
  flex-basis: 10rem;
  min-width: 0;
`;
export const projectText = css`
  ${t20};
  ${white};
  margin-top: 0.73rem;
`;
export const projectName = css`
  display: flex;
  align-items: center;
  margin-top: 0.62rem;
`;
export const homeIcon = css`
  width: 1.02rem;
  height: auto;
  flex-shrink: 0;
`;
export const projectNameText = css`
  ${t16};
  ${white};
  margin-left: 0.25rem;
`;
export const projectContent = css`
  ${t18};
  ${grey};
  white-space: pre-wrap;
  width: 7.96rem;
  margin-top: 0.35rem;
  margin-bottom: 0.69rem;
`;
export const channelTitle = css`
  ${t20};
  ${white};
  margin-top: 1.17rem;
  margin-bottom: 0.36rem;
`;
export const channelIcon = css`
  width: 0.73rem;
  height: 0.73rem;
`;
export const channelItem = (props: any) => css`
  background-color: ${props.isActive ? "#3A3A3F" : "transparent"};
  color: ${props.isActive ? "#fff" : "#80848E"};
  display: flex;
  align-items: center;
  border-radius: 0.22rem;
  padding-left: 0.4rem;
  height: 1.31rem;
  cursor: pointer;
  &:hover {
    background-color: #3a3a3f;
    color: #fff;
  }
`;
export const channelText = (props: any) => css`
  color: ${props.isActive ? "#fff" : "#80848E"};
  font-size: 0.65rem;
  margin-left: 0.22rem;
`;
export const splitline = css`
  width: 8.43rem;
  height: 0.037rem;
  background-color: #313338;
`;
export const projectTitle = css`
  ${t20};
  ${white};
  margin-top: 1.16rem;
  margin-bottom: 0.36rem;
`;
export const manName = (props: any) => css`
  background-color: ${props.isGoing ? "#23A55A" : props.isActive ? "#fff" : "#80848E"};
  color: #222226;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  font-size: 16px;
`;
export const manItem = (props: any) => css`
  background-color: ${props.isActive ? "#3A3A3F" : "transparent"};
  color: ${props.isGoing ? "#23A55A" : props.isActive ? "#fff" : "#80848E"};
  display: flex;
  align-items: center;
  border-radius: 0.22rem;
  padding-left: 0.4rem;
  height: 1.31rem;
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
  font-size: 0.66rem;
  margin-left: 0.4rem;
`;

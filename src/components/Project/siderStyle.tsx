import { css } from "@emotion/react";
import { grey, t16, t18, t20, white } from "@/style/baseStyle";

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
  flex-direction: column;
  flex-basis: 82.785px;
  height: 100%;
  background-color: #1e1f22;
  align-items: center;
  padding-top: 25.08px;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
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
export const channelTitle = css`
  ${t20};
  ${white};
  margin-top: 9.52px;
  margin-bottom: 20px;
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
export const splitline = css`
  width: 232px;
  height: 1px;
  background-color: #313338;
`;
export const projectTitle = css`
  ${t20};
  ${white};
  margin-top: 31.99px;
  margin-bottom: 20px;
`;
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
`;

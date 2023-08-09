import { css } from "@emotion/react";
import { grey, t14, t16, t20, white } from "@/style/baseStyle";

export const container = css`
  background-color: #1e1f22;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  min-height: 0;
  flex: 1;
  position: relative;
`;
export const left = css`
  flex: 1;
  padding-left: 35.86px;
  padding-right: 24.5px;
  display: flex;
  flex-direction: column;
  background-color: #1e1f22;
`;
export const right = css`
  width: 254px;
  flex-shrink: 0;
  background-color: #222226;
`;
export const chatTitle = css`
  ${t20};
  ${white};
  margin-top: 23.25px;
`;
export const chatName = css`
  ${t16};
  ${white};
`;
export const chatmsg = css`
  ${t14};
  ${grey};
`;
export const chatList = css`
  padding-top: 20px;
  flex: 1;
  box-sizing: border-box;
`;
export const listItem = css`
  display: flex;
  padding-left: 10.86px;
  padding-top: 15.05px;
  padding-bottom: 15.05px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #313136;
  }
`;
export const listItemText = css`
  margin-left: 11.69px;
`;
export const listItemTitle = css`
  ${t16};
  ${white};
`;
export const listItemContent = css`
  ${t14};
  ${grey};
`;
export const contactList = css``;
export const contactTitle = css`
  ${t20};
  ${white};
`;
export const contactItem =({isActive}:any)=> css`
  display: flex;
  align-items: center;
  padding-left: 14.4px;
  border-radius:6px;
  padding: 10px 0 10px 14.4px;
  cursor:pointer;
  background-color:${isActive ? '#3A3A3F':'transparent'};
  &:hover{
  background-color: #3A3A3F;
  }
`;
export const sendBox = css`
  background-color: #222226;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 13.87px;
  height: 60px;
`;
export const sendInput = css`
  ${t16};
  ${grey};
  padding-left: 27px;
  flex: 1;
`;
export const circlePlus = css`
  width: 18px;
  height: auto;
`;
export const faceIcon = css`
  width: 18px;
  height: auto;
`;
export const contactAddBtn = css`
  position: relative;
  margin-left: auto;
  margin-right: 5px;
  padding: 0;
`;
export const contactPlus = css`
  width: 18px;
  height: auto;
`;
export const contactHead = css`
  display: flex;
  align-items: center;
  margin-top: 25.75px;
  line-height: 1;
  margin-left: 14.4px;
`;
export const contactName = css`
  ${t16};
  ${grey};
  margin-left: 12px;
`;

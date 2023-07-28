import { css } from "@emotion/react";
import { grey, t14, t16, t20, white } from "@/style/baseStyle";

export const container = css`
  flex: 1;
  height: 100%;
  background-color: #1e1f22;
  display: flex;
  flex-direction: column;
  padding-bottom: 14px;
  box-sizing: border-box;
  overflow: hidden;
`;
export const chatHeader = css`
  display: flex;
  align-items: center;
  margin-top: 27px;
  height: 27px;
`;
export const chatHeaderText = css`
  ${t20};
  ${white};
  margin-left: 48px;
`;
export const switchText = css`
  ${t16};
  ${grey};
  margin-left: auto;
`;
export const switchstyle = css`
  margin-left: 4px;
`;
export const chatList = css`
  flex: 1;
  overflow-y: auto;
`;
export const chatItem = css`
  display: flex;
  margin-left: 37px;
  margin-right: 40px;
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 31px;
  &:hover {
    background-color: #313136;
  }
`;
export const chatItemRight = css`
  margin-left: 12px;
`;
export const chatName = css`
  ${t16};
  ${white};
`;
export const chatMsg = css`
  ${t14};
  ${grey};
`;
export const chatAvatar = css`
  margin-left: 10.86px;
  margin-top: 15px;
`;
export const chatSend = css`
  display: flex;
  align-items: center;
  background-color: #222226;
  margin-left: 24px;
  margin-right: 28px;
  border-radius: 10px;
  height: 60px;
`;
export const chatSendInput = css`
  ${t16};
  ${grey};
  flex: 1;
  padding-left: 28px;
`;
export const chatPlus = css`
  width: 18px;
  height: auto;
`;
export const faceIcon = css`
  width: 18px;
  height: auto;
`;

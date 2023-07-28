import { css } from "@emotion/react";
import { grey, t14, t16, t20, white } from "@/style/baseStyle";

export const container = css`
  flex-basis:419px;
  background-color: #222226;
  display: flex;
  flex-direction: column;
`;
export const contactName = css`
  ${t20};
  ${white};
  margin-top: 69px;
  align-self: center;
`;
export const remarkBox = css`
  background-color: #1a1a1d;
  width: 376px;
  border-radius: 10px;
  align-self: center;
  margin-top: 9.6px;
  position: relative;
  padding-top: 42px;
`;
export const remarkAvatar = css`
  position: absolute;
  left: 20px;
  top: -48.6px;
  width: 78px;
  height: 78px;
`;
export const remarkTextarea = css`
  ${t14};
  ${grey};
  width: 100%;
  padding-left: 34px;
`;
export const remarkTag = css`
  background-color: #323232;
  border-radius: 4px;
  margin-right: 7.7px;
  height:28px;
  line-height:28px;
  padding: 0 8.6px;
  ${t16};
  ${white};
`;
export const tagBox = css`
  display: flex;
  flex-wrap: wrap;
  margin-left: 29px;
  margin-bottom: 34px;
`;
export const midBox = css`
  background-color: #1a1a1d;
  width: 376px;
  border-radius: 10px;
  align-self: center;
  margin-top: 20px;
  position: relative;
  padding-top: 31px;
  padding-left: 37px;
  display: flex;
  flex-direction: column;
  padding-bottom: 26px;
`;
export const potts = css``;
export const pottsTitle = css`
  ${t16};
  ${white};
`;
export const pottsText = css`
  ${t16};
  ${grey};
`;
export const date = css`
  margin-top: 29px;
`;
export const dateTitle = css`
  ${t16};
  ${white};
`;
export const dateText = css`
  ${t16};
  ${grey};
`;
export const note = css`
  margin-top: 29px;
`;
export const noteTitle = css`
  ${t16};
  ${white};
`;
export const noteText = css`
  ${t16};
  ${grey};
`;
export const friendsBox = css`
  background-color: #1a1a1d;
  width: 376px;
  border-radius: 10px;
  align-self: center;
  margin-top: 20px;
  position: relative;
  padding-top: 16.5px;
  padding-left: 37px;
  display: flex;
  padding-bottom: 16.5px;
  align-items: center;
`;
export const friendsText = css`
  ${t16};
  ${white};
`;
export const friendRightBtn = css`
  margin-left: auto;
`;
export const serverBox = css`
  background-color: #1a1a1d;
  width: 13.6rem;
  border-radius: 0.36rem;
  align-self: center;
  margin-top: 0.72rem;
  position: relative;
  padding-top: 0.5rem;
  padding-left: 1.35rem;
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
`;
export const serverText = css`
  ${t16};
  ${white};
`;
export const rightIcon = css`
  width: 0.39rem;
  height: auto;
`;
export const rightIconBtn = css`
  margin-left: auto;
`;

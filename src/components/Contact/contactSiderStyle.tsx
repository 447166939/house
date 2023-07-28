import { css } from "@emotion/react";
import { grey, h20, t16, t20, white } from "@/style/baseStyle";

export const container = css`
  width: 359px;
  background-color: #222226;
  display: flex;
  flex-direction: column;
  height:100%;
  overflow:hidden;
  flex-shrink:0;
`;
export const contactHead = css`
  display: flex;
  align-items: center;
  padding-left: 29px;
  padding-right: 24px;
  justify-content: space-between;
  margin-top: 21px;
  height:27px;
`;
export const contactAdd = css`
  width: 21px;
  height: auto;
`;
export const contactHeadText = css`
  ${t20};
  ${white};
`;
export const searchInputWrapper = css`
  height: 40px;
  border-radius: 68px;
  background-color: #111113;
  padding: 0 0 0 18px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 29px;
`;
export const searchIcon = css`
  width: 20px;
  height: auto;
`;
export const searchInput = css`
  flex: 1;
  height: 100%;
  padding: 10px 0;
  ${t16};
  ${grey};
`;
export const contacts = css`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-basis: 577px;
  flex-grow:1;
  position: relative;
  overflow-y: auto;
  overflow-x:hidden;
  padding-bottom: 150px;
`;
export const contactItem = css`
  display: flex;
  align-items: center;
  margin-bottom: 17.2px;
`;
export const contactAvatar = css`
  margin-left: 47px;
  flex-basis: 58px;
  height: 60px;
`;
export const contactRight = css`
  margin-left: 14.8px;
`;
export const contactName = css`
  ${t20};
  ${white};
`;
export const contactTags = css`
  display: flex;
  align-items: center;
  margin-top: 5px;
  flex-wrap:wrap;
`;
export const contactTagItem = css`
  font-size: 10px;
  font-weight: 400;
  ${grey};
  padding: 0 6px 0 3px;
  border-radius: 4px;
  background-color: #323232;
  margin-right: 10.5px;
  margin-bottom:5px;
`;
export const myInfo = css`
  display: flex;
  align-items: center;
  background-color: #1a1a1d;
  width: 100%;
  height: 92px;
  box-sizing:border-box;
`;
export const myAvatar = css`
  width: 53px;
  height: 53px;
  margin-left: 28px;
`;
export const myContactName = css`
  ${h20};
  ${white};
`;
export const myStatus = css`
  ${t20};
  ${grey};
`;
export const myText = css`
  margin-left: 12px;
`;
export const mySetting = css`
  width: 18px;
  height: auto;
`;
export const mySettingBtn = css`
  margin-left: auto;
  margin-right: 16px;
`;

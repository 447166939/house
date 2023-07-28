import { css } from "@emotion/react";
import { grey, h15, t14, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #111113;
  overflow: hidden;
`;
export const centerHeader = css`
  display: flex;
  align-items: center;
  height: 44px;
`;
export const centerHeadTitle = css`
  ${t20};
  ${white};
  margin-left: 48.6px;
`;
export const searchIcon = css`
  width: 20px;
  height: auto;
`;
export const searchInputWrapper = css`
  display: flex;
  align-items: center;
  width: 415px;
  height: 44px;
  border-radius: 68px;
  margin-left: auto;
  background-color: #1e1f22;
`;
export const searchInput = css`
  flex: 1;
  height: 100%;
  ${t20};
  ${grey};
  padding-left: 23px;
`;
export const downIcon = css`
  width: 11px;
  height: auto;
`;
export const selectInput = css`
  border: 1px solid #393a3f;
  ${t18};
  ${white};
  width: 184px;
  height: 40px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;
export const cateBox = css`
  width: 184px;
  height: 40px;
  align-self: flex-start;
  margin-left: 21px;
`;
export const filterBox = css`
  width: 184px;
  height: 40px;
  align-self: flex-start;
  margin-left: 25px;
  margin-right: 45px;
`;
export const contactsBox = css`
  margin-top: 36px;
  flex: 36.9rem;
  overflow-y: auto;
  padding-bottom: 350px;
`;

export const contactList = css`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
  row-gap: 27px;
`;
export const topBox = css`
  display: flex;
  align-items: center;
`;
export const card = css`
  width: 350px;
  background-color: #1e1f22;
  padding-top: 23px;
  padding-left: 16px;
  padding-bottom: 31px;
`;
export const profileBox = css`
  margin-left: 8.66px;
  flex: 1;
`;
export const profileName = css`
  ${t16};
  ${white};
`;
export const profileInput = css`
  ${t14};
  ${grey};
  width: 100%;
`;
export const bottomBox = css`
  display: flex;
`;
export const topRightBtn = css`
  margin-left: 0;
`;
export const addIcon = css`
  width: 22px;
  height: auto;
`;
export const checkIcon = css`
  width: 23px;
  height: auto;
`;
export const tagText = css`
  background-color: #323232;
  ${t16};
  ${white};
  margin-right: 7px;
  padding-left: 6.3px;
  padding-right: 6.3px;
  border-radius: 4px;
`;

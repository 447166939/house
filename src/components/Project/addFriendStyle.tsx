import { css } from "@emotion/react";
import { grey, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  position: absolute;
  width: 543px;
  height: 643px;
  border-radius: 10px;
  background-color: #313136;
  z-index: 20000;
  right: 67px;
  top: -145px;
  z-index: 30000;
  cursor: auto;
`;
export const header = css`
  display: flex;
  align-items: center;
  padding: 34.08px 22.5px 0 29.11px;
`;
export const searchInputWrapper = css`
  width: 301px;
  height: 44px;
  background-color: #1e1f22;
  margin-left: 13.2px;
  border-radius: 22px;
  display: flex;
  align-items: center;
`;
export const searchInput = css`
  flex: 1;
  ${t16};
  ${grey};
  padding-left: 23px;
`;
export const searchIcon = css`
  width: 0.72rem;
  height: auto;
`;
export const addPersonIcon = css`
  width: 19px;
  height: auto;
`;
export const headerText = css`
  ${t20};
  ${white};
  margin-left: auto;
`;
export const rightIcon = css`
  width: 11px;
  height: auto;
  margin-left: 8.4px;
`;
export const title = css`
  ${t20};
  ${white};
  margin-top: 31px;
  text-align: start;
  margin-left: 29px;
`;
export const list = css`
box-sizing:border-box;
padding-top:29px;
  flex: 1;
  height: 507px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #38383f;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #38383f;
  }
  scrollbar-width: thin;
  scrollbar-color: #38383f transparent;
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
export const listItem = css`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;
export const avatar = css`
  width: 58px;
  height: 60px;
  margin-left: 29px;
`;
export const name = css`
  ${t20};
  ${white};
  margin-left: 14.8px;
`;
export const accept = css`
  width: 74px;
  height: 33px;
  ${t18};
  ${white};
  margin-left: auto;
  margin-right: 36px;
`;
export const statusText = css`
  ${t18};
  ${grey};
  margin-left: auto;
  margin-right: 46px;
`;

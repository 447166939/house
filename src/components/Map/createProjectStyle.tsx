import { css } from "@emotion/react";
import { grey, h20, h30, t12, t14, t15, t16, t18, t20, white } from "@/style/baseStyle";

export const container = ({ isOpen }: any) => css`
  position: fixed;
  width: 1639px;
  height: auto;
  background-color: #111113;
  inset: 0;
  margin: 37px auto;
  border-radius: 20px;
  z-index: 1000;
  flex-direction: column;
  user-select: none;
  display: ${isOpen ? "flex" : "none"};
`;
export const title = css`
  ${t20};
  ${white};
  margin-top: 24px;
  margin-left: 32px;
`;
export const closeBtn = css`
  position: absolute;
  top: 24px;
  right: 36px;
  padding: 0;
`;
export const closeIcon = css`
  width: 19px;
  height: auto;
`;
export const content = css`
  flex: 1;
  display: flex;
  overflow-y: hidden;
`;
export const picBox = css`
  width: 480px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 8.7px;
  column-gap: 7px;
  overflow-y: auto;
  margin-top: 20px;
  flex-shrink: 0;
  margin-left: 13.26px;
  &::-webkit-scrollbar {
    background-color: #111113;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #38383f;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #38383f;
  }
  scrollbar-width: thin;
  scrollbar-color: #38383f #111113;
  &::-webkit-scrollbar-track {
    background-color: #111113;
  }
`;
export const picItem = css`
  &:first-child {
    grid-column: 1/3;
  }
`;
export const bigPicItem = css`
  background-color: #272727;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
export const bigAddIcon = css`
  width: 47px;
  height: auto;
  position: absolute;
  top: 151px;
`;
export const bigAddText = css`
  ${t18};
  ${white};
  top: 226px;
  position: absolute;
`;
export const fileInput = css`
  display: none;
`;
export const smallPicItem = css`
  background-color: #272727;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 183px;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
export const smallFileInput = css`
  display: none;
`;
export const smallAddicon = css`
  width: 25px;
  height: auto;
  position: absolute;
  top: 59.52px;
`;
export const smallAddText = css`
  ${t14};
  ${white};
  top: 106.9px;
  position: absolute;
`;
export const midBox = css`
  width: 572px;
  display: flex;
  flex-direction: column;
  margin-left: 27.66px;
  padding-right: 21.85px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background-color: #111113;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #38383f;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #38383f;
  }
  scrollbar-width: thin;
  scrollbar-color: #38383f #111113;
  &::-webkit-scrollbar-track {
    background-color: #111113;
  }
`;
export const formTitle = css`
  ${h20};
  ${white};
  margin: 51px auto 0px auto;
`;
export const formGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 47.9px;
  column-gap: 50.9px;
  margin-top: 55px;
`;
export const linkItem = css`
  grid-column: 1/3;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #36404e;
  ${t15};
  color: #a1aab8;
`;
export const addressItem = css`
  grid-column: 1/3;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #36404e;
  ${t15};
  color: #a1aab8;
`;
export const menuItem = css`
  ${t15};
  color: #a2aab8;
`;
export const downIcon = css`
  width: 7px;
  height: auto;
`;
export const houseTypeItem = css`
  height: 48px;
  border-radius: 4px;
  border: 1px solid #36404e;
  ${t15};
  color: #a1aab8;
`;
export const adornText = css`
  & .MuiTypography-root {
    ${t15};
    color: #ff2f2f;
    padding-left: 9.37px;
  }
`;
export const inputItem = css`
  height: 48px;
  border-radius: 4px;
  border: 1px solid #36404e;
  ${t15};
  color: #a1aab8;
  padding-left: 19.43px;
`;
export const requireInputItem = css`
  height: 48px;
  border-radius: 4px;
  border: 1px solid #36404e;
  ${t15};
  color: #a1aab8;
`;
export const createProjectBtn = css`
  width: 124px;
  height: 38px;
  border-radius: 4px;
  ${t16};
  ${white};
  margin: 35.3px auto 43.3px;
`;
export const caculatorBox = css`
  width: 560px;
  margin-right: 12px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #1e1f22;
  border-radius: 20px;
  margin-top: 15px;
  margin-bottom: 13px;
`;
export const caculatorTitle = css`
  ${h20};
  ${white};
  margin-top: 27.9px;
  margin-left: 20.84px;
`;
export const caculateTab = css`
  display: flex;
  align-items: center;
  margin-top: 20.05px;
  margin-left: 20.84px;
  border-bottom: 1px solid #313338;
  padding-bottom: 13.69px;
  margin-right: 18.85px;
`;
export const cateTabItem = ({ isActive }: any) => css`
  cursor: pointer;
  ${t18};
  color: ${isActive ? "#fff" : "#80848E"};
  margin-right: 77.9px;
  white-space: nowrap;
  width: max-content;
  position: relative;
  &:after {
    bottom: -0.5rem;
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00e0fd;
    height: 4px;
    width: 81.4px;
    display: ${isActive ? "block" : "none"};
  }
`;
export const scrollBox = css`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 278px;
`;
export const inputBox = css`
  display: grid;
  column-gap: 22px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 20.84px;
  margin-right: 18.85px;
  margin-top: 26.5px;
  padding-bottom: 60px;
  border-bottom: 1px solid #313338;
  box-sizing: border-box;
`;
export const inputGridItem = css`
  display: flex;
  flex-direction: column;
`;
export const inputLabel = css`
  ${t14};
  ${grey};
`;
export const inputText = css`
  ${t16};
  ${grey};
  width: 100%;
  height: 40px;
  margin-top: 6.6px;
  border: 1px solid #393a3f;
  background-color: #1a1a1a;
  border-radius: 4px;
  padding: 0 10px;
  box-sizing: border-box;
`;
export const inputPre = css`
  & .MuiTypography-root {
    ${t16};
    ${grey};
  }
`;
export const inutpos = css`
  & .MuiTypography-root {
    ${t12};
    ${grey};
  }
`;
export const bottomInputBox = css`
  display: grid;
  column-gap: 21.96px;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 20.84px;
  margin-right: 18.85px;
  margin-top: 41px;
`;
export const saveBtn = css`
  white-space: nowrap;
  margin: auto auto 82.8px auto;
  ${t20};
  ${white};
  width: 145px;
  height: 40px;
`;

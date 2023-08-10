import { css } from "@emotion/react";
import { grey, t12, t14, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  flex: 1;
  width: 100%;
  flex-basis: 800px;
  display: flex;
  flex-direction: column;
`;
export const usaryModal = css`
  left: 0;
  right: 0;
  margin: auto;
  position:fixed;
`;
export const fixedModal = css`
  left: 0;
  right: 0;
  margin: auto;
  position:fixed;
`;
export const ownModal = css`
  left: 0;
  right: 0;
  margin: auto;
  position:fixed;
`;
export const lendModal = css`
  left: 0;
  right: 0;
  margin: auto;
  position:fixed;
`;
export const buyModal = css`
  left: 0;
  right: 0;
  margin: auto;
  position:fixed;
`;
export const sellModal = css`
  left: 0;
  right: 0;
  margin: auto;
  position:fixed;
`;
export const caculateWrapper = css`
  position: relative;
  flex: 1;
  width: 100%;
  flex-basis: 720px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
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
  margin-right: 35px;
  white-space: nowrap;
  width: max-content;
  position: relative;
  &:after {
    bottom: -0.5rem;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background-color: #00e0fd;
    height: 4px;
    width: auto;
    display: ${isActive ? "block" : "none"};
  }
`;
export const caculateBox = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 24.7px 37.34px 0 37.34px;
  column-gap: 35.56px;
  row-gap: 30.1px;
  padding-bottom: 31.66px;
  border-bottom: 1px solid #313338;
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
  height: 38px;
  border: 1px solid #393a3f;
  background-color: #1a1a1a;
  border-radius: 4px;
  padding: 0 10.78px;
  box-sizing: border-box;
  margin-top: 6.62px;
`;
export const inputPre = css`
  & .MuiTypography-root {
    ${t16};
    ${grey};
  }
`;
export const inutpos = css`
  cursor: pointer;
  & .MuiTypography-root {
    ${t12};
    ${grey};
  }
`;
export const percentPos = css`
  & .MuiTypography-root {
    ${t16};
    ${grey};
  }
`;
export const bottomCaculateBox = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 15.12px 37.34px 0 37.34px;
  column-gap: 35.56px;
  row-gap: 18.56px;
`;
export const saveBtn = css`
  white-space: nowrap;
  margin: 32.48px auto;
  ${t20};
  ${white};
  width: 145px;
  height: 38px;
`;

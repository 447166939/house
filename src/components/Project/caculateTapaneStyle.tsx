import { css } from "@emotion/react";
import { grey, t12, t14, t16, t20, white } from "@/style/baseStyle";

export const container = css`
  flex: 1;
  flex-basis: 419px;
  display: flex;
  flex-direction: column;
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
  & .MuiTypography-root {
    ${t12};
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

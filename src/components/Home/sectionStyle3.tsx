import { css } from "@emotion/react";

export const container = css`
  background-color: #fff;
`;
export const title = css`
  color: #000;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin-top: 86px;
`;
export const gridContainer = css`
  margin: 121px 262px 164px;
  width: auto;
  column-gap: 117px;
  row-gap: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const gridItem = css`
  display: flex;
  flex-direction: column;
`;
export const iconWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;
  background-color: #000;
  border-radius: 31.5px;
`;
export const itemTitle = css`
  color: #000;
  font-size: 26px;
  font-weight: 600;
  margin-top: 8px;
`;
export const itemText = css`
  width: 640px;
  font-size: 14px;
  color: #000;
  font-weight: 400;
  white-space: pre-wrap;
`;

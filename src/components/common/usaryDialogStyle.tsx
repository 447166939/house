import { css } from "@emotion/react";
import { grey, t12, t14, t18, t20, white } from "@/style/baseStyle";

export const container = ({ visible }: any) => css`
  width: 404px;
  background-color: #1a1a1a;
  border-radius: 10px;
  position: absolute;
  z-index: 20000;
  display: ${visible ? "block" : "none"};
`;
export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 13.53px;
  height: 40px;
  border-bottom: 1px solid #36404e;
`;
export const dialogTitle = css`
  ${t14};
  ${white};
`;
export const closeIcon = css`
  width: 7.7px;
  height: auto;
  cursor: pointer;
`;
export const outterBox = css`
  padding: 28px 35.5px 41.6px;
`;
export const gridContainer = css`
  display: grid;
  row-gap: 20px;
  column-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;
export const gridItem = css``;
export const inputTitle = css`
  display: flex;
  align-items: center;
`;
export const inputLabel = css`
  ${t12};
  ${grey}
`;
export const exclamationIcon = css`
  width: 10.43px;
  height: auto;
  margin-left: 3.59px;
`;
export const hoverText = ({ text }: any) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  &:hover::after {
    position: absolute;
    content: "${text}";
    border-radius: 10px 10px 10px 0px;
    background: #1e1f22;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: 400;
    color: #80848e;
    z-index: 25000;
    bottom: 100%;
    left: 100%;
    width: 170px;
    padding: 11px 10px;
    box-sizing: border-box;
  }
`;
export const inputStyle = css`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #393a3f;
  background: #1a1a1a;
  margin-top: 4.27px;
`;
export const formTitle = css`
  ${t14};
  ${white};
  margin: 20px 0;
`;
export const addPos = css`
  & .MuiTypography-root {
    ${t20};
    ${white};
    cursor: pointer;
    margin-right: 10px;
  }
`;

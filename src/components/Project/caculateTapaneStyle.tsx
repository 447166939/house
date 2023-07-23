import { css } from "@emotion/react";
import {grey, t12, t14, t16, t20, white} from "@/style/baseStyle";

export const container = css`
  flex: 1;
  flex-basis:33.79rem;
  display: flex;
  flex-direction: column;
  padding-bottom:150px;
  overflow-y:auto;
&::-webkit-scrollbar {
  background-color: #111113;
  width: 0.29rem;
}
&::-webkit-scrollbar-thumb {
  background-color: #38383F;
  border-radius: 0.29rem;
}
&::-webkit-scrollbar-thumb:hover {
  background-color: #38383F;
}
  scrollbar-width: thin;
  scrollbar-color: #38383F #111113;
  &::-webkit-scrollbar-track {
    background-color: #111113;
  }
`;
export const caculateBox=css`
display:grid;
grid-template-columns:repeat(2,1fr);
margin: 0.897rem 1.356rem 0 1.356rem;
column-gap:1.292rem;
row-gap:1.093rem;
padding-bottom:1.15rem;
border-bottom:1px solid #313338;
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
  height: 1.2rem;
  border: 1px solid #393a3f;
  background-color: #1a1a1a;
  border-radius: 0.145rem;
  padding: 0 0.378rem;
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
export const bottomCaculateBox=css`
display:grid;
grid-template-columns:repeat(2,1fr);
margin: 0.549rem 1.356rem 0 1.356rem;
column-gap:1.292rem;
row-gap:1.093rem;
`;
export const saveBtn = css`
  white-space: nowrap;
  margin: 1.162rem auto;
  ${t20};
  ${white};
  width: 5.23rem;
  height: 1.38rem;
`;

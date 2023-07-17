import { css } from "@emotion/react";
import { grey, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  background-color: #111113;
  width: 100%;
  padding-bottom:1.45rem;
`;
export const taskHead=css`
display:flex;
margin-top:1.09rem;
margin-left:1.71rem;
`
export const taskList=css`
margin-top:1.09rem;
margin-left:3.24rem;
`
export const taskTitle=css`
${t20};
${white};
`
export const title = css`
  ${t20};
  ${white};
`;

export const text = css`
  margin-left: 0.44rem;
  ${t20};
  ${white};
`;
export const listText = css`
  ${t18};
  ${grey};
  margin-left: 0.59rem;
`;
export const listItem = css`
  display: flex;
  align-items: center;
`;
export const checkIcon = css`
  width: 0.82rem;
  height: auto;
`;

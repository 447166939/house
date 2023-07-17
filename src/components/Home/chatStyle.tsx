import { css } from "@emotion/react";
import { grey, t14, t16, t20, white } from "@/style/baseStyle";

export const container = css`
  background-color: #1e1f22;
  width: 41.46rem;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  flex: 1;
`;
export const left = css`
  flex: 1;
  padding-left:1.27rem;
  padding-right:0.87rem;
  display:flex;
  flex-direction:column;
`;
export const right = css`
  width: 9.23rem;
  flex-shrink: 0;
`;
export const chatTitle = css`
  ${t20};
  ${white};
  margin-top:0.83rem;
`;
export const chatName = css`
  ${t16};
  ${white};
`;
export const chatmsg = css`
  ${t14};
  ${grey};
`;
export const chatList = css`
padding-top:1.36rem;
flex:1;
`;
export const listItem = css`
  display: flex;
  padding-left:0.36rem;
  padding-top:0.54rem;
  padding-bottom:0.54rem;
  border-radius:0.36rem;
  cursor:pointer;
  user-select:none;
  &:hover{
  background-color:#313136;
  }
`;
export const listItemText = css`
margin-left:0.424rem;
`;
export const listItemTitle = css`
  ${t16};
  ${white};
`;
export const listItemContent = css`
  ${t14};
  ${grey};
`;
export const contactList = css``;
export const contactTitle = css`
${t20};
${white};
`;
export const contactItem = css`
  display: flex;
  margin-top:0.73rem;
  align-items:center;
`;
export const sendBox=css`
background-color:#222226;
border-radius:0.36rem;
display:flex;
align-items:center;
margin-bottom:0.51rem;
height:2.18rem;
`
export const sendInput=css`
${t16};
${grey};
padding-left:0.98rem;
flex:1;
`
export const circlePlus=css`
width:0.66rem;
height:auto;
`
export const faceIcon=css`
width:0.66rem;
height:auto;

`
export const contactPlus=css`
width:0.66rem;
height:auto;
`
export const contactHead=css`
display:flex;
align-items:center;
margin-top:0.91rem;
margin-left:0.84rem;
`
export const contactName=css`
${t16};
${grey};
margin-left:0.44rem;
`

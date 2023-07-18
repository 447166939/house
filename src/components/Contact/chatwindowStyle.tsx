import { css } from "@emotion/react";
import {grey, t14, t16, t20, white} from "@/style/baseStyle";

export const container = css`
  flex: 1;
  background-color: #1e1f22;
  display:flex;
  flex-direction:column;
`;
export const chatHeader=css`
display:flex;
align-items:center;
margin-top:0.94rem;
`
export const chatHeaderText=css`
${t20};
${white};
margin-left:1.74rem;
`
export const switchText=css`
${t16};
${grey};
margin-left:auto;
`
export const switchstyle=css`
margin-left:0.14rem;
`
export const chatList=css`
flex:1;
`
export const chatItem=css`
display:flex;
margin-left:1.35rem;
margin-right:1.47rem;
border-radius:0.36rem;
padding-top:0.54rem;
padding-bottom:0.54rem;
padding-right:1.12rem;
&:hover{
background-color:#313136;
}
`
export const chatItemRight=css`
margin-left:0.42rem;
`
export const chatName=css`
${t16};
${white};
`
export const chatMsg=css`
${t14};
${grey};
`
export const chatAvatar=css`
margin-left:0.39rem;
margin-top:0.54rem;
`
export const chatSend=css`
display:flex;
align-items:center;
background-color:#222226;
margin-bottom:0.5rem;
margin-left:0.87rem;
margin-right:1.01rem;
border-radius:0.36rem;
height:2.18rem;
`
export const chatSendInput=css`
${t16};
${grey};
flex:1;
padding-left:0.98rem;
`
export const chatPlus=css`
width:0.65rem;
height:auto;
`
export const faceIcon=css`
width:0.65rem;
height:auto;
`

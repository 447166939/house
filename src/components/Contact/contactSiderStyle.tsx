import { css } from "@emotion/react";
import {grey, t16, t20, white} from "@/style/baseStyle";

export const container = css`
  width: 13.04rem;
  background-color: #222226;
  display:flex;
  flex-direction:column;
`;
export const contactHead=css`
display:flex;
align-items:center;
padding-left:1.05rem;
padding-right:0.84rem;
justify-content:space-between;
margin-top:0.77rem;
`
export const contactAdd=css`
width:0.76rem;
height:auto;
`
export const contactHeadText=css`
${t20};
${white};
`
export const searchInputWrapper=css`
height:1.45rem;
border-radius:1.09rem;
background-color:#111113;
padding: 0 0 0 0.65rem;
display:flex;
align-items:center;
margin-top:0.78rem;
margin-left:0.87rem;
margin-right:0.59rem;
`
export const searchIcon=css`
width:0.72rem;
height:auto;

`
export const searchInput=css`
flex:1;
height:100%;
padding: 0.36rem 0;
${t16};
${grey};
`
export const contacts=css`
flex:1;
`

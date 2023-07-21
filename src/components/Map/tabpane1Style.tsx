import {css} from "@emotion/react";
import {grey, h20, t16, white} from "@/style/baseStyle";

export const container=css`
flex:1;
display:flex;
flex-direction:column;
`
export const title=css`
${h20};
${white};
margin-top:0.89rem;
margin-left:0.97rem;
`
export const head=css`
display:flex;
align-items:center;
padding-left:0.94rem;
padding-right:1.16rem;
`
export const cateBox=css`
margin-left:auto;
`
export const downIcon = css`
  width: 0.48rem;
  height: auto;
`;
export const selectInput = css`
  width: 5.45rem;
  height: 100%;
  border: 1px solid #393a3f;
  padding-left: 0.36rem;
  ${t16};
  ${white};
`;
export const result=css`
${t16};
${grey};
`
export const gridContainer=css`
flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100px;
    padding:0 0.94rem 0.94rem 0.94rem;
overflow:scroll;
margin-top:0.67rem;
`
export const list=css`
justify-items:center;
display:grid;
grid-template-columns:repeat(2,1fr);
column-gap:0.65rem;
row-gap:0.65rem;
`
export const card=css`
height:12.68rem;
width:100%;
background-color:#38383F;
border-radius:0.14rem;
`

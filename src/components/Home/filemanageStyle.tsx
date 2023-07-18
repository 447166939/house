import { css } from "@emotion/react";
import {grey, t12, t16, white} from "@/style/baseStyle";

export const container = css`
 background-color: #111113;
 width:100%;
`;
export const head=css`
display:flex;
align-items:center;
justify-content:space-between;
padding-top:0.72rem;
padding-left:1.59rem;
padding-bottom:0.6rem;
padding-right:1.59rem;
`
export const fileAddIcon=css`
width:0.72rem;
height:auto;
`
export const headText=css`
${t16};
${grey};
`
export const fileList=css`
display:flex;
flex-wrap:wrap;
padding-left:1.67rem;
`
export const fileItem=css`
display:flex;
flex-direction:column;
align-items:center;
margin-right:1.99rem;
padding-right:1.56rem;
margin-bottom:1.05rem;
cursor:pointer;
`
export const folderIcon=css`
width:3.74rem;
height:auto;
`
export const fileTitle=css`
${t16};
${white};
margin-top:0.32rem;
`
export const fileDate=css`
${t12};
${grey};
`

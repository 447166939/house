import {css} from "@emotion/react";
import {t20} from "@/style/baseStyle";
import {isA} from "expect/build/jasmineUtils";

export const container=css`
display:flex;
align-items:center;
background-color:#111113;
height:2.62rem;
padding-left:1.6rem;
`
export const tabItem=css`
display:flex;
align-items:center;
position:relative;
`
export const tabItemText=(props:any)=>css`
${t20};
color:${props.isActive ? '#fff':'#80848E'};
margin-left:0.2rem;
margin-right:2.29rem;
`
export const tabSplit=({isActive}:any)=>css`
display:${isActive ? 'block' : 'none'};
position:absolute;
bottom:0;
left:0;
right:0;
margin:auto;
background-color:#00E0FD;
height:0.15rem;
width:6.04rem;
`

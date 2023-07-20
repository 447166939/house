import {css} from "@emotion/react";
import {grey, t16, t20, white} from "@/style/baseStyle";

export const container=css`
flex:1;
display:flex;
flex-direction:column;
`
export const header=css`
background-color:#111113;
height:3.25rem;
display:flex;
align-items:center;
`
export const searchInputWrapper=css`
width:13.51rem;
height:1.45rem;
background-color:#1E1F22;
margin-left:0.67rem;
border-radius:2.47rem;
display:flex;
align-items:center;
`
export const searchInput=css`
flex:1;
${t16};
${grey};
padding-left:0.65rem;
`
export const searchIcon=css`
width:0.72rem;
height:auto;
`
export const priceBox=css`
width:5.45rem;
height:1.38rem;
margin-left:1.23rem;
display:flex;
`
export const numBox=css`
width:5.45rem;
height:1.38rem;
margin-left:1.05rem;
display:flex;
`
export const typeBox=css`
width:5.45rem;
height:1.38rem;
margin-left:1.25rem;
display:flex;
`
export const downIcon=css`
 width: 0.48rem;
  height: auto;
`
export const selectInput=css`
width:5.45rem;
height:100%;
border: 1px solid #393a3f;
padding-left:0.36rem;
${t16};
${white};
`
export const saveBtn=css`
width:4.54rem;
height:1.38rem;
margin-left:3.77rem;
margin-right:0.5rem;
${t20};
`
export const mapContainer=css`
width:100%;
flex:1;
background-color:green;
`

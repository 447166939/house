import { css } from "@emotion/react";
import {grey, h15, t14, t16, t18, t20, white} from "@/style/baseStyle";

export const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color:#111113;
`;
export const centerHeader = css`
display: flex;
align-items:center;
`;
export const centerHeadTitle=css`
${t20};
${white};
margin-left:1.58rem;
`
export const searchIcon=css`
width:0.72rem;
height:auto;
`
export const searchInputWrapper=css`
display:flex;
align-items:center;
width:15.11rem;
height:1.59rem;
border-radius:0.79rem;
margin-left:auto;
background-color:#1E1F22;
`
export const searchInput=css`
flex:1;
height:100%;
${t20};
${grey};
padding-left:0.83rem;
`
export const downIcon=css`
 width: 0.48rem;
  height: auto;
`
export const selectInput=css`
 border:1px solid #393A3F;
  ${t18};
  ${white};
  width:6.68rem;
  height: 1.38rem;
  padding-left: 0.69rem;
`
export const cateBox=css`
width:6.68rem;
height:1.38rem;
align-self:flex-start;
margin-left:0.77rem;
`
export const filterBox=css`
width:6.68rem;
height:1.38rem;
align-self:flex-start;
margin-left:0.93rem;
margin-right:1.63rem;
`
export const contactsBox=css`
flex:1;
margin-top:1.23rem;
`
export const contactList=css`
`
export const topBox=css`
display:flex;
align-items:center;
`
export const card=css`
width:12.7rem;
background-color:#1E1F22;
padding-top:0.83rem;
padding-left:0.58rem;
padding-bottom:1.12rem;
`
export const profileBox=css`
margin-left:0.31rem;
`
export const profileName=css`
${t16};
${white};
`
export const profileInput=css`
${t14};
${grey};
max-height:2.32rem;
`
export const bottomBox=css`
display:flex;
`
export const topRightBtn=css`
margin-left:auto;
`
export const addIcon=css`
width:0.76rem;
height:auto;
`
export const checkIcon=css`
width:0.76rem;
height:auto;
`
export const tagText=css`
background-color:#323232;
${t16};
${white};
margin-right:0.5rem;
padding-left:0.29rem;
padding-right:0.29rem;
border-radius:0.14rem;
`

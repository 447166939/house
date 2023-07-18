import { css } from "@emotion/react";
import {grey, h20, t16, t20, white} from "@/style/baseStyle";

export const container = css`
  width: 13.04rem;
  background-color: #222226;
  display: flex;
  flex-direction: column;
`;
export const contactHead = css`
  display: flex;
  align-items: center;
  padding-left: 1.05rem;
  padding-right: 0.84rem;
  justify-content: space-between;
  margin-top: 0.77rem;
`;
export const contactAdd = css`
  width: 0.76rem;
  height: auto;
`;
export const contactHeadText = css`
  ${t20};
  ${white};
`;
export const searchInputWrapper = css`
  height: 1.45rem;
  border-radius: 1.09rem;
  background-color: #111113;
  padding: 0 0 0 0.65rem;
  display: flex;
  align-items: center;
  margin-top: 0.78rem;
  margin-left: 0.87rem;
  margin-right: 0.59rem;
  margin-bottom:0.78rem;
`;
export const searchIcon = css`
  width: 0.72rem;
  height: auto;
`;
export const searchInput = css`
  flex: 1;
  height: 100%;
  padding: 0.36rem 0;
  ${t16};
  ${grey};
`;
export const contacts = css`
  flex: 1;
  display:flex;
  flex-direction:column;
  position:relative;
`;
export const contactItem=css`
display:flex;
align-items:center;
margin-bottom:0.62rem;
`
export const contactAvatar=css`
margin-left:1.71rem;
width:2.10rem;
height:2.10rem;
`
export const contactName=css`
${t20};
${grey};
margin-left:0.53rem;
`
export const myInfo=css`
position:absolute;
bottom:0;
display:flex;
align-items:center;
z-index:10000;
background-color:#1A1A1D;
width:100%;
height:3.34rem;
`
export const myAvatar=css`
width:1.92rem;
height:1.92rem;
margin-left:1.02rem;
`
export const myContactName=css`
${h20};
${white};
`
export const myStatus=css`
${t20};
${grey};
`
export const myText=css`
margin-left:0.45rem;
`
export const mySetting=css`
width:0.65rem;
height:auto;
`
export const mySettingBtn=css`
margin-left:auto;
margin-right:0.59rem;
`


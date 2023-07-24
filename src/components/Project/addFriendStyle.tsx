import { css } from "@emotion/react";
import {grey, t16, t18, t20, white} from "@/style/baseStyle";

export const container = css`
  position: absolute;
  width: 19.731rem;
  height: 23.364rem;
  border-radius: 0.363rem;
  background-color: #313136;
  z-index: 20000;
  right: 2.4rem;
  top: -6.4rem;
  z-index:30000;
  cursor:auto;
`;
export const header = css`
  display: flex;
  align-items: center;
  padding: 1.235rem 00.819rem 0 1.057rem;
`;
export const searchInputWrapper = css`
  width: 10.901rem;
  height: 1.598rem;
  background-color: #1e1f22;
  margin-left: 0.479rem;
  border-radius: 2.47rem;
  display: flex;
  align-items: center;
`;
export const searchInput = css`
  flex: 1;
  ${t16};
  ${grey};
  padding-left: 0.65rem;
`;
export const searchIcon = css`
  width: 0.72rem;
  height: auto;
`;
export const addPersonIcon = css`
  width: 1.09rem;
  height: auto;
`;
export const headerText=css`
${t20};
${white};
margin-left:auto;
`
export const rightIcon=css`
width:0.408rem;
height:auto;
margin-left:0.305rem;
`
export const title=css`
${t20};
${white};
margin-top:1.128rem;
text-align:start;
margin-left:1.057rem;
margin-bottom:1.064rem;
`
export const list=css`
flex:1;
flex-basis:15.172rem;
 overflow-y: auto;
  &::-webkit-scrollbar {
    background-color: #111113;
    width: 0.29rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #38383f;
    border-radius: 0.29rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #38383f;
  }
  scrollbar-width: thin;
  scrollbar-color: #38383f #111113;
  &::-webkit-scrollbar-track {
    background-color: #111113;
  }
`
export const listItem=css`
display:flex;
align-items:center;
margin-bottom:0.62rem;
`
export const avatar=css`
width:2.107rem;
height:2.107rem;
margin-left:1.057rem;
`
export const name=css`
${t20};
${white};
margin-left:0.538rem;
`
export const accept=css`
width:2.691rem;
height:1.232rem;
${t18};
${white};
margin-left:auto;
margin-right:1.325rem;
`
export const statusText=css`
${t18};
${grey};
margin-left:auto;
margin-right:1.325rem;
`

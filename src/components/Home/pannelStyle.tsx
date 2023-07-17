import { css } from "@emotion/react";
import {t20, white} from "@/style/baseStyle";

export const container = css`
  width: 15.23rem;
  background-color: #1E1F22;
  min-height: 100%;
  display:flex;
  flex-direction:column;
`;
export const pannelTabs = css`
  display: flex;
  width:100%;
  align-items: center;
  padding-left:0.72rem;
  padding-right:1.01rem;
  height:2.61rem;
  position:relative;
  width:100%;
  &:after{
  content:'';
  position: absolute;
  bottom: 0;
  height: 1px;
  background-color: #313338;
  left: 0.76rem;;
  right: 1.01rem;
  width:9.84rem;
  }
`;
export const pannelTabItem = ({ isActive }: any) => css`
  color: ${isActive ? "#fff" : "#686B74"};
  ${t20};
  cursor:pointer;
  margin-right:1.09rem;
  position:relative;
  height:2.61rem;
  display:flex;
  align-items:center;
`;
export const pannelTabItemText=({isActive}:any)=>css`
 color: ${isActive ? "#fff" : "#686B74"};
  ${t20};
`
export const tabItemBorder=({isActive}:any)=>css`
 display: ${isActive ? "block" : "none"};
 position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #00e0fd;
  height: 0.15rem;
  width: 3.56rem;
`
export const taskTitle=css`
${t20};
${white};
`
export const taskBox=css`
background-color:#1A1A1D;
width:auto;
height:4.18rem;
margin-left:0.75rem;
margin-right:0.75rem;
border:1px solid #fff;
`

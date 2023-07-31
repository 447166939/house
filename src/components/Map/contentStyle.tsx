import { css } from "@emotion/react";
import {grey, t14, t16, t17, t20, white} from "@/style/baseStyle";

export const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const header = css`
  background-color: #111113;
  height: 89.25px;
  display: flex;
  align-items: center;
`;
export const searchInputWrapper = css`
  width: 415px;
  height: 44px;
  background-color: #1e1f22;
  margin-left: 23px;
  border-radius: 22px;
  display: flex;
  align-items: center;
`;
export const searchInput = css`
  flex: 1;
  ${t16};
  ${grey};
  padding-left: 22.5px;
`;
export const searchIcon = css`
  width: 22px;
  height: auto;
`;
export const priceBox = css`
  width: 184px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #393a3f;
  border-radius: 4px;
  margin-left: 21px;
  display: flex;
  position: relative;
`;
export const priceDialog = ({ isOpen }: any) => css`
  position: absolute;
  width: 367px;
  height: 203px;
  border-radius: 10px;
  border: 1px solid #393a3f;
  background: #313136;
  z-index: 10000;
  top: calc(100% + 42px);
  left: calc(50% - 183px);
  display: ${isOpen ? "block" : "none"};
`;
export const priceSelectInput = css`
  flex: 1;
  height: 100%;
  padding-left: 10px;
  ${t16};
  ${white};
  & ::-webkit-input-placeholder {
    color: #fff !important;
    opacity: 1 !important;
  }
  & ::-moz-placeholder {
    color: #fff !important;
    opacity: 1 !important;
  }
  & ::placeholder {
    color: #fff !important;
    opacity: 1 !important;
  }
  & .MuiInputBase-input {
    cursor: pointer;
  }
`;
export const priceSelectIcon = ({ isOpen }: { isOpen: boolean }) => css`
  width: 11px;
  height: auto;
  transform: ${isOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
`;
export const priceDialogTitle=css`
${t17};
${white};
margin: 21.9px 0 0 13.7px;
`
export const priceDialogInputBox=css`
display:flex;
align-items:center;
margin-left:14.58px;
margin-right:19.14px;
justify-content:center;
margin-top:21.94px;
`
export const priceDialogMinInput=css`
width:154px;
height:40px;
border-radius: 4px;
border: 1px solid #393A3F;
background: #1A1A1A;
${t16};
${grey};
padding-left:10.8px;
`
export const priceDialogSplitline=css`
width:7.6px;
height:1px;
background-color:#80848E;
margin:0 8.57px;
`
export const priceDialogMaxInput=css`
border-radius: 4px;
border: 1px solid #393A3F;
background: #1A1A1A;
width:154px;
height:40px;
${t16};
${grey};
padding-left:10.8px;
`
export const priceDialogOkBtn=css`
${t16};
${white};
padding:6px 30px;
border-radius:4px;
margin: 24px auto auto auto;
display:block;
`
export const numBox = css`
  width: 184px;
  height: 40px;
  margin-left: 25.75px;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #393a3f;
  border-radius: 4px;
  align-items: center;
  position:relative;
`;
export const numDialog = ({ isOpen }: any) => css`
padding-right:18.18px;
  position: absolute;
  border-radius: 10px;
border: 1px solid #393A3F;
background: #313136;
 z-index: 10000;
  top: calc(100% + 42px);
  left: calc(50% - 175px);
  display: ${isOpen ? "block" : "none"};
`;
export const numTitle1=css`
${t17};
${white};
margin: 20px 0 0 18px;
`
export const numTitle2=css`
${t17};
${white};
margin-left:18.18px;
`
export const bedroomNumbox=css`
display:flex;
align-items:center;
margin-top:8.64px;
margin-left:18.18px;
`
export const bathroomNumbox=css`
display:flex;
align-items:center;
margin-top:8.64px;
margin-left:18.18px;
`
export const checkboxWrapper=css`
display:flex;
align-items:center;
margin-top:5px;
`
export const myCheckbox=css`
margin-left:5px;
`
export const mycheckboxLabel=css`
${t14};
${grey};
`
export const bedroomNumItem=({isActive}:any)=>css`
background-color:${isActive ? '#00E1FE':'#636363'};
color:${isActive ? '#1A1A1A':'#fff'};
font-size:${isActive ? '16px':'14px'};
width:49px;
height:40px;
margin-right:1px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`
export const bathroomNumItem=({isActive}:any)=>css`
background-color:${isActive ? '#00E1FE':'#636363'};
color:${isActive ? '#1A1A1A':'#fff'};
font-size:${isActive ? '16px':'14px'};
width:49px;
height:40px;
margin-right:1px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`
export const applyBtn=css`
width:125px;
height:40px;
border-radius: 4px;
border: 1px solid #393A3F;
background: #4B66DA;
${t20};
${white};
display:block;
margin: 30.8px auto 30.5px auto;
display:flex;
justify-content:center;
align-items:center;
`
export const numSelectInput = css`
  flex: 1;
  height: 100%;
  padding-left: 10px;
  ${t16};
  ${white};
  & ::-webkit-input-placeholder {
    color: #fff !important;
    opacity: 1 !important;
  }
  & ::-moz-placeholder {
    color: #fff !important;
    opacity: 1 !important;
  }
  & ::placeholder {
    color: #fff !important;
    opacity: 1 !important;
  }
  & .MuiInputBase-input {
    cursor: pointer;
  }
`;
export const numSelectIcon =({isOpen}:any)=> css`
  width: 11px;
  height: auto;
  transform: ${isOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
`;
export const typeBox = css`
  width: 184px;
  height: 40px;
  margin-left: 17.3px;
  display: flex;
`;
export const typeItemText = css`
  ${t16};
  ${white};
`;
export const downIcon = css`
  width: 11px;
  height: auto;
`;
export const typeSelectInput = css`
  width: 184px;
  height: 40px;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px solid #393a3f;
  ${t16};
  ${white};
  flex-grow: 0;
`;
export const deselectIcon = css`
  width: 22px;
  height: auto;
`;
export const deselectText = css`
  ${t16};
  ${white};
  margin-left: 7.6px;
`;
export const deselectType = css`
  display: flex;
  align-items: center;
  padding: 18px 0 20px 0;
  border-bottom: 1px solid #636363;
  cursor: pointer;
  user-select: none;
  pointer-events: auto;
  margin: 0 12px;
  width: 100%;
`;
export const selectInput = css`
  width: 184px;
  height: 40px;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px solid #393a3f;
  ${t17};
  ${white};
`;
export const selectItem = css`
  ${t16};
  ${white};
`;
export const saveBtn = css`
  width: 4.54rem;
  height: 1.38rem;
  margin-left: 3.77rem;
  margin-right: 0.5rem;
  ${t20};
`;
export const mapContainer = css`
  width: 100%;
  flex: 1;
`;

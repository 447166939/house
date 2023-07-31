import { css } from "@emotion/react";
import { grey, t16, t17, t20, white } from "@/style/baseStyle";

export const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const header = css`
  background-color: #111113;
  height: 3.25rem;
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
  box-sizing:border-box;
  border: 1px solid #393A3F;
  border-radius:4px;
  margin-left: 21px;
  display: flex;
  position:relative;
`;
export const priceDialog=({isOpen}:any)=>css`
position:absolute;
width:367px;
height:203px;
border-radius: 10px;
border: 1px solid #393A3F;
background: #313136;
z-index:10000;
top:calc(100% + 42px);
left:calc(50% - 183px);
display:${isOpen ? 'block' : 'none'};
`
export const priceSelectInput = css`
  flex:1;
  height: 100%;
  padding-left: 10px;
  ${t16};
  ${white};
  & .MuiInputBase-input{
  cursor:pointer;
  }
`;
export const priceSelectIcon=({isOpen}:{isOpen:boolean })=>css`
width:11px;
height:auto;
transform:${isOpen ? 'rotateX(180deg)':'rotateX(0deg)'};
`
export const numBox = css`
  width: 184px;
  height: 40px;
  margin-left: 25.75px;
  display: flex;
  box-sizing:border-box;
  border: 1px solid #393A3F;
  border-radius:4px;
  align-items:center;
`;
export const numSelectInput=css`
flex:1;
  height: 100%;
  padding-left: 10px;
  ${t16};
  ${white};
`
export const numSelectIcon=css`
width:11px;
height:auto;
`
export const typeBox = css`
  width: 184px;
  height: 40px;
  margin-left: 17.3px;
  display: flex;
`;
export const typeItemText=css`
${t16};
${white};
`
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
  flex-grow:0;
`;
export const deselectIcon=css`
width:22px;
height:auto;
`
export const deselectText=css`
${t16};
${white};
margin-left:7.6px;
`
export const deselectType=css`
display:flex;
align-items:center;
padding: 18px 0 20px 0;
border-bottom:1px solid #636363;
cursor:pointer;
user-select:none;
pointer-events:auto;
margin:0 12px;
width:100%;
`
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

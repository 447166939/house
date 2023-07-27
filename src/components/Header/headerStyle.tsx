import { css } from "@emotion/react";
import {grey, h15, t14, t16, t18, t24, white} from "@/style/baseStyle";
export const headerLogo = css`
  width: 179px;
  height: auto;
`;
export const appBar = css`
  background-color: #38383f;
  flex-shrink: 0;
  height: 80px;
  justify-content: center;
`;
export const navBox = css`
  margin-left: 115px;
  flex: 1;
`;
export type linkStyle = { isActive: boolean };
export const navItem = (props: linkStyle) =>
  css`
    margin-right: 115px;
    color: ${props.isActive ? "#00E1FE" : "#fff"};
  `;
export const msgIcon = css`
  width: 0.97rem;
  height: auto;
`;
export const msgBtn = css`
  margin-left: 1.09rem;
`;
export const bookIcon = css`
  width: 29px;
  height: auto;
`;
export const bookBtn = css`
  margin-left: 35px;
`;
export const cnIcon = css`
  width: 26px;
  height: auto;
  margin-left: 30px;
  cursor: pointer;
`;
export const helpBtn=css`
margin-left:30px;
`
export const helpIcon = css`
  cursor: pointer;
`;
export const avatar = css`
  margin-left: 25px;
  cursor: pointer;
`;
export const popoverContainer = css`
  width: 9.41rem;
  border-radius: 0.36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #313136;
  border-radius: 0.36rem;
  position: relative;
`;
export const userAvatar = css`
  margin-top: 0.872rem;
`;
export const userMenuItem = css`
  display: flex;
  align-items: center;
  height: 1.8rem;
  padding-left: 0.82rem;
  padding-right: 0.86rem;
  align-self: stretch;
  border-top: 1px solid #414141;
  cursor: pointer;
`;
export const userinfoName = css`
  ${t16};
  ${white};
  margin-top: 0.36rem;
`;
export const userEmail = css`
  ${t14};
  ${grey};
  margin-top: 0.16rem;
  margin-bottom: 1.56rem;
`;
export const settingIcon = css`
  width: 0.54rem;
  height: auto;
`;
export const settingText = css`
  ${t16};
  ${white};
  margin-left: 0.36rem;
`;
export const moonIcon = css`
  width: 0.51rem;
  height: auto;
`;
export const playIcon = css`
  width: 0.4rem;
  height: auto;
`;
export const userAddIcon = css`
  width: 0.43rem;
  height: auto;
`;
export const exitIcon = css`
  width: 0.5rem;
  height: auto;
`;
export const moonText = css`
  ${t16};
  ${white};
  margin-left: 0.36rem;
`;
export const addUserText = css`
  ${t16};
  ${white};
  margin-left: 0.36rem;
`;
export const exitText = css`
  ${t16};
  ${white};
  margin-left: 0.36rem;
`;
export const playBtn = css`
  margin-left: auto;
`;
export const helpDialog=css`
width:557px;
border-radius:20px;
border: 1px solid #393A3F;
background: #313136;
display:flex;
flex-direction:column;
padding: 0 43px 49px 43px;
`
export const helpDialogTitle=css`
${t24};
${white};
margin: 48px auto 12px auto;
`
export const helpText=css`
${t16};
${grey};
margin: 0 auto;
`
export const emailLabel=css`
${h15};
${grey};
margin-top:50px;
`
export const emailInput=css`
border-radius: 4px;
border: 1px solid #222226;
background: #222226;
width:470px;
height:48px;
box-sizing:border-box;
margin-top:10px;
${grey};
`
export const telLabel=css`
${h15};
${grey};
margin-top:20px;
`
export const telInput=css`
border-radius: 4px;
border: 1px solid #222226;
background: #222226;
width:470px;
height:48px;
box-sizing:border-box;
margin-top:10px;
${grey};
`
export const requireLabel=css`
${h15};
${grey};
margin-top:20px;
`
export const requireInput=css`
border-radius: 4px;
border: 1px solid #222226;
background: #222226;
width:470px;
box-sizing:border-box;
margin-top:10px;
${grey};
`
export const submitBtn=css`
height:38px;
margin-top:47px;
${t18};
`
export const contactText=css`
${t16};
${white};
margin-top:60px;
`
export const accountText=css`
${t16};
${grey};
margin-top:11px;
white-space:pre-wrap;
`
export const emailText=css`
${t16};
${grey};
margin-top:14px;
white-space:pre-wrap;
`

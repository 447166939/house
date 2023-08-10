import { css } from "@emotion/react";
import { h15, h30, h40, white, grey, t14, t15, t16, h14 } from "./baseStyle";
export const container = css`
  background-color: #111113;
  width: 100vw;
  display: flex;
  height: 100vh;
`;
export const leftBox = css`
  width: 50%;
  background: url(/auth_bg.webp) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;
export const right = css`
  width: 50%;
  height: 100%;
  overflow-y: auto;
  padding: 79px 0 100px 0;
`;
export const rightBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const rIcon = css`
  width: 211px;
  height: auto;
  margin: auto auto 0 auto;
  display: block;
`;
export const title = css`
  ${h40};
  ${white};
  white-space: pre-wrap;
  text-align: center;
  margin: 0 auto auto auto;
`;
export const formTitle = css`
  ${h30};
  ${white};
  text-align: center;
  margin-top: auto;
`;
export const formSubTitle = css`
  ${t15};
  ${grey};
  white-space: pre-wrap;
  text-align: center;
`;
export const loginForm = css`
  margin: 49.44px auto 0 auto;
  display: flex;
  flex-direction: column;
`;
export const userControl = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
`;
export const userLabel = css`
  ${h15};
  ${grey};
  &.Mui-focused {
    ${grey};
  }
`;

export const userInput = ({ error, touched }: any) => css`
  position: relative;
  border: ${!!error && touched ? "1px solid red" : "1px solid #36404e"};
  border-radius: 4px;
  ${h15};
  ${grey};
  margin-left: 10.77px;
  width: 470px;
  height: 48px;
  padding-left: 19px;
  box-sizing: border-box;
  &:after {
    display: ${!!error && touched ? "block" : "none"};
    position: absolute;
    content: "${error}";
    color: red;
    top: -1.5em;
    margin-left: -19px;
  }
  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;
export const sendCaptBtn = css`
  width: 156px;
  height: 38px;
  ${t16};
  ${white};
  margin-right: 5.23px;
`;
export const captControl = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
`;
export const captLabel = css`
  ${h15};
  ${grey};
  &.Mui-focused {
    ${grey};
  }
`;

export const captInput = ({ error, touched }: any) => css`
  position: relative;
  border: ${!!error && touched ? "1px solid red" : "1px solid #36404e"};
  border-radius: 4px;
  ${h15};
  ${grey};
  margin-left: 10.77px;
  width: 470px;
  height: 48px;
  padding-left: 19px;
  box-sizing: border-box;
  &:after {
    display: ${!!error && touched ? "block" : "none"};
    position: absolute;
    content: "${error}";
    color: red;
    top: -1.5em;
    margin-left: -19px;
  }
  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;
export const telControl = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
`;
export const telLabel = css`
  ${h15};
  ${grey};
  &.Mui-focused {
    ${grey};
  }
`;

export const telInput = css`
  border: 1px solid #36404e;
  border-radius: 4px;
  ${h15};
  ${grey};
  margin-left: 10.77px;
  width: 470px;
  height: 48px;
  padding-left: 19px;
  box-sizing: border-box;
  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;
export const passLabel = css`
  ${h15};
  ${grey};
  &.Mui-focused {
    ${grey};
  }
`;
export const passControl = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
`;
export const passInput = css`
  border: 1px solid #36404e;
  border-radius: 4px;
  ${h15};
  ${grey};
  margin-left: 10.77px;
  width: 470px;
  height: 48px;
  padding-left: 19px;
  box-sizing: border-box;
  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;
export const rememberControl = css`
  display: flex;
  align-items: center;
`;
export const remberText = css`
  ${t15};
  ${grey};
`;
export const remberCheckbox = css`
  color: #36404e;
  padding: 0;
  & .MuiSvgIcon-root {
    margin-left: -4px;
  }
`;
export const signupText = css`
  ${t14};
  ${grey};
`;
export const forgetText = css`
  ${t14};
  ${grey};
`;
export const registerButton = css`
  width: 470px;
  height: 38px;
  ${t16};
  ${white};
`;
export const buttonControl = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 49.44px;
  margin-bottom: auto;
`;
export const atIcon = css`
  width: 0.8rem;
  height: auto;
`;
export const lockIcon = css`
  width: 0.8rem;
  height: auto;
`;
export const roleLabel = css`
  ${h15};
  ${grey};
  &.Mui-focused {
    ${grey};
  }
`;
export const roleControl = css`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;
export const locationControl = css`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;
export const countriesInput = css`
  border: 1px solid #36404e;
  border-radius: 4px;
  ${h14};
  ${grey};
  width: 470px;
  height: 48px;
  padding-left: 12px;
  margin-left: 10.77px;
  box-sizing: border-box;
  background-color: #111113;
  &.MuiMenuList-root {
    background-color: #111113;
  }
`;
export const roleInput = css`
  border: 1px solid #36404e;
  border-radius: 4px;
  ${h15};
  ${grey};
  width: 470px;
  height: 48px;
  padding-left: 12px;
  margin-left: 10.77px;
  box-sizing: border-box;
  background-color: #111113;
  &.MuiMenuList-root {
    background-color: #111113;
  }
`;
export const roleMenuItem = css`
  font-size: 14px;
  & .MuiButtonBase-root {
    font-size: 14px;
  }
`;
export const langMenuItem = css`
  font-size: 14px;
  & .MuiButtonBase-root {
    font-size: 14px;
  }
`;
export const locationMenuItem = css`
  font-size: 14px;
  & .MuiButtonBase-root {
    font-size: 14px;
  }
`;
export const downIcon = css`
  width: 13px;
  height: auto;
`;
export const bioControl = css`
  margin-top: 0.73rem;
`;
export const bioInput = css`
  border: 1px solid #36404e;
  ${h15};
  ${grey};
  min-height: 3.93rem;
  margin-top: 0.37rem;
`;
export const bioLabel = css`
  ${h15};
  ${grey};
  &.Mui-focused {
    ${grey};
  }
`;

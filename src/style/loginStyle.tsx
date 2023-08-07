import { css } from "@emotion/react";
import {
  h15,
  h16,
  h17,
  h18,
  h19,
  h20,
  h30,
  h40,
  white,
  grey,
  t14,
  t15,
  t16,
  t17,
  t18,
  t19,
  t20
} from "./baseStyle";
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;
export const rightBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const loginLogo = css`
  width: 326px;
  height: auto;
  display: block;
  margin: auto auto 0 auto;
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
  margin-top: 93.24px;
`;
export const formSubTitle = css`
  ${t15};
  ${grey};
  white-space: pre-wrap;
  text-align: center;
`;
export const loginForm = css`
  margin: 40px auto 0 auto;
  width: 470px;
  display: flex;
  flex-direction: column;
`;
export const userControl = css``;
export const userLabel = css`
  ${h15};
  ${grey};
  &.Mui-focused {
    ${grey};
  }
`;

export const userInput = css`
  border: 1px solid #36404e;
  border-radius:4px;
  ${h15};
  ${grey};
  height: 48px;
  padding-left: 19px;
  margin-top: 10px;
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
  margin-top: 24px;
`;
export const passInput = css`
  border: 1px solid #36404e;
  border-radius:4px;
  ${h15};
  ${grey};
  height: 48px;
  padding-left: 19px;
  margin-top: 14px;
  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;
export const rememberControl = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const remberText = css`
  ${t15};
  ${grey};
  margin-left: 7px;
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
  margin-left: auto;
`;
export const forgetText = css`
  ${t14};
  ${grey};
  margin-left: 30px;
`;
export const registerButton = css`
  height: 38px;
  ${t16};
`;
export const buttonControl = css`
  margin-top: 30px;
`;
export const atIcon = css`
  width: 22px;
  height: auto;
`;
export const lockIcon = css`
  width: 22px;
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
  margin-top: 0.73rem;
`;
export const roleInput = css`
  border: 1px solid #36404e;
  border-radius:4px;
  ${h15};
  ${grey};
  height: 1.75rem;
  padding-left: 0.69rem;
  margin-top: 0.37rem;
`;
export const downIcon = css`
  width: 0.48rem;
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
export const orWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const leftBorder = css`
  width: 140px;
  height: 1px;
  background: linear-gradient(90deg, rgba(115, 125, 140, 0) 0%, #47546c 100%);
`;
export const rightBorder = css`
  width: 140px;
  height: 1px;
  background: linear-gradient(90deg, #47546c 0%, rgba(115, 125, 140, 0) 100%);
`;
export const orText = css`
  ${t15};
  ${grey};
  margin: 0 20px;
`;
export const buttonWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: auto;
`;
export const googleIcon = css`
  width: 26px;
  height: auto;
  margin-right: 12px;
`;
export const facebookIcon = css`
  width: 26px;
  height: auto;
  margin-right: 12px;
`;
export const googleFab = css`
  white-space: nowrap;
  ${t15};
  ${grey};
  text-transform: initial;
`;
export const facebookFab = css`
  white-space: nowrap;
  ${t15};
  ${grey};
  text-transform: initial;
  margin-left: 20px;
`;

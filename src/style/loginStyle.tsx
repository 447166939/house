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
`;
export const leftBox = css`
  width: 50%;
  background: url(/auth_bg.png) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;
export const rightBox = css`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const loginLogo = css`
  width: 9.31rem;
  height: auto;
  display: block;
  margin: 7.74rem auto 0 auto;
`;
export const rIcon = css`
  width: 7.67rem;
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
  margin-top: 3.4rem;
`;
export const formSubTitle = css`
  ${t15};
  ${grey};
  white-space: pre-wrap;
  text-align: center;
`;
export const loginForm = css`
  margin: 1.453rem auto 0 auto;
  width: 17.08rem;
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
  ${h15};
  ${grey};
  height: 1.75rem;
  padding-left: 0.69rem;
  margin-top: 0.37rem;
`;
export const passLabel = css`
  ${h15};
  ${grey};
  &.Mui-focused {
    ${grey};
  }
`;
export const passControl = css`
  margin-top: 0.872rem;
`;
export const passInput = css`
  border: 1px solid #36404e;
  ${h15};
  ${grey};
  height: 1.75rem;
  padding-left: 0.69rem;
  margin-top: 0.37rem;
`;
export const rememberControl = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  alignitems: center;
  margin-top: 0.37rem;
`;
export const remberText = css`
  ${t15};
  ${grey};
  margin-left: 0.26rem;
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
  margin-left: 1.09rem;
`;
export const registerButton = css``;
export const buttonControl = css`
  margin-top: 1.73rem;
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
  margin-top: 0.73rem;
`;
export const roleInput = css`
  border: 1px solid #36404e;
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
  margin-top: 1.09rem;
`;
export const leftBorder = css`
  width: 5.09rem;
  height: 1px;
  background: linear-gradient(90deg, rgba(115, 125, 140, 0) 0%, #47546c 100%);
`;
export const rightBorder = css`
  width: 5.09rem;
  height: 1px;
  background: linear-gradient(90deg, #47546c 0%, rgba(115, 125, 140, 0) 100%);
`;
export const orText = css`
  ${t15};
  ${grey};
  margin: 0 0.73rem;
`;
export const buttonWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 1.38rem;
  margin-bottom: 7.37rem;
`;
export const googleIcon = css`
  width: 0.95rem;
  height: auto;
  margin-right: 0.43rem;
`;
export const facebookIcon = css`
  width: 0.95rem;
  height: auto;
  margin-right: 0.43rem;
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
  margin-left: 0.73rem;
`;

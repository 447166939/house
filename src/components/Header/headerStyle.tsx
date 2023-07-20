import { css } from "@emotion/react";
import { grey, t14, t16, white } from "@/style/baseStyle";
export const headerLogo = css`
  width: 6.46rem;
  height: auto;
`;
export const appBar = css`
  background-color: #38383f;
`;
export const navBox = css`
  margin-left: 5.05rem;
  flex: 1;
`;
export type linkStyle = { isActive: boolean };
export const navItem = (props: linkStyle) =>
  css`
    margin-right: 3.19rem;
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
  width: 0.97rem;
  height: auto;
`;
export const bookBtn = css`
  margin-left: 1.09rem;
`;
export const cnIcon = css`
  width: 0.95rem;
  height: auto;
  margin-left: 1.16rem;
  cursor: pointer;
`;
export const helpIcon = css`
  cursor: pointer;
  margin-left: 1.16rem;
`;
export const avatar = css`
  margin-left: 1.16rem;
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

import { css } from "@emotion/react";
import { grey, h15, t14, t16, t18, t24, white } from "@/style/baseStyle";
export const headerLogo = css`
  width: 130px;
  height: auto;
`;
export const appBar = css`
  background-color: #38383f;
  flex-shrink: 0;
  height: 60px;
  justify-content: center;
  ${t16};
`;
export const navBox = css`
  margin-left: 163px;
  flex: 1;
`;
export type linkStyle = { isActive: boolean };
export const navItem = (props: linkStyle) =>
  css`
    margin-right: 119px;
    color: ${props.isActive ? "#00E1FE" : "#fff"};
  `;
export const personIcon = css`
  font-size: 20px;
`;
export const personBadge = css`
  & .MuiBadge-badge {
    font-size: 12px;
    min-width: 12px;
    height: 11px;
  }
`;
export const msgIcon = css`
  width: 0.97rem;
  height: auto;
`;
export const msgBtn = css`
  margin-left: 1.09rem;
`;
export const bookIcon = css`
  width: 25px;
  height: auto;
`;
export const bookBtn = css`
  margin-left: 30.68px;
`;
export const cnIcon = css`
  width: 22px;
  height: auto;
  margin-left: 26px;
  cursor: pointer;
`;
export const helpBtn = css`
  margin-left: 25.8px;
`;
export const helpIcon = css`
  cursor: pointer;
  font-size: 22px;
`;
export const avatar = css`
  margin-left: 42px;
  cursor: pointer;
`;
export const popoverContainer = css`
  width: 259px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #313136;
  border-radius: 10px;
  position: relative;
`;
export const avatarContainer = css`
  margin-top: 24px;
  position: relative;
`;
export const userAvatar = css`
  width: 53px;
  height: 53px;
`;
export const editIcon = css`
  cursor: pointer;
  width: 22px;
  height: auto;
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, -100%);
`;
export const userMenuItem = css`
  display: flex;
  align-items: center;
  height: 49px;
  padding-left: 23px;
  padding-right: 23px;
  align-self: stretch;
  border-top: 1px solid #414141;
  cursor: pointer;
`;
export const userinfoName = css`
  ${t16};
  ${white};
  margin-top: 9px;
`;
export const userEmail = css`
  ${t14};
  ${grey};
  margin-top: 4.66px;
  margin-bottom: 43px;
`;
export const settingIcon = css`
  width: 15px;
  height: auto;
`;
export const settingText = css`
  ${t16};
  ${white};
  margin-left: 10px;
`;
export const moonIcon = css`
  width: 14px;
  height: auto;
`;
export const playIcon = css`
  width: 10.7px;
  height: auto;
`;
export const userAddIcon = css`
  width: 0.43rem;
  height: auto;
`;
export const exitIcon = css`
  width: 13.8px;
  height: auto;
`;
export const moonText = css`
  ${t16};
  ${white};
  margin-left: 10.05px;
`;
export const addUserText = css`
  ${t16};
  ${white};
  margin-left: 0.36rem;
`;
export const exitText = css`
  ${t16};
  ${white};
  margin-left: 10.05px;
`;
export const playBtn = css`
  margin-left: auto;
`;
export const helpDialog = css`
  width: 557px;
  border-radius: 20px;
  border: 1px solid #393a3f;
  background: #313136;
  display: flex;
  flex-direction: column;
  padding: 0 43px 49px 43px;
`;
export const helpDialogTitle = css`
  ${t24};
  ${white};
  margin: 48px auto 12px auto;
`;
export const helpText = css`
  ${t16};
  ${grey};
  margin: 0 auto;
`;
export const emailLabel = css`
  ${h15};
  ${grey};
  margin-top: 50px;
`;
export const emailInput = css`
  border-radius: 4px;
  border: 1px solid #222226;
  background: #222226;
  width: 470px;
  height: 48px;
  box-sizing: border-box;
  margin-top: 10px;
  ${grey};
`;
export const telLabel = css`
  ${h15};
  ${grey};
  margin-top: 20px;
`;
export const telInput = css`
  border-radius: 4px;
  border: 1px solid #222226;
  background: #222226;
  width: 470px;
  height: 48px;
  box-sizing: border-box;
  margin-top: 10px;
  ${grey};
`;
export const requireLabel = css`
  ${h15};
  ${grey};
  margin-top: 20px;
`;
export const requireInput = css`
  border-radius: 4px;
  border: 1px solid #222226;
  background: #222226;
  width: 470px;
  box-sizing: border-box;
  margin-top: 10px;
  ${grey};
`;
export const submitBtn = css`
  height: 38px;
  margin-top: 47px;
  ${t18};
`;
export const contactText = css`
  ${t16};
  ${white};
  margin-top: 60px;
`;
export const accountText = css`
  ${t16};
  ${grey};
  margin-top: 11px;
  white-space: pre-wrap;
`;
export const emailText = css`
  ${t16};
  ${grey};
  margin-top: 14px;
  white-space: pre-wrap;
`;

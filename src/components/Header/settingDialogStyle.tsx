import { css } from "@emotion/react";
import { t14, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  position: absolute;
  width: 589px;
  height: 746px;
  background-color: #313136;
  left: -605px;
  top: 0;
  border-radius: 20px;
`;
export const header = css`
  display: flex;
  align-items: center;
  height: 65.47px;
  border-bottom: 1px solid #5a5a5a;
`;
export const closeIcon = css`
  width: 14px;
  height: auto;
`;
export const closeBtn = css`
  margin-right: 16.95px;
  margin-left: auto;
`;
export const title = css`
  ${t20};
  ${white};
  margin-left: 42.55px;
`;
export const content = css`
  display: flex;
`;
export const avatarContainer = css`
  display: flex;
  flex-direction: column;
  margin-left: 42.55px;
  margin-right: 36.36px;
  align-items: center;
`;
export const avatar = css`
  width: 111px;
  height: 111px;
  margin-top: 34.59px;
`;
export const editText = css`
  color: rgba(0, 224, 253, 1);
  ${t14};
  margin-top: 5.5px;
  cursor: pointer;
`;
export const rightBox = css`
  display: flex;
  flex-direction: column;
`;
export const nameText = css`
  ${t16};
  ${white};
  margin-top: 55.02px;
`;
export const editNameText = css`
  ${t14};
  color: rgba(0, 224, 253, 1);
  cursor: pointer;
`;
export const remarkText = css`
  ${white};
  ${t16};
  margin-top: 29.77px;
`;
export const editRemarkText = css`
  color: rgba(0, 224, 253, 1);
  ${t14};
  cursor: pointer;
`;
export const jobText = css`
  ${t16};
  ${white};
  margin-top: 30px;
`;
export const editJobText = css`
  color: rgba(0, 224, 253, 1);
  ${t14};
  cursor: pointer;
`;
export const addressContainer = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;
export const addressItem = css`
  ${t16};
  ${white};
  margin-left: 37px;
  &:first-of-type {
    margin-left: 0;
  }
`;
export const addIcon = css`
  width: 11.6px;
  height: auto;
`;
export const addBtn = css`
  margin-left: auto;
  margin-right: 57.2px;
`;
export const langContainer = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const langItem = css`
  ${t16};
  ${white};
  margin-left: 64px;
  &:first-child {
    margin-left: 0;
  }
`;
export const passText = css`
  ${t16};
  ${white};
  margin-top: 30px;
`;
export const editPassText = css`
  color: rgba(0, 224, 253, 1);
  ${t14};
  cursor: pointer;
`;
export const accountText = css`
  ${t16};
  ${white};
  margin-top: 30px;
`;
export const deleteAccountText = css`
  ${t14};
  color: rgba(255, 111, 6, 1);
  cursor: pointer;
`;
export const planText = css`
  ${t16};
  ${white};
  margin-top: 30px;
`;
export const upgradeBtn = css`
  width: 104px;
  height: 33px;
  ${white};
  ${t18};
  margin-top: 14.46px;
`;

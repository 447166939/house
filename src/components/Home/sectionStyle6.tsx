import { css } from "@emotion/react";

export const container = css`
  background-color: #fff;
  padding-top: 85px;
  padding-bottom: 85px;
`;
export const title = css`
  font-size: 40px;
  color: #000;
  text-align: center;
  font-weight: 700;
`;
export const gridContainer = css`
  margin: 42px 260px 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 79px;
  padding: 52px 70px 29px 61px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 24px 14px 48px 0px rgba(37, 73, 211, 0.05);
`;
export const gridItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const avatar = css`
  width: 128px;
  height: auto;
  border-radius: 50%;
`;
export const nameText = css`
  color: #2a323c;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 18px;
`;
export const jobText = css`
  color: #737d8c;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;
export const content = css`
  color: #737d8c;
  font-size: 14px;
  font-weight: 400;
  margin-top: 26px;
`;
export const footer = css`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 24px 14px 48px 0px rgba(37, 73, 211, 0.05);
  padding: 55px 42px 63px 45px;
  margin-top: 24px;
  margin-left: 260px;
  margin-right: 260px;
  width: auto;
`;
export const logo = css`
  width: 221px;
`;
export const footerText = css`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  margin-left: 46px;
`;

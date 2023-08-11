import { css } from "@emotion/react";
import { t18 } from "@/style/baseStyle";

export const container = css`
  height: 80px;
  background-color: #000000;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const logo = css`
  height: 43px;
  width: auto;
  margin-left: 267px;
  cursor: pointer;
`;
export const homeLink = ({ isActive }: any) => css`
  margin-left: 126px;
  font-size: 18px;
  font-weight: 400px;
  color: ${isActive ? "#00E1FE" : "#fff"};
`;
export const productLink = ({ isActive }: any) => css`
  margin-left: 125px;
  font-size: 18px;
  font-weight: 400px;
  color: ${isActive ? "#00E1FE" : "#fff"};
`;
export const aboutMeLink = ({ isActive }: any) => css`
  margin-left: 127px;
  font-size: 18px;
  font-weight: 400px;
  color: ${isActive ? "#00E1FE" : "#fff"};
`;
export const helpLink = ({ isActive }: any) => css`
  margin-left: 124px;
  font-size: 18px;
  font-weight: 400px;
  color: ${isActive ? "#00E1FE" : "#fff"};
`;
export const downIcon = css`
  width: 9px;
  height: auto;
`;
export const langSelect = css`
  margin-left: 109px;
`;
export const selectInput = css`
  height: 24px;
  padding-left: 0.36rem;
  color: #00e0fd;
  ${t18};
`;
export const selectItem = css`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;
export const myBtn = css`
  margin-left: 103px;
  width: 170px;
  height: 49px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #000;
  font-weight: 600;
  background: linear-gradient(180deg, #f8da44 0%, #ffa200 100%);
`;

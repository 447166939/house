import { css } from "@emotion/react";

export const container = css`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 825px;
  background: url(/section1.webp) no-repeat center;
  background-size: cover;
`;
export const title = css`
  position: relative;
  font-size: 60px;
  font-weight: 600;
  color: #fff;
  z-index: 10000;
  margin: 148px auto 0 auto;
`;
export const desc = css`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 10000;
  margin: 12px auto 0 auto;
  width: 696px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
`;
export const btnGrp = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10000;
  margin: 18px auto 0 auto;
`;
export const whiteBtn = css`
  width: 224px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
`;
export const blackBtn = css`
  width: 224px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-left: 35px;
  background-color: #000;
`;

import { css } from "@emotion/react";
import { grey, h20, h30, t12, t14, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  width: 1639px;
  height: auto;
  background-color: #111113;
  position: fixed;
  inset: 0;
  margin: 37px auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
export const title = css`
  ${t20};
  ${white};
  margin-top: 24px;
  margin-left: 32px;
`;
export const closeBtn = css`
  position: absolute;
  top: 24px;
  right: 36px;
  padding: 0;
`;
export const closeIcon = css`
  width: 19px;
  height: auto;
`;
export const content = css`
  flex: 1;
  display: flex;
  overflow-y: hidden;
`;
export const picBox = css`
  width: 480px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 8.7px;
  column-gap: 7px;
  overflow-y: scroll;
  margin-top: 20px;
  flex-shrink: 0;
  &::-webkit-scrollbar {
    background-color: #111113;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #38383f;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #38383f;
  }
  scrollbar-width: thin;
  scrollbar-color: #38383f #111113;
  &::-webkit-scrollbar-track {
    background-color: #111113;
  }
`;
export const rightBox = css`
  flex: 1;
  display: flex;
  overflow: hidden;
`;
export const pic = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const picItem = css`
  &:first-of-type {
    grid-column: 1/3;
  }
`;
export const midBox = css`
  width: 572px;
  display: flex;
  flex-direction: column;
`;
export const caculatorBox = css`
  width: 560px;
  margin-right: 12px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #1e1f22;
  border-radius: 20px;
  margin-top: 15px;
  margin-bottom: 13px;
`;
export const navBox = css`
  display: flex;
  align-items: center;
  margin-left: 29px;
  margin-top: 20px;
  position: relative;
  margin-right: 22px;
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    display: block;
    margin: 0 auto;
    background-color: #313338;
    margin-top: 6.8px;
    margin-bottom: 8.29px;
    inset: 0;
    top: 100%;
  }
`;
export const logo = css`
  width: 159px;
  height: auto;
`;
export const heartIcon = css`
  width: 18px;
  height: auto;
`;
export const heartBtn = css`
  margin-left: auto;
`;
export const shareIcon = css`
  width: 17px;
  height: auto;
`;
export const eyeIcon = css`
  width: 17px;
  height: auto;
`;
export const hamburgerIcon = css`
  width: 0.57rem;
  height: auto;
`;
export const moneyText = css`
  ${h30};
  ${white};
  margin-left: 29.72px;
  margin-top: 8.29px;
`;
export const addressText = css`
  ${t18};
  ${grey};
  margin-left: 29.72px;
`;
export const saleBox = css`
  display: flex;
  align-items: center;
  margin-top: 14.41px;
`;
export const saleLabel = css`
  display: flex;
  align-items: center;
  ${t18};
  ${white};
  position: relative;
  margin-left: 1.44rem;
  &:before {
    position: absolute;
    content: "";
    background-color: #00e0fd;
    width: 7.5px;
    height: 7.5px;
    border-radius: 50%;
    left: -7.5px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const saleName = css`
  ${t18};
  ${grey};
`;
export const saleMoney = css`
  ${t18};
  ${white};
`;
export const saleText = css`
  margin-left: 31.7px;
  display: flex;
  align-items: center;
`;
export const paymentBox = css`
  display: flex;
  align-items: center;
  margin-top: 14.41px;
`;
export const paymentLabel = css`
  ${t18};
  ${white};
  margin-left: 29.72px;
`;
export const paymentText = css`
  ${t18};
  color: #00e0fd;
  margin-left: 28.07px;
`;
export const buttonBox = css`
  display: flex;
  align-items: center;
  margin-top: 26px;
`;
export const createBtn = css`
  width: 145px;
  height: 38px;
  ${t20};
  margin-left: 29.85px;
`;
export const backupBtn = css`
  width: 120px;
  height: 38px;
  ${t20};
  color: #000;
  margin-left: 31.55px;
`;
export const documentBtn = css`
  width: 120px;
  height: 38px;
  ${t20};
  margin-left: 31.55px;
`;
export const overviewTab = css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  margin-top: 22.48px;
  height: 47.35px;
  margin-left: 29.72px;
  margin-right: 15.24px;
  border-top: 1px solid #313338;
  border-bottom: 1px solid #313338;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  scrollbar-width: none;
`;
export const overviewTabItem = ({ isActive }: any) => css`
  ${t14};
  color: ${isActive ? "#fff" : "#80848E"};
  margin-right: 20px;
  white-space: nowrap;
  width: max-content;
  position: relative;
  cursor: pointer;
  &:after {
    bottom: -14.63px;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background-color: #00e0fd;
    height: 4px;
    width: auto;
    display: ${isActive ? "block" : "none"};
  }
`;
export const overviewText = css`
  white-space: pre-wrap;
  ${t16};
  ${grey};
  margin-left: 29px;
  padding-left: 30.2px;
  margin-top: 18.9px;
  padding-bottom: 12.77px;
  border-bottom: 1px solid #313338;
  margin-right: 24.3px;
`;
export const overviewTitle = css`
  ${h20};
  ${white};
  margin-left: 29.72px;
  margin-top: 11.83px;
`;
export const scrollContainer = css`
  padding-bottom: 100px;
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background-color: #111113;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #38383f;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #38383f;
  }
  scrollbar-width: thin;
  scrollbar-color: #38383f #111113;
  &::-webkit-scrollbar-track {
    background-color: #111113;
  }
`;
export const overviewContent = css`
  white-space: pre-wrap;
  ${t14};
  ${grey};
  margin-left: 29.91px;
  margin-top: 10.98px;
  margin-right: 48.55px;
`;
export const showMore = css`
  color: #00e0fd;
  margin-left: 29.85px;
  ${t18};
  margin-top: 14.4px;
  color: #00e0fd;
`;
export const viewerBox = css`
  display: flex;
  align-items: center;
  margin-left: 29.85px;
  margin-top: 14.4px;
`;
export const viewerItem = css`
  white-space: nowrap;
`;
export const dayText = css`
  ${t18};
  ${grey};
  margin-right: 115px;
`;
export const viewText = css`
  ${t18};
  ${grey};
  margin-right: 133px;
`;
export const saveText = css`
  ${t18};
  ${grey};
`;
export const daynum = css`
  ${t18};
  ${white};
`;
export const viewnum = css`
  ${t18};
  ${white};
`;
export const savenum = css`
  ${t18};
  ${white};
`;
export const descriptionText = css`
  ${t14};
  ${grey};
  white-space: pre-wrap;
  margin-left: 29.85px;
  margin-top: 24.15px;
`;
export const caculatorTitle = css`
  ${h20};
  ${white};
  margin-top: 27.9px;
  margin-left: 20.84px;
`;
export const caculateTab = css`
  display: flex;
  align-items: center;
  margin-top: 20.05px;
  margin-left: 20.84px;
  border-bottom: 1px solid #313338;
  padding-bottom: 13.69px;
  margin-right: 18.85px;
`;
export const cateTabItem = ({ isActive }: any) => css`
  cursor: pointer;
  ${t18};
  color: ${isActive ? "#fff" : "#80848E"};
  margin-right: 77.9px;
  white-space: nowrap;
  width: max-content;
  position: relative;
  &:after {
    bottom: -12px;
    content: "";
    position: absolute;
    left: 0;
    right:0;
    width:auto;
    background-color: #00e0fd;
    height: 4px;
    display: ${isActive ? "block" : "none"};
  }
`;
export const inputBox = css`
  display: grid;
  column-gap: 22px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 20.84px;
  margin-right: 18.85px;
  margin-top: 26.5px;
  padding-bottom: 60px;
  border-bottom: 1px solid #313338;
  box-sizing: border-box;
`;
export const inputLabel = css`
  ${t14};
  ${grey};
`;
export const inputGridItem = css`
  display: flex;
  flex-direction: column;
`;
export const inputText = css`
  ${t16};
  ${grey};
  width: 100%;
  height: 40px;
  margin-top: 6.6px;
  border: 1px solid #393a3f;
  background-color: #1a1a1a;
  border-radius: 4px;
  padding: 0 10px;
  box-sizing: border-box;
`;
export const inputPre = css`
  & .MuiTypography-root {
    ${t16};
    ${grey};
  }
`;
export const inutpos = css`
  & .MuiTypography-root {
    ${t12};
    ${grey};
  }
`;
export const usaryModal = css`
  left: 0;
  right: 0;
  margin: auto;
`;
export const fixedModal = css`
  left: 0;
  right: 0;
  margin: auto;
`;
export const ownModal = css`
  left: 0;
  right: 0;
  margin: auto;
`;
export const lendModal = css`
  left: 0;
  right: 0;
  margin: auto;
`;
export const buyModal = css`
  left: 0;
  right: 0;
  margin: auto;
`;
export const sellModal = css`
  left: 0;
  right: 0;
  margin: auto;
`;
export const percentPos = css`
  & .MuiTypography-root {
    ${t16};
    ${grey};
  }
`;
export const bottomInputBox = css`
  display: grid;
  column-gap: 21.96px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 20.84px;
  margin-right: 18.85px;
  margin-top: 41px;
`;
export const scrollBox = css`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 278px;
`;
export const saveBtn = css`
  white-space: nowrap;
  margin: auto auto 82.8px auto;
  ${t20};
  ${white};
  width: 145px;
  height: 40px;
`;

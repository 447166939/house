import { css } from "@emotion/react";
import { grey, h20, h30, t12, t14, t16, t18, t20, white } from "@/style/baseStyle";

export const container = css`
  width: 59.55rem;
  height: 36.55rem;
  background-color: #111113;
  position: fixed;
  height: auto;
  inset: 0;
  margin: 1.9rem auto;
  border-radius: 0.72rem;
  display: flex;
  flex-direction: column;
`;
export const title = css`
  ${t20};
  ${white};
  margin-top: 0.87rem;
  margin-left: 1.19rem;
`;
export const closeBtn = css`
  position: absolute;
  top: 0.87rem;
  right: 1.32rem;
  padding: 0;
`;
export const closeIcon = css`
  width: 0.69rem;
  height: auto;
`;
export const content = css`
  flex: 1;
  display: flex;
  overflow-y: hidden;
`;
export const picBox = css`
  width: 17.44rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.31rem;
  column-gap: 0.25rem;
  overflow-y: scroll;
  margin-top: 0.75rem;
  flex-shrink: 0;
  &::-webkit-scrollbar {
    background-color: #111113;
    width: 0.29rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #38383f;
    border-radius: 0.29rem;
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
  &:first-child {
    grid-column: 1/3;
  }
`;
export const midBox = css`
  width: 20.79rem;
  display: flex;
  flex-direction: column;
`;
export const caculatorBox = css`
  width: 20.34rem;
  margin-right: 0.447rem;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #1e1f22;
  border-radius: 0.726rem;
  margin-top: 0.79rem;
  margin-bottom: 0.501rem;
`;
export const navBox = css`
  display: flex;
  align-items: center;
  margin-left: 1.08rem;
  margin-top: 1.08rem;
  position: relative;
  margin-right: 0.88rem;
  &:after {
    content: "";
    position: absolute;
    height: 0.036rem;
    display: block;
    margin: 0 auto;
    background-color: #313338;
    margin-top: 0.13rem;
    inset: 0;
    top: 100%;
  }
`;
export const logo = css`
  width: 5.74rem;
  height: auto;
`;
export const heartIcon = css`
  width: 0.64rem;
  height: auto;
`;
export const heartBtn = css`
  margin-left: auto;
`;
export const shareIcon = css`
  width: 0.61rem;
  height: auto;
`;
export const eyeIcon = css`
  width: 0.61rem;
  height: auto;
`;
export const hamburgerIcon = css`
  width: 0.57rem;
  height: auto;
`;
export const moneyText = css`
  ${h30};
  ${white};
  margin-left: 1.07rem;
  margin-top: 0.3rem;
`;
export const addressText = css`
  ${t18};
  ${grey};
  margin-left: 1.07rem;
`;
export const saleBox = css`
  display: flex;
  align-items: center;
  margin-top: 0.52rem;
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
    width: 0.272rem;
    height: 0.272rem;
    border-radius: 50%;
    left: -0.372rem;
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
  margin-left: 1.15rem;
  display: flex;
  align-items: center;
`;
export const paymentBox = css`
  display: flex;
  align-items: center;
  margin-top: 0.52rem;
`;
export const paymentLabel = css`
  ${t18};
  ${white};
  margin-left: 1.079rem;
`;
export const paymentText = css`
  ${t18};
  color: #00e0fd;
  margin-left: 1.019rem;
`;
export const buttonBox = css`
  display: flex;
  align-items: center;
  margin-top: 0.95rem;
`;
export const createBtn = css`
  width: 5.23rem;
  height: 1.38rem;
  ${t20};
  margin-left: 1.084rem;
`;
export const backupBtn = css`
  width: 4.36rem;
  height: 1.38rem;
  ${t20};
  color: #000;
  margin-left: 1.14rem;
`;
export const documentBtn = css`
  width: 4.36rem;
  height: 1.38rem;
  ${t20};
  margin-left: 1.14rem;
`;
export const overviewTab = css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  margin-top: 0.816rem;
  height: 1.72rem;
  margin-left: 1.079rem;
  margin-right: 0.88rem;
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
  margin-right: 0.735rem;
  white-space: nowrap;
  width: max-content;
  position: relative;
  &:after {
    bottom: -0.5rem;
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00e0fd;
    height: 0.145rem;
    width: 2.95rem;
    display: ${isActive ? "block" : "none"};
  }
`;
export const overviewText = css`
  white-space: pre-wrap;
  ${t16};
  ${grey};
  margin-left: 1.079rem;
  padding-left: 1.07rem;
  margin-top: 0.68rem;
  padding-bottom: 0.46rem;
  border-bottom: 1px solid #313338;
  margin-right: 0.59rem;
`;
export const overviewTitle = css`
  ${h20};
  ${white};
  margin-left: 1.079rem;
  margin-top: 0.429rem;
`;
export const scrollContainer = css`
padding-bottom:100px;
flex:1;
overflow-y:auto;
&::-webkit-scrollbar {
  background-color: #111113;
  width: 0.29rem;
}
&::-webkit-scrollbar-thumb {
  background-color: #38383F;
  border-radius: 0.29rem;
}
&::-webkit-scrollbar-thumb:hover {
  background-color: #38383F;
}
  scrollbar-width: thin;
  scrollbar-color: #38383F #111113;
&::-webkit-scrollbar-track {
  b
`;
export const overviewContent = css`
  white-space: pre-wrap;
  ${t14};
  ${grey};
  margin-left: 1.079rem;
  margin-top: 0.398rem;
  margin-right: 1.76rem;
`;
export const showMore = css`
  color: #00e0fd;
  margin-left: 1.079rem;
  ${t18};
  margin-top: 0.39rem;
  color: #00e0fd;
`;
export const viewerBox = css`
  display: flex;
  align-items: center;
  margin-left: 1.079rem;
`;
export const viewerItem = css`
  margin-right: 4.19rem;
  white-space: nowrap;
`;
export const dayText = css`
  ${t18};
  ${grey};
`;
export const viewText = css`
  ${t18};
  ${grey};
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
  margin-left: 1.079rem;
  margin-top: 0.877rem;
`;
export const caculatorTitle = css`
  ${h20};
  ${white};
  margin-top: 1.014rem;
  margin-left: 0.757rem;
`;
export const caculateTab = css`
  display: flex;
  align-items: center;
  margin-top: 0.728rem;
  margin-left: 0.757rem;
  margin-right: 0.394rem;
  border-bottom: 1px solid #313338;
  padding-bottom: 0.497rem;
`;
export const cateTabItem = ({ isActive }: any) => css`
  cursor: pointer;
  ${t18};
  color: ${isActive ? "#fff" : "#80848E"};
  margin-right: 2.833rem;
  white-space: nowrap;
  width: max-content;
  position: relative;
  &:after {
    bottom: -0.5rem;
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00e0fd;
    height: 0.145rem;
    width: 2.95rem;
    display: ${isActive ? "block" : "none"};
  }
`;
export const inputBox = css`
  display: grid;
  column-gap: 1.292rem;
  row-gap: 0.8rem;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 0.757rem;
  margin-right: 0.684rem;
  margin-top: 0.965rem;
  padding-bottom: 1.4rem;
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
  height: 1.2rem;
  border: 1px solid #393a3f;
  background-color: #1a1a1a;
  border-radius: 0.145rem;
  padding: 0 0.378rem;
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
export const bottomInputBox = css`
  display: grid;
  column-gap: 1.292rem;
  row-gap: 0.879rem;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 0.757rem;
  margin-right: 0.684rem;
  margin-top: 1.4rem;
`;
export const saveBtn = css`
  white-space: nowrap;
  margin: auto auto auto auto;
  ${t20};
  ${white};
  width: 5.23rem;
  height: 1.38rem;
`;

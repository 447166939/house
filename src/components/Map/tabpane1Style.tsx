import { css } from "@emotion/react";
import { grey, h17, h19, h20, t12, t14, t16, white } from "@/style/baseStyle";

export const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const title = css`
  ${h20};
  ${white};
  margin-top: 0.89rem;
  margin-left: 0.97rem;
`;
export const head = css`
  display: flex;
  align-items: center;
  padding-left: 0.94rem;
  padding-right: 1.16rem;
`;
export const cateBox = css`
  margin-left: auto;
`;
export const downIcon = css`
  width: 0.48rem;
  height: auto;
`;
export const selectInput = css`
  width: 5.45rem;
  height: 100%;
  border: 1px solid #393a3f;
  padding-left: 0.36rem;
  ${t16};
  ${white};
`;
export const result = css`
  ${t16};
  ${grey};
`;
export const gridContainer = css`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;
  padding: 0 0.94rem 0.94rem 0.94rem;
  overflow: scroll;
  margin-top: 0.67rem;
`;
export const list = css`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.65rem;
  row-gap: 0.65rem;
`;
export const card = css`
  width: 100%;
  background-color: #38383f;
  border-radius: 0.14rem;
  position: relative;
`;
export const listTitle = css`
  ${h17};
  ${white};
  margin-left: 0.38rem;
`;
export const listAdress = css`
  ${t14};
  ${grey};
  margin-left: 0.3rem;
`;
export const addressIcon = css`
  width: 0.65rem;
  height: auto;
`;
export const address = css`
  display: flex;
  align-items: center;
  margin-left: 0.34rem;
  margin-top: 0.16rem;
`;
export const listFooter = css`
  display: flex;
  align-items: center;
  margin-left: 0.35rem;
  margin-right: 0.35rem;
  justify-content: space-between;
  margin-top: 0.32rem;
`;
export const bedroomIcon = css`
  width: 0.49rem;
  height: auto;
`;
export const bedroomText = css`
  ${t12};
  ${grey};
  margin-left: 0.23rem;
`;
export const bathroomIcon = css`
  width: 0.47rem;
  height: auto;
`;
export const footerItem = css`
  display: flex;
  align-items: center;
`;
export const bathroomText = css`
  ${t12};
  ${grey};
  margin-left: 0.23rem;
`;
export const houseIcon = css`
  width: 0.46rem;
  height: auto;
`;
export const houseText = css`
  ${t12};
  ${grey};
  margin-left: 0.23rem;
`;
export const splitLine = css`
  background-color: #4f4f4f;
  width: 10.46rem;
  height: 0.036rem;
  display: block;
  margin: auto;
  margin-top: 0.6rem;
`;
export const moneyBox = css`
  display: flex;
  align-items: center;
  height: 1.99rem;
  padding: 0 0.4rem;
  justify-content: space-between;
`;
export const moneyText = css`
  ${h19};
  color: #00e1fe;
`;
export const viewMoreBtn = css`
  width: 3.08rem;
  height: 1.16rem;
  ${t16};
  padding: 0;
`;
export const dateBox = css`
  position: absolute;
  top: 0.36rem;
  left: 0.38rem;
  padding: 0.1rem 0.36rem;
  border-radius: 0.36rem;
  height: 0.9rem;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  ${t14};
  ${white};
  user-select: none;
`;
export const likeBtn = css`
  position: absolute;
  top: 0.36rem;
  right: 0.43rem;
`;
export const unlikeBtn = css`
  position: absolute;
  top: 0.36rem;
  right: 0.43rem;
`;
export const likeIcon = css`
  width: 0.98rem;
  height: auto;
`;
export const unlikeIcon = css`
  width: 0.98rem;
  height: auto;
`;

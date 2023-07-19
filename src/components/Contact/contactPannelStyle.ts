import { css } from "@emotion/react";
import { grey, t14, t16, t20, white } from "@/style/baseStyle";

export const container = css`
  width: 15.22rem;
  background-color: #222226;
  display: flex;
  flex-direction: column;
`;
export const contactName = css`
  ${t20};
  ${white};
  margin-top: 2.51rem;
  align-self: center;
`;
export const remarkBox = css`
  background-color: #1a1a1d;
  width: 13.6rem;
  border-radius: 0.36rem;
  align-self: center;
  margin-top: 0.35rem;
  position: relative;
  padding-top: 0.36rem;
`;
export const remarkAvatar = css`
  position: absolute;
  left: 0.73rem;
  top: -1.4rem;
  width: 2.8rem;
  height: 2.8rem;
`;
export const remarkTextarea = css`
  ${t14};
  ${grey};
  min-height: 3.16rem;
  width: 100%;
  padding-left: 1.23rem;
`;
export const remarkTag = css`
  background-color: #323232;
  border-radius: 0.14rem;
  margin-right: 0.5rem;
  padding: 0 0.29rem;
  ${t16};
  ${white};
`;
export const tagBox = css`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.08rem;
  margin-bottom: 1.23rem;
`;
export const midBox = css`
  background-color: #1a1a1d;
  width: 13.6rem;
  border-radius: 0.36rem;
  align-self: center;
  margin-top: 0.72rem;
  position: relative;
  padding-top: 1.09rem;
  padding-left: 1.35rem;
  display: flex;
  flex-direction: column;
  padding-bottom:0.95rem;
`;
export const potts = css``;
export const pottsTitle = css`
  ${t16};
  ${white};
`;
export const pottsText = css`
${t16};
${grey};
`;
export const date=css`
margin-top:1.06rem;`
export const dateTitle=css`
${t16};
${white};
`
export const dateText=css`
${t16};
${grey};
`
export const note=css`
margin-top:1.06rem;
`
export const noteTitle=css`
${t16};
${white};
`
export const noteText=css`
${t16};
${grey};
`
export const friendsBox=css`
background-color: #1a1a1d;
  width: 13.6rem;
  border-radius: 0.36rem;
  align-self: center;
  margin-top: 0.72rem;
  position: relative;
  padding-top: 0.5rem;
  padding-left: 1.35rem;
  display: flex;
  padding-bottom:0.5rem;
  align-items:center;
`
export const friendsText=css`
${t16};
${white};
`
export const friendRightBtn=css`margin-left:auto;`
export const serverBox=css`
background-color: #1a1a1d;
  width: 13.6rem;
  border-radius: 0.36rem;
  align-self: center;
  margin-top: 0.72rem;
  position: relative;
  padding-top: 0.5rem;
  padding-left: 1.35rem;
  display: flex;
  padding-bottom:0.5rem;
  align-items:center;
`
export const serverText=css`
${t16};
${white};
`
export const rightIcon=css`
width:0.39rem;
height:auto;
`
export const rightIconBtn=css`margin-left:auto;`

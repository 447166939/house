import { css } from "@emotion/react";
import { grey, t12, t16, white } from "@/style/baseStyle";

export const container = css`
  background-color: #111113;
  width: 100%;
`;
export const head = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.72rem;
  padding-left: 1.59rem;
  padding-bottom: 0.6rem;
  padding-right: 1.59rem;
`;
export const fileAddIcon = css`
  width: 0.72rem;
  height: auto;
`;
export const headText = css`
  ${t16};
  ${grey};
`;
export const fileList = css`
  display: flex;
  flex-wrap: wrap;
  padding-left: 1.67rem;
`;
export const fileItem = css`
position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.99rem;
  margin-bottom: 1.05rem;
  padding:14.8px 11.13px;
  cursor: pointer;
  border-radius:10px;
  box-sizing:border-box;
  &:hover{
  background-color:#1F1F22;
  & [data-btn]{
  display:block;
  }
  }
`;
export const menuBtn = css`
  position: absolute;
  margin-top:-14.8px;
  margin-left:-11.13px;
  right:0;
  top:0;
  display:none;
`;
export const elliseIcon = css`
  width: 0.79rem;
  height: auto;
`;
export const menus = ({ isActive }: any) => css`
margin-top:14.8px;
  display: ${isActive ? "flex" : "none"};
  position: absolute;
  width: 158px;
  height: 195px;
  border-radius: 10px;
  background-color: #313136;
  top: 0;
  left:100%;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  justify-content:flex-start;
  box-sizing:border-box;
  padding: 0 12.11px 0 19.14px;
`;
export const recycleItem = css`
  ${t16};
  ${white};
  text-align:left;
  width:100%;
  margin: 12.43px 0 0 0;
  color:#FF5E36;
`;
export const downloadItem= css`
  ${t16};
  ${white};
  text-align:left;
  width:100%;
  border-bottom:1px solid #3B3B40;
  margin: 19.23px 0 0 0;
  padding-bottom:14.64px;
`;
export const renameItem = css`
  ${t16};
  ${white};
  text-align:left;
  width:100%;
  margin: 16.83px 0 16.08px 0;
`;
export const moveItem = css`
  ${t16};
  ${white};
  text-align:left;
  width:100%;
  padding-bottom:17.25px;
  border-bottom:1px solid #3B3B40;
`;
export const folderIcon = css`
  width: 3.74rem;
  height: auto;
`;
export const fileTitle = css`
  ${t16};
  ${white};
  margin-top: 0.32rem;
`;
export const fileDate = css`
  ${t12};
  ${grey};
`;

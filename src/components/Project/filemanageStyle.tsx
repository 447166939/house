import { css } from "@emotion/react";
import { grey, t12, t16, white } from "@/style/baseStyle";

export const container = css`
  background-color: #111113;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 0;
  overflow: hidden;
`;
export const resizer = css`
  position: absolute;
  cursor: row-resize;
  bottom: 5px;
  width: 100%;
  height: 10px;
  z-index: 20000;
`;
export const head = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 19px;
  padding-left: 44px;
  padding-bottom: 16.7px;
  padding-right: 44px;
`;
export const fileAddIcon = css`
  width: 20px;
  height: auto;
`;
export const headText = css`
  ${t16};
  ${grey};
`;
export const fileList = css`
  display: flex;
  flex-wrap: wrap;
  padding-left: 44px;
`;
export const fileItem = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 31.85px;
  margin-bottom: 29px;
  padding: 14.8px 11.13px;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: #1f1f22;
    & [data-btn] {
      display: block;
    }
  }
`;
export const menuBtn = css`
  position: absolute;
  margin-top: -14.8px;
  margin-left: -11.13px;
  right: 0;
  top: 0;
  display: none;
`;
export const elliseIcon = css`
  width: 22px;
  height: auto;
`;
export const menus = ({ isActive }: any) => css`
  margin-top: 14.8px;
  display: ${isActive ? "flex" : "none"};
  position: absolute;
  width: 158px;
  height: 195px;
  border-radius: 10px;
  background-color: #313136;
  top: 0;
  left: 100%;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0 12.11px 0 19.14px;
`;
export const recycleItem = css`
  ${t16};
  ${white};
  text-align: left;
  width: 100%;
  margin: 12.43px 0 0 0;
  color: #ff5e36;
`;
export const downloadItem = css`
  ${t16};
  ${white};
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #3b3b40;
  margin: 19.23px 0 0 0;
  padding-bottom: 14.64px;
`;
export const renameItem = css`
  ${t16};
  ${white};
  text-align: left;
  width: 100%;
  margin: 16.83px 0 16.08px 0;
`;
export const moveItem = css`
  ${t16};
  ${white};
  text-align: left;
  width: 100%;
  padding-bottom: 17.25px;
  border-bottom: 1px solid #3b3b40;
`;
export const folderIcon = css`
  width: 102px;
  height: auto;
`;
export const fileTitle = css`
  ${t16};
  ${white};
  margin-top: 8.9px;
`;
export const fileDate = css`
  ${t12};
  ${grey};
`;

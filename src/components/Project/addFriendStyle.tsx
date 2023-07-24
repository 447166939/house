import { css } from "@emotion/react";
import {grey, t16} from "@/style/baseStyle";

export const container = css`
  position: absolute;
  width: 19.731rem;
  height: 23.364rem;
  border-radius: 0.363rem;
  background-color: #313136;
  z-index: 20000;
  right: 2.4rem;
  top: -6.4rem;
`;
export const header=css`
display:flex;
align-items:center;
padding: 1.235rem 00.819rem 0 1.057rem;
`
export const searchInputWrapper = css`
  width: 10.901rem;
  height: 1.598rem;
  background-color: #1e1f22;
  margin-left: 0.67rem;
  border-radius: 2.47rem;
  display: flex;
  align-items: center;
`;
export const searchInput = css`
  flex: 1;
  ${t16};
  ${grey};
  padding-left: 0.65rem;
`;
export const searchIcon = css`
  width: 0.72rem;
  height: auto;
`;
export const addPersonIcon=css`
width:1.09rem;
height:auto;
`

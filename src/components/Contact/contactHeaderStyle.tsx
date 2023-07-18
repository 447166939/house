import { css } from "@emotion/react";
import {t20} from "@/style/baseStyle";

export const container = css`
  background-color: #111113;
  height: 2.54rem;
  display: flex;
  align-items: center;
  width:100%;
  cursor:pointer;
  padding-left:1.48rem;
`;
export const tabItem=({isActive}:any)=>css`
position:relative;
${t20};
color:${isActive ? '#fff' :'#80848E'};
margin-right:2.32rem;
&:after{
position:absolute;
content:'';
background-color:#00E0FD;
width:3.63rem;
height:0.1rem;
left:50%;
transform:translateX(-50%);
display:${isActive ? 'block' :'none'};
}
`

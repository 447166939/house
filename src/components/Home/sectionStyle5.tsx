import { css } from "@emotion/react";

export const container = css`
background: #F4F6F8;
padding-top:103px;
padding-bottom:65px;
display:flex;
flex-direction:column;
`;
export const title=css`
font-size:40px;
font-weight:700;
color:#000;
text-align:center;
`
export const gridContainer=css`
margin-top:148px;
column-gap:25px;
grid-template-columns:repeat(3,1fr);
margin-left:260px;
margin-right:260px;
display:grid;
`
export const gridItem=css`
border-radius:20px;
background-color:#fff;
display:flex;
flex-direction:column;
position:relative;
padding: 65px 36px 40px 41px;
`
export const itemText=css`
color:rgba(115, 125, 140, 1);
text-align: justify;
font-size:14px;
font-weight:400;
position:relative;
&:after{
content:'';
position:absolute;
left:0;
right:0;
bottom:-14.6px;
height:1px;
background-color:rgba(221, 224, 229, 1);
}
`
export const cardFooter=css`
display:flex;
align-items:center;
margin-top:30.5px;
`
export const footerLeft=css`

`
export const rate=css`
margin-left:auto;
`
export const star=css`
font-size:16px;
`
export const nameText=css`
font-size:16px;
font-weight:400;
color:rgba(42, 50, 60, 1);
`
export const jobText=css`
font-size:14px;
font-weight:400;
color:rgba(115, 125, 140, 1);
`
export const dotIcon=css`
margin:97px auto 0;
`

import {css} from "@emotion/react";
import {grey, t14, t16, t20, white} from "@/style/baseStyle";

export const container=css`
background-color:#1E1F22;
width:41.46rem;
display:flex;
flex-direction:row;
flex-wrap:no-wrap;
flex:1;
`
export const left=css`
flex:1;
`
export const right=css`
width:9.23rem;
background-color:green;
flex-shrink:0;
`
export const chatTitle=css`
${t20};
${white};
`
export const chatName=css`
${t16};
${white};
`
export const chatmsg=css`
${t14};
${grey};
`
export const chatList=css`

`
export const listItem=css`
display:flex;
`
export const listItemText=css`

`
export const listItemTitle=css`${t16};
${white};
`
export const listItemContent=css`
${t14};
${grey};
`
export const contactList=css`

`
export const contactTitle=css`

`
export const contactItem=css`
display:flex;
`

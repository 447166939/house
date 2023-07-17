import {css} from "@emotion/react";

export const container=css`
width:15.23rem;
background-color:#38383F;
min-height:100%;
`
export const pannelTabs=css`
display:flex;
align-items:center;
`
export const pannelTabItem=({isActive}:any)=>css`
color:${isActive ? '#fff' :'#686B74'};
`

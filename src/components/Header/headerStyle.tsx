import { css } from '@emotion/react';
export const headerLogo=css`
width:6.46rem;
height:auto;
`
export const appBar=css`
background-color:#38383F;
`
export const navBox=css`
margin-left:5.05rem;
`
export type linkStyle={isActive:boolean}
export const navItem=
    (props:linkStyle) =>
        css`
        margin-right:3.19rem;
    color: ${props.isActive ? '#00E1FE':'#fff'};
  `
export const cnIcon=css`
width:0.95rem;
height:auto;
margin-left:1.16rem;
cursor:pointer;
`
export const helpIcon=css`
cursor:pointer;
margin-left:1.16rem;
`
export const avatar=css`
margin-left:1.16rem;
cursor:pointer;
`

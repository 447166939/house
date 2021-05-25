import React,{Fragment,useState,useCallback} from 'react'
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx'
const useStyles = makeStyles(theme => ({
    btn: {
        color: '#2699FB',
        position: 'relative',
        background: 'inherit',
        outline: 'none',
        border: 'none',
        boxShadow: '-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA',
        borderRadius: '8px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        height: '40px',
        padding: theme.spacing(2),
        marginRight:'32px',
      /* '&:hover:after': {
            opacity: 1,
            top: 0,
            left: 0,
            transform: 'translateX(0)',
            transitionProperty: 'transform, opacity',
            transitionDuration: '0.7s, 0.15s',
            transitionTimingFunction: 'ease'
        },
        '&:after': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200%',
            height: '100%',
            opacity: 0,
            transform: 'translateX(-100%)',
            backgroundColor: 'rgba(255, 255, 255, 0.13)',
            background: 'linear-gradient(to right,rgba(255, 255, 255, 0.13) 0%,rgba(255, 255, 255, 0.13) 77%,rgba(255, 255, 255, 0.5) 92%,rgba(255, 255, 255, 0.3) 100%)',
        }*/
    },
    active: {
        color:'#CBD5E5',
        "&:after": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            boxShadow: '2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset',
            borderRadius: '8px',
        }
    }
}));
const Tabs=props=>{
    const {menus=[],onChange=function (){}}=props
    const classes=useStyles();
    const [idx,setIdx]=useState()
    const handleClick=useCallback((index)=>{
        setIdx(index)
        onChange(index)
    },[idx])
    return  (
        menus.map((item,index)=>{
            return (
                <ButtonBase key={index} onClick={handleClick.bind(null,index)} className={clsx(classes.btn,{[classes.active]:idx===index})} disableRipple>{item}</ButtonBase>
            )
        })
    )
}
export default Tabs
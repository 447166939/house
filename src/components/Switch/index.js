import React,{useState,useCallback} from 'react'
import clsx from 'clsx'
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    swContainer: {
        width: '73px',
        height: '36px',
        color: '#2699FB',
        position: 'relative',
        background: 'inherit',
        outline: 'none',
        border: 'none',
        boxShadow: '-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA',
        borderRadius: '18px',
        textTransform: 'uppercase',
        display:'flex',
        "&:after": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            boxShadow: '2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset',
            borderRadius: '18px',
        }
    },
    thumb:{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        lineHeight:'40px',
        color: '#2699FB',
        background: '#fff',
        position:'absolute',
        top:0,
        bottom:0,
        margin:'auto',
        cursor:'pointer',
        textAlign:'center',
        zIndex:10000,
    },
    off:{
        left:0
    },
    on:{
        right:0
    }

}))
const MySwitch = props => {
    const classes = useStyles()
    const [on,setOn]=useState(false)
    const handleClick=useCallback(()=>{
        console.log('hand')
        setOn(!on)
    },[on])
    return (
        <div onClick={handleClick} className={clsx(classes.swContainer)}>
          <div  className={clsx(classes.thumb,{[classes.on]:on!==false},{[classes.off]:on===false})}>{on ? '' : '中'}</div>
        </div>
    )
}
export default MySwitch
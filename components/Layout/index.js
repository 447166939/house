import React from 'react'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.common.white,
        height: '100%'
    }
}));
const Layout=({children})=>{
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>
}
export default Layout
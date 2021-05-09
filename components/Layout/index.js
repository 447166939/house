import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@/components/Button'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        position:'relative',
        color:theme.palette.common.black,
        background:theme.custom.background
    },
    offset: theme.mixins.toolbar,
    servBtn:{
            width: '144px',
            marginRight: '48px'

    },
    techBtn:{
        width:'144px',
        marginRight:'48px'
    },
    blogBtn:{
        width:'144px',
        marginRight:'48px'
    }
}));
const Layout=({children})=>{
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar position={'fixed'}>
            <Toolbar>
                <Button className={classes.servBtn}>services</Button>
                <Button className={classes.techBtn}>technologies</Button>
                <Button className={classes.blogBtn}>blog&news</Button>
            </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
            {children}
           </div>
}
export default Layout
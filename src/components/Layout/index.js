import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tabs from '@/components/Tabs'
import Button from '@/components/Button'
import Switch from '@/components/Switch'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import Footer from '@/components/Footer'

const useStyles = makeStyles(theme => ({
    root: {
        position:'relative',
        color:theme.palette.common.black,
        display: 'flex',
        flexDirection:'column',
        minHeight:'100vh',
        paddingBottom:'1px',
        zIndex: 1000,
    },
    appBar:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
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
    },
    searchBtn:{
        width:'41px',
        marginRight:'26px',
        marginLeft:'129px',
    },
    nameText:{
        color: '#2699FB',
        marginLeft: theme.spacing(2),
        fontSize: '25px',
        fontWeight:'bold',
        marginRight:'200px',
    },
    content:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        position:'relative',
        overflow:'hidden',
        paddingBottom: '500px',
    },
    bg:{
        position:'absolute',
        background:theme.custom.background,
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:-10000,
    },
}));
function LogoIcon(props) {
    return <SvgIcon viewBox="0 0 53 53">
        <svg xmlns="http://www.w3.org/2000/svg" width="53.193" height="53.193" viewBox="0 0 53.193 53.193">
            <g id="组_2569" data-name="组 2569" transform="translate(0 0)">
                <g id="组_2568" data-name="组 2568" transform="translate(0 0)">
                    <path id="路径_1646" data-name="路径 1646" d="M322.634,257.3a10.591,10.591,0,0,1-8.121,3.1h-10.35a7.091,7.091,0,0,0-7.092,7.092v10.35a7.091,7.091,0,0,0,7.09,7.09h10.352a7.091,7.091,0,0,0,7.09-7.092V267.49a10.641,10.641,0,0,1,11.221-11.222h10.35a7.087,7.087,0,0,0,7.09-7.09v-10.35a7.089,7.089,0,0,0-7.09-7.09h-10.35a7.092,7.092,0,0,0-7.092,7.09v10.35A10.588,10.588,0,0,1,322.634,257.3Z" transform="translate(-297.071 -231.737)" fill="#349ffb"/>
                    <path id="路径_1648" data-name="路径 1648" d="M12.374,0h0a12.374,12.374,0,1,1,0,24.748h0A12.374,12.374,0,0,1,12.374,0Z" transform="translate(0 0)" fill="#349ffb"/>
                    <path id="路径_1647" data-name="路径 1647" d="M10.545,3.963a3.814,3.814,0,0,1,6.627,0l8.6,15.082a3.814,3.814,0,0,1-3.313,5.7H5.259a3.814,3.814,0,0,1-3.313-5.7Z" transform="translate(26.915 28.445)" fill="#349ffb"/>
                </g>
            </g>
        </svg>
    </SvgIcon>
}
const Layout=({children})=>{
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar className={classes.appBar}  position={'fixed'}>
            <Toolbar>
                <LogoIcon/>
                <span className={classes.nameText}>Module X</span>
                <Tabs menus={['services','technologies','blog&news']}></Tabs>
                <Button className={classes.searchBtn}><SearchIcon /></Button>
                <Switch />
            </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
        <div className={classes.content}>
            <div className={classes.bg}></div>
            {children}
        </div>
            <Footer />
           </div>
}
export default Layout
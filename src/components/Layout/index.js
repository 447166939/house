import React,{useState,useCallback} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tabs from '@/components/Tabs'
import Button from '@/components/Button'
import Switch from '@/components/Switch'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import Footer from '@/components/Footer'
import Drawer from '@/components/Drawer'
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import anime from 'animejs'
import { IconButton } from '@material-ui/core';
 import upSvg from '@/assets/up.svg'
import chatSvg from '@/assets/chat.svg'
const UPIcon=props=>{
     return (
         <SvgIcon component={upSvg} viewBox={'0 0 21 26'}/>
     )
}
const ChatIcon=props=>{
     return (
         <SvgIcon component={chatSvg} viewBox={'0 0 26.6 22.3'}/>
     )
}

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
    toolbar:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingLeft:'280px',
        paddingRight:'270px'
    },
    toolbarGrp1:{
        display:'flex',
        alignItems:'center',
    },
    toolbarGrp2:{
        display:'flex',
        alignItems:'center',
    },
    toolbarGrp3:{
        display:'flex',
        alignItems:'center',
    },
    drawer:{
       position:'absolute',
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
    serviceContainer:{
        display:'flex',
        justifyContent: 'space-between',
        padding:'107px 280px',
        backgroundColor:'#f7f8fa'
    },
    serviceCol1:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        width:'430px'
    },
    serviceCol2:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    serviceCol3:{
        display:'flex',
        flexDirection:'column',
    },
    serviceCol4:{
        display:'flex',
        flexDirection:'column',
    },
    serviceTitle:{
        color:'#2A2D31',
        fontSize:'20px',
        lineHeight:'50px',
        fontWeight: 'bold',
        position:'relative',
        '&:after': {
            content: "''",
            position: 'absolute',
            width: '60px',
            height: '4px',
            bottom: 0,
            left: 0,
            backgroundColor: '#2699FB',
        }
    },
    serviceCol1Text:{
  fontSize:'16px',
        color:'#2A2D31',
        lineHeight: '24px'
    },
    serviceContactBtnWrapper:{

    },
    serviceContactBtn:{
        color: '#2699FB',
        position: 'relative',
        background: 'inherit',
        outline: 'none',
        border: 'none',
        boxShadow: '-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA',
        borderRadius: '8px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        height: '44px',
        padding: theme.spacing(2),
        width:'207px'
    },
    serviceCol2Btn:{
        color: '#2699FB',
        position: 'relative',
        background: 'inherit',
        outline: 'none',
        border: 'none',
        boxShadow: '-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA',
        borderRadius: '8px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        height: '44px',
        padding: theme.spacing(2),
        width:'224px'
    },
    serviceCol3Link:{
        fontSize:'16px',
        color:'#2A2D31',
        lineHeight:'50px',
    },
    serviceCol4Link:{
        fontSize:'16px',
        color:'#2A2D31',
        lineHeight:'50px',
    },
    upAnchor:{
        position:'fixed',
        bottom:'397px',
        right:'50px',
        backgroundColor:'#fff',
    },
    chatBtn:{
        position:'fixed',
        bottom:'317px',
        right:'50px',
        backgroundColor:'#fff',
    }
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
    const [idx,setIdx]=useState()
    const handleChange=useCallback((index)=>{
        setIdx(index)
    },[])
    const cb=useCallback(()=>{
        var textWrapper = document.querySelector('#serviceCol1Text');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop:false}) .add({
            targets: '#serviceCol1Text .letter',
            translateY: ["1em",0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 500,
            delay: (el, i) => 300 + 30 * i
        })
    },[])
    return <div className={classes.root}>
        <AppBar className={classes.appBar}  position={'fixed'}>
            <Toolbar className={classes.toolbar}>
                <Link href={'/'} className={classes.toolbarGrp1}>
                <LogoIcon/>
                <span className={classes.nameText}>Module X</span>
                </Link>
                <div className={classes.toolbarGrp2}>
                <Tabs onChange={handleChange} menus={['services','technologies','solutions','blog&news']}>
                </Tabs>
                </div>
                <div className={classes.toolbarGrp3}>
                <Button className={classes.searchBtn}><SearchIcon /></Button>
                <Switch />
                </div>
            </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
        <Drawer cb={cb} visible={idx==0}>
            <div className={classes.serviceContainer}>
                <div className={classes.serviceCol1}>
                    <div className={classes.serviceTitle}>Services</div>
                    <div id={'serviceCol1Text'} className={classes.serviceCol1Text}>Our service portfolio covers an entire software development life cycle and meets varied business needs.</div>
                    <div className={classes.serviceContactBtnWrapper}>
                        <ButtonBase className={classes.serviceContactBtn}>CONTACT</ButtonBase>
                    </div>
                </div>
                <div className={classes.serviceCol2}>
                    <div><ButtonBase className={classes.serviceCol2Btn}>Programming Languages</ButtonBase></div>
                    <div><ButtonBase className={classes.serviceCol2Btn}>Advanced Technologies</ButtonBase></div>
                    <div><ButtonBase className={classes.serviceCol2Btn}>Cloud Technologies</ButtonBase></div>
                </div>
                <div className={classes.serviceCol3}>
                    <Link className={classes.serviceCol3Link} href={"#"}>Software Development</Link>
                    <Link className={classes.serviceCol3Link} href={'#'}>Data Analytics</Link>
                    <Link className={classes.serviceCol3Link} href={'#'}>UI/UX Design</Link>
                    <Link className={classes.serviceCol3Link} href={'#'}>Testing And QA</Link>
                </div>
                <div className={classes.serviceCol4}>
                    <Link className={classes.serviceCol4Link} href={"#"}>Infrastructure Services</Link>
                    <Link className={classes.serviceCol4Link} href={'#'}>IT OutSourcing</Link>
                    <Link className={classes.serviceCol4Link} href={'#'}>IT Consulting</Link>
                    <Link className={classes.serviceCol4Link} href={'#'}>IT Support</Link>
                </div>
            </div>
        </Drawer>

        <div className={classes.content}>
            <div className={classes.bg}></div>
            {children}
        </div>
        <IconButton className={classes.upAnchor}><UPIcon/></IconButton>
        <IconButton className={classes.chatBtn}><ChatIcon/></IconButton>
            <Footer />
           </div>
}
export default Layout
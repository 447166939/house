import React from 'react'
import Layout from '@/components/Layout';
import Sider from '@/components/Sider'
import {makeStyles} from '@material-ui/core';
import PageHeader from '@/components/PageHeader'
import Card from '@/components/Card'
import MuiCard from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import { SvgIcon } from '@material-ui/core';
import card1Svg from '@/assets/card1.svg'
import card2Svg from '@/assets/card2.svg'
import card3Svg from "@/assets/card3.svg";
import card4Svg from "@/assets/card4.svg";
import card5Svg from "@/assets/card5.svg";
import card6Svg from "@/assets/card6.svg";
import sf1Svg from "@/assets/sf1.svg";
import sf2Svg from "@/assets/sf2.svg";
import sf3Svg from "@/assets/sf3.svg";
import sf4Svg from "@/assets/sf4.svg";
import sf5Svg from "@/assets/sf5.svg";
import sf6Svg from "@/assets/sf6.svg";
import wcsLeftSvg from '@/assets/wcsLeft.svg'
import wcsRightSvg from '@/assets/wcsRight.svg'

const Card1Icon=props=>(<SvgIcon fontSize={'large'} component={card1Svg} viewBox="0 0 44 44" />)
const Card2Icon=props=>(<SvgIcon fontSize={'large'} component={card2Svg} viewBox="0 0 50 50" />)
const Card3Icon=props=>(<SvgIcon fontSize={'large'} component={card3Svg} viewBox="0 0 50 50" />)
const Card4Icon=props=>(<SvgIcon fontSize={'large'} component={card4Svg} viewBox="0 0 50 50" />)
const Card5Icon=props=>(<SvgIcon fontSize={'large'} component={card5Svg} viewBox="0 0 50 50" />)
const Card6Icon=props=>(<SvgIcon fontSize={'large'} component={card6Svg} viewBox="0 0 50 50" />)
const Sf1Icon=props=>(<SvgIcon fontSize={'large'} component={sf1Svg} viewBox="0 0 46 46" />)
const Sf2Icon=props=>(<SvgIcon fontSize={'large'} component={sf2Svg} viewBox="0 0 48 48" />)
const Sf3Icon=props=>(<SvgIcon fontSize={'large'} component={sf3Svg} viewBox="0 0 46 46" />)
const Sf4Icon=props=>(<SvgIcon fontSize={'large'} component={sf4Svg} viewBox="0 0 40 40" />)
const Sf5Icon=props=>(<SvgIcon fontSize={'large'} component={sf5Svg} viewBox="0 0 40 40" />)
const Sf6Icon=props=>(<SvgIcon fontSize={'large'} component={sf6Svg} viewBox="0 0 44 44" />)
const WcsLeftIcon=props=>(<SvgIcon fontSize={'large'} component={wcsLeftSvg} viewBox="0 0 50 50" />)
const WcsRightIcon=props=>(<SvgIcon fontSize={'large'} component={wcsRightSvg} viewBox="0 0 50 50" />)
const useStyles=makeStyles(theme=>({
    root:{
        paddingLeft:'276px',
        paddingRight:'276px',
        alignSelf:'stretch',
    },
    sectionService:{
      display:'flex',
        marginTop:'20px',
    },
    serviceLeft:{
     width:'320px',
        marginRight:'20px',
    },
    serviceRight:{
    flex:1,
    },
    sdsCard:{
    padding:'40px',
        borderRadius:'10px',
    },
    sdsTitle:{
        fontSize:'30px',
        lineHeight:'50px',
        fontWeight:'bold',
        position:'relative',
        marginBottom:theme.spacing(4),
        '&:after': {
            content: "''",
            position: 'absolute',
            width: '60px',
            height: '4px',
            backgroundColor: '#2699FB',
            bottom: 0,
            left: 0,
        }
    },
    sdsImg:{
        height:'300px',
        background:'url(/sds.png) no-repeat center',
        backgroundSize:'cover',
    },
    sdsText:{
     fontSize:'16px',
     lineHeight: '24px',
     color:'#000'
    },
    wsaCard:{
        borderRadius: '10px',
        marginTop: '20px',
        padding:'40px'
    },
    wsaTitle:{
        fontSize:'30px',
        lineHeight:'50px',
        fontWeight:'bold',
        position:'relative',
        marginBottom:theme.spacing(4),
        '&:after': {
            content: "''",
            position: 'absolute',
            width: '60px',
            height: '4px',
            backgroundColor: '#2699FB',
            bottom: 0,
            left: 0,
        }
    },
    wsaBox:{
        display: 'flex',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    wsaCardItem:{
     width:'30%',
        backgroundColor:'rgba(255,255,255,0.3)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'32px 25px',
        marginBottom:'20px'
    },
    wsaCardImg:{
        width:'91px',
        height:'91px',
        borderRadius:'50%',
        backgroundColor:'#fff',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'26px',
    },
    wsaCardTitle:{
        fontSize:'16px',
        lineHeight:'18px',
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        marginBottom:'21px',
    },
    wsaCardText:{
        fontSize:'14px',
        fontWeight:'24px',
        color:'#000',
        textAlign: 'center',
    },
    wsaCardBtn:{
        color:'#2699FB',
        height:'54px',
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius:'8px',
        marginTop:'27px',
        textAlign:'center',
        padding:'0 35px',
    },
    sfCard:{
        borderRadius:'8px',
        marginTop:'20px',
        padding:'40px'
    },
    sfTitle:{
        fontSize:'30px',
        lineHeight:'50px',
        fontWeight:'bold',
        position:'relative',
        marginBottom:theme.spacing(4),
        '&:after': {
            content: "''",
            position: 'absolute',
            width: '60px',
            height: '4px',
            backgroundColor: '#2699FB',
            bottom: 0,
            left: 0,
        }
    },
    sfCardBox:{
        display:'flex',
        justifyContent:'space-between',
        flexWrap: 'wrap'
    },
    sfCardItem:{
        width:'30%',
        backgroundColor:'rgba(255,255,255,0.3)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'32px 25px',
        marginBottom:'20px'
    },
    sfCardImg:{
        width:'79px',
        height:'79px',
        borderRadius:'50%',
        backgroundColor:'#fff',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'26px',
    },
    sfCardTitle:{
        fontSize:'16px',
        lineHeight:'18px',
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        marginBottom:'21px',
    },
    wcsCard:{
        borderRadius:'8px',
        marginTop:'20px',
        padding:'40px'
    },
    wcsTitle:{
        fontSize:'30px',
        lineHeight:'50px',
        fontWeight:'bold',
        position:'relative',
        marginBottom:theme.spacing(4),
        '&:after': {
            content: "''",
            position: 'absolute',
            width: '60px',
            height: '4px',
            backgroundColor: '#2699FB',
            bottom: 0,
            left: 0,
        }
    },
    wcsStepBox:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    }
}))
const ServicePage=props=>{
    const classes=useStyles()
    return (
        <Layout>
            <div className={classes.root}>
                <PageHeader/>
                <div className={classes.sectionService}>
                    <div className={classes.serviceLeft}>
                        <Sider/>
                    </div>
                    <div className={classes.serviceRight}>
                        <Card className={classes.sdsCard}>
                            <div className={classes.sdsTitle}>Software Development Services</div>
                            <div className={classes.sdsImg}></div>
                            <div className={classes.sdsText}>Software development services cover design, engineering, deployment, support, scaling and evolution of various software types. In IT since 1989, ScienceSoft develops quality software and offers related services – software consulting, cloud migration, app integration, and more. We serve mid and large enterprises and startups across 23+ industries.</div>
                        </Card>
                        <Card className={classes.wsaCard}>
                            <div className={classes.wsaTitle}>WHAT SERVICE ARE YOU LOOKING FOR?</div>
                            <div className={classes.wsaBox}>
                             <MuiCard className={classes.wsaCardItem}>
                                 <div className={classes.wsaCardImg}>
                                     <Card1Icon />
                                 </div>
                                 <div className={classes.wsaCardTitle}>Complete software development outsourcing</div>
                                 <div className={classes.wsaCardText}>
                                     Shouldering complete software development project pipeline or its part to support your business growth.
                                 </div>
                                 <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                             </MuiCard>
                                <MuiCard className={classes.wsaCardItem}>
                                    <div className={classes.wsaCardImg}>
                                        <Card2Icon />
                                    </div>
                                    <div className={classes.wsaCardTitle}>Complete software development outsourcing</div>
                                    <div className={classes.wsaCardText}>
                                        Shouldering complete software development project pipeline or its part to support your business growth.
                                    </div>
                                    <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                                </MuiCard>
                                <MuiCard className={classes.wsaCardItem}>
                                    <div className={classes.wsaCardImg}>
                                        <Card3Icon />
                                    </div>
                                    <div className={classes.wsaCardTitle}>Complete software development outsourcing</div>
                                    <div className={classes.wsaCardText}>
                                        Shouldering complete software development project pipeline or its part to support your business growth.
                                    </div>
                                    <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                                </MuiCard>
                                <MuiCard className={classes.wsaCardItem}>
                                    <div className={classes.wsaCardImg}>
                                        <Card4Icon />
                                    </div>
                                    <div className={classes.wsaCardTitle}>Complete software development outsourcing</div>
                                    <div className={classes.wsaCardText}>
                                        Shouldering complete software development project pipeline or its part to support your business growth.
                                    </div>
                                    <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                                </MuiCard>
                                <MuiCard className={classes.wsaCardItem}>
                                    <div className={classes.wsaCardImg}>
                                        <Card5Icon />
                                    </div>
                                    <div className={classes.wsaCardTitle}>Complete software development outsourcing</div>
                                    <div className={classes.wsaCardText}>
                                        Shouldering complete software development project pipeline or its part to support your business growth.
                                    </div>
                                    <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                                </MuiCard>
                                <MuiCard className={classes.wsaCardItem}>
                                    <div className={classes.wsaCardImg}>
                                        <Card6Icon />
                                    </div>
                                    <div className={classes.wsaCardTitle}>Complete software development outsourcing</div>
                                    <div className={classes.wsaCardText}>
                                        Shouldering complete software development project pipeline or its part to support your business growth.
                                    </div>
                                    <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                                </MuiCard>
                            </div>
                        </Card>
                        <Card className={classes.sfCard}>
                            <div className={classes.sfTitle}>
                                SCIENCESOFT’S FACTS
                            </div>
                            <div className={classes.sfCardBox}>
                                <MuiCard className={classes.sfCardItem}>
                                    <div className={classes.sfCardImg}>
                                        <Sf1Icon/>
                                    </div>
                                    <div className={classes.sfCardTitle}>Web applications</div>
                                </MuiCard>
                                <MuiCard className={classes.sfCardItem}>
                                    <div className={classes.sfCardImg}>
                                        <Sf2Icon/>
                                    </div>
                                    <div className={classes.sfCardTitle}>Mobile apps</div>
                                </MuiCard>
                                <MuiCard className={classes.sfCardItem}>
                                    <div className={classes.sfCardImg}>
                                        <Sf3Icon/>
                                    </div>
                                    <div className={classes.sfCardTitle}>Cloud applications</div>
                                </MuiCard>
                                <MuiCard className={classes.sfCardItem}>
                                    <div className={classes.sfCardImg}>
                                        <Sf4Icon/>
                                    </div>
                                    <div className={classes.sfCardTitle}>SaaS products</div>
                                </MuiCard>
                                <MuiCard className={classes.sfCardItem}>
                                    <div className={classes.sfCardImg}>
                                        <Sf5Icon/>
                                    </div>
                                    <div className={classes.sfCardTitle}>Desktop applications</div>
                                </MuiCard>
                                <MuiCard className={classes.sfCardItem}>
                                    <div className={classes.sfCardImg}>
                                        <Sf6Icon/>
                                    </div>
                                    <div className={classes.sfCardTitle}>Libraries</div>
                                </MuiCard>
                            </div>
                        </Card>
                        <Card className={classes.wcsCard}>
                            <div className={classes.wcsTitle}>
                                WHY CHOOSE SCIENCESOFT
                            </div>
                            <div className={classes.wcsStepBox}>
                             <WcsLeftIcon/>
                             <img src={'/wcsStep.png'} />
                             <WcsRightIcon/>
                            </div>

                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ServicePage
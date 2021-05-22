import React from 'react';
import {makeStyles} from '@material-ui/core';
import {useEffect} from 'react'
import Layout from '../components/Layout';
import Card from '@/components/Card'
import ButtonBase from '@material-ui/core/ButtonBase';
import anime from 'animejs'
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

SwiperCore.use([Pagination]);
const useStyles = makeStyles(theme => ({
    card: {
        width: '1220px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '129px 117px 67px 117px',
        marginTop: '34px',
        marginBottom: '137px',
    },
    cardTitle: {
        fontSize: '48px',
        fontWeight: 900,
        color: '#000',
        textAlign: 'center',
    },
    cardText: {
        fontSize: '20px',
        color: '#000',
        textAlign: 'center',
    },
    cardBtn: {
        width: '148px',
        height: '48px',
        color: '#40C4FF',
        fontSize: '12px',
        lineHeight: '30px',
        backgroundColor: '#fff',
        borderRadius: '3px',
    },
    circle: {
        position: 'absolute',
        top: '500px',
        left: '-1400px',
        width: '253px',
        height: 'auto',
    },
    ball: {
        position: 'absolute',
        width: '92px',
        height: 'auto',
        left: '-1000px',
        top: '601px',
        zIndex: 1,
    },
    rect: {
        position: 'absolute',
        width: '185px',
        height: 'auto',
        left: '-500px',
        top: '605px',
    },
    triangle: {
        position: 'absolute',
        width: '148px',
        height: 'auto',
        left: '-800px',
        top: '650px',
    },
    egg: {
        position: 'absolute',
        width: '700px',
        height: 'auto',
        left: '-400px',
        transform: 'scale(0.1)',
        top: '550px',
    },
    triangle1: {
        position: 'absolute',
        width: '82px',
        height: 'auto',
        left: '-600px',
        top: '1000px',
    },
    test: {
        position: 'absolute',
        width: '82px',
        height: 'auto',
        left: '-600px',
        top: '1000px',
    },
    aboutSection: {
        margin: '137px 50px 40px 50px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f7f8fa',
        alignSelf: 'stretch',
        padding: '200px'
    },
    aboutLeft: {
        width: '50%',

    },
    aboutRight: {
        width: '50%'
    },
    aboutTitle: {
        fontSize: '40px',
        lineHeight: '50px',
        fontWeight: 'bold',
        position: 'relative',
        marginBottom: theme.spacing(1),
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
    aboutText: {
        fontSize: '16px',
        lineHeight: '24px',
    },
    wwdSection: {
        borderRadius: '10px',
        margin: '137px 50px 40px 50px',
        alignSelf: 'stretch',
        backgroundColor: '#f7f8fa',
        padding: '60px 0',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft:'221px',
        paddingRight:'221px',
    },
    wwdTitle: {
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '50px',
        position: 'relative',
        marginBottom:'70px',
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
    wwdTab:{
     display:'flex',
        marginBottom:'30px'
    },
    wwdTabItem:{
        width:'331px',
        height:'69px',
        color:'#2699FB',
        outline: 'none',
        border: 'none',
        boxShadow: '-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA',
        borderRadius: '8px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        marginRight:'15px'
    },
    wwdSider: {
        width:'331px',
        color:'#000',
        outline: 'none',
        border: 'none',
        boxShadow: '-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA',
        borderRadius: '8px',
        marginRight:'15px',
        textAlign:'center',
        fontSize:'20px',
        padding:'50px 0',
    },
    wwdSideMenuItem:{
      lineHeight:'50px'
    },
    wwdContent: {
        flex: 1,
        padding:'50px 14px',
        outline: 'none',
        border: 'none',
        boxShadow: '-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA',
        borderRadius: '8px',
        marginRight:'15px',
    },
    wwdContentTitle:{
        position:'relative',
    fontSize:'26px',
        fontWeight:'bold',
        lineHeight:'50px',
        marginBottom:theme.spacing(1),
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
    wwdContentText:{
       fontSize:'16px',
       lineHeight:'24px',
    },
    wwdBody:{
        display:'flex'
    }
}));
const Index = () => {
    const classes = useStyles();
    useEffect(() => {
        var t1 = anime.timeline({
            easing: 'linear',
            duration: 3000,
            loop: true,
        });
        var t2 = anime.timeline({
            easing: 'linear',
            duration: 3000,
            loop: true,
        });
        var t3 = anime.timeline({
            easing: 'linear',
            duration: 3000,
            loop: true,
        });
        var t4 = anime.timeline({
            easing: 'linear',
            duration: 3000,
            loop: true,
        });
        var t5 = anime.timeline({
            easing: 'linear',
            duration: 3000,
            loop: true,
        });
        var t6 = anime.timeline({
            easing: 'linear',
            duration: 3000,
            loop: true,
        });
        var test = anime.timeline({
            easing: 'linear',
            duration: 3000,
            loop: true,
        });
        t1.add({
            targets: ['#circle'],
            top: '400px',
            left: '2500px',
            rotate: '30deg',
            duration: 10000,
        })
        t2.add({
            targets: ['#ball'],
            top: 200,
            delay: 1000,
            left: '2500px',
            rotate: '60deg',
            duration: 10000,
        })
        t3.add({
            targets: ['#rect'],
            top: 0,
            delay: 2000,
            left: '2500px',
            rotate: '90deg',
            duration: 10000,
        })
        t4.add({
            targets: ['#triangle'],
            left: '2500px',
            top: -200,
            rotate: '40deg',
            duration: 10000,
        })
        t5.add({
            targets: ['#egg'],
            left: '2500px',
            top: -400,
            rotate: '80deg',
            duration: 10000,
        })
        t6.add({
            targets: ['#triangle1'],
            left: '2500px',
            delay: 5000,
            top: -600,
            rotate: '100deg',
            duration: 10000,
        })
        test.add({
            targets: ['#test'],
            left: '2500px',
            top: '-600px',
            rotate: '360deg',
            duration: 10000,
        })
    }, [])
    return (
        <Layout>
            <img id={'circle'} className={classes.circle} src={'/circle.svg'}/>
            <img id={'ball'} className={classes.ball} src={'/ball.svg'}/>
            <img id={'rect'} className={classes.rect} src={'/rect.svg'}/>
            <img id={'triangle'} className={classes.triangle} src={'/triangle.svg'}/>
            <img id={'egg'} className={classes.egg} src={'/egg.svg'}/>
            <img id={'triangle1'} className={classes.triangle1} src={'/triangle1.svg'}/>
            <img id={'test'} className={classes.test} src={'/test.svg'}/>
            <Card className={classes.card}>
                <h1 className={classes.cardTitle}>SOFTWARE CONSULTING AND DEVELOPMENT FOR YOUR DIGITAL SUCCESS</h1>
                <p className={classes.cardText}>We Transform business with powerful and adaptable digital solutions that
                    satisfy the needs of today and unlock the opportunities of tomorrow.</p>
                <ButtonBase className={classes.cardBtn}>NORMAL</ButtonBase>
            </Card>
            <div className={classes.aboutSection}>
                <div className={classes.aboutLeft}>
                    <Swiper
                        slidesPerView={1}
                        pagination={{clickable: true}}
                    >
                        <SwiperSlide><img src={"/swiper1.svg"}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className={classes.aboutRight}>
                    <div className={classes.aboutTitle}>About</div>
                    <div>ModuleX is a provider of IT consulting and Software development services. Having founded at
                        2018 as a small Software company and ever since we have helped non-IT organizations and software
                        product companies to improve business performance and quickly win new customers. With over 10
                        years in Technology, we have built up expertise int CRM, ERP, Ecommerce, Data Analytics,
                        Information Security, DMS, and other areas and conquered such innovative field as Artificial
                        Intelligence and Machine Learning, Big Data, Internet of Things, Computer vision and Augmented &
                        Virtual Reality. We headquarter in Los Angeles, CA, US and have a China office at Shanghai, an
                        India office at Mumbai, to provide the best service across the Pacific Ocean between America and
                        Asia.
                    </div>
                </div>
            </div>
            <div className={classes.wwdSection}>
                <div className={classes.wwdTitle}>What We Do</div>
                <div className={classes.wwdTab}>
                    <ButtonBase className={classes.wwdTabItem}>Technologies</ButtonBase>
                    <ButtonBase className={classes.wwdTabItem}>Services</ButtonBase>
                    <ButtonBase className={classes.wwdTabItem}>Solutions</ButtonBase>
                    <ButtonBase className={classes.wwdTabItem}>Blog & News</ButtonBase>
                </div>
                <div className={classes.wwdBody}>
                <div className={classes.wwdSider}>
                  <div className={classes.wwdSideMenuItem}>Software Development</div>
                    <div className={classes.wwdSideMenuItem}>Data Analytics</div>
                    <div className={classes.wwdSideMenuItem}>UI/UX Design</div>
                    <div className={classes.wwdSideMenuItem}>Testing And QA</div>
                    <div className={classes.wwdSideMenuItem}>Infrastructure Services</div>
                    <div className={classes.wwdSideMenuItem}>IT OutSourcing</div>
                    <div className={classes.wwdSideMenuItem}>IT Consulting</div>
                    <div className={classes.wwdSideMenuItem}>IT Support</div>
                </div>
                <div className={classes.wwdContent}>
                    <div className={classes.wwdContentTitle}>Software Development</div>
                    <div className={classes.wwdContentText}>The development of reliable and scalable software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.</div>
                </div>
                </div>
            </div>
        </Layout>
    );
}
export default Index

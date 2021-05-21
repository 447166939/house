
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react'
import Layout from '../components/Layout';
import Card from '@/components/Card'
import ButtonBase from '@material-ui/core/ButtonBase';
import anime from 'animejs'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination]);
const useStyles = makeStyles(theme => ({
    card:{
        width:'1220px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:'129px 117px 67px 117px',
        marginTop:'34px',
        marginBottom:'137px',
    },
    cardTitle:{
        fontSize:'48px',
        fontWeight:900,
        color:'#000',
        textAlign:'center',
    },
    cardText:{
        fontSize: '20px',
        color:'#000',
        textAlign: 'center',
    },
    cardBtn:{
        width:'148px',
        height:'48px',
        color:'#40C4FF',
        fontSize:'12px',
        lineHeight:'30px',
        backgroundColor:'#fff',
        borderRadius:'3px',
    },
    circle:{
        position:'absolute',
        top:0,
        left:'-1400px',
        width:'253px',
        height:'auto',
    },
    ball:{
        position:'absolute',
        width:'92px',
        height:'auto',
        left:'-1000px',
        top:'101px',
        zIndex:1,
    },
    rect:{
        position:'absolute',
        width:'185px',
        height:'auto',
        left:'-500px',
        top:'105px',
    },
    triangle:{
        position:'absolute',
        width:'148px',
        height:'auto',
        left:'-800px',
        top:'350px',
    },
    egg:{
        position:'absolute',
        width:'700px',
        height:'auto',
        left: '-400px',
        top:'50px',
    },
    triangle1:{
        position:'absolute',
        width:'82px',
        height:'auto',
        left:'-600px',
        top:'500px',
    },
    aboutSection:{
        margin:'137px 50px 40px 50px',
        borderRadius:'10px',
        display:'flex',
        alignItems:'center',
        backgroundColor:'#f7f8fa',
    },
    aboutLeft:{
        flex:1,
    },
    aboutRight:{
      flex:1
    }
}));
const  Index=()=> {
    const classes = useStyles();
  useEffect(() => {
      var t1 = anime.timeline({
          easing: 'linear',
          duration: 3000,
          loop:true,
      });
      var t2 = anime.timeline({
          easing: 'linear',
          duration: 3000,
          loop:true,
      });
      var t3 = anime.timeline({
          easing: 'linear',
          duration: 3000,
          loop:true,
      });
      var t4 = anime.timeline({
          easing: 'linear',
          duration: 3000,
          loop:true,
      });
      var t5 = anime.timeline({
          easing: 'linear',
          duration: 3000,
          loop:true,
      });
      var t6 = anime.timeline({
          easing: 'linear',
          duration: 3000,
          loop:true,
      });
      t1.add({
          targets: ['#circle'],
          translateX: '2500px',
          rotate:'360deg',
          duration: 8000,
      })
          t2.add({
          targets: ['#ball'],
          translateX: '2500px',
          rotate:'360deg',
          duration: 8000,
      })
      t3.add({
          targets: ['#rect'],
          translateX: '2500px',
          rotate:'360deg',
          duration: 8000,
      })
      t4.add({
          targets: ['#triangle'],
          translateX: '2500px',
          rotate:'360deg',
          duration: 8000,
      })
      t5.add({
          targets: ['#egg'],
          translateX: '2500px',
          rotate:'360deg',
          duration: 8000,
      })
      t6.add({
          targets: ['#triangle1'],
          translateX: '2500px',
          rotate:'360deg',
          duration: 8000,
      })
  }, [])
  return (
      <Layout>
          <img id={'circle'} className={classes.circle} src={'/circle.svg'} />
          <img id={'ball'} className={classes.ball} src={'/ball.svg'} />
          <img id={'rect'} className={classes.rect} src={'/rect.svg'} />
          <img id={'triangle'} className={classes.triangle} src={'/triangle.svg'} />
          <img id={'egg'} className={classes.egg} src={'/egg.svg'} />
          <img id={'triangle1'} className={classes.triangle1} src={'/triangle1.svg'} />
          <Card className={classes.card}>
              <h1 className={classes.cardTitle}>SOFTWARE CONSULTING AND DEVELOPMENT FOR YOUR DIGITAL SUCCESS</h1>
              <p className={classes.cardText}>We Transform business with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.</p>
              <ButtonBase className={classes.cardBtn}>NORMAL</ButtonBase>
          </Card>
          <div className={classes.aboutSection}>
            <div className={classes.aboutLeft}>
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
              <div className={classes.aboutRight}></div>
          </div>
      </Layout>
  );
}
export default Index

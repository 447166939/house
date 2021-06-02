import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import ButtonBase from "@material-ui/core/ButtonBase";
import anime from "animejs";
import Link from "@material-ui/core/Link";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MuiCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { SvgIcon } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import LikeSvg from "../assets/likes.svg";
import CommentSvg from "../assets/comment.svg";

import InputBase from "@material-ui/core/InputBase";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import clsx from "clsx";

const links = [
  { text: "Development Services We Provide", url: "" },
  { text: "Software We Develop", url: "" },
  { text: "Why moduleX", url: "" },
  { text: "What Defines Modern Software", url: "" },
  { text: "Technologies We Use", url: "" },
  { text: "Software Types We develop", url: "" }
];
const blogs = [
  {
    img: "/card1.svg",
    title: "Excepteur sint occaecat.",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    likeNum: 609,
    commentNum: 120
  },
  {
    img: "/card2.svg",
    title: "Excepteur sint occaecat.",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    likeNum: 609,
    commentNum: 120
  },
  {
    img: "/card3.svg",
    title: "Excepteur sint occaecat.",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    likeNum: 609,
    commentNum: 120
  },
  {
    img: "/card4.svg",
    title: "Excepteur sint occaecat.",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    likeNum: 609,
    commentNum: 120
  }
];
SwiperCore.use([Pagination]);
export interface ILikeIconProps {}
export interface ICommentIconProps {}
export interface IEmailIconProps {}
const LikeIcon = (props: ILikeIconProps) => <SvgIcon component={LikeSvg} viewBox="0 0 16 14" />;
const CommentIcon = (props: ICommentIconProps) => (
  <SvgIcon component={CommentSvg} viewBox="0 0 16 16" />
);
const useStyles = makeStyles((theme) => ({
  card: {
    width: "1220px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "129px 117px 67px 117px",
    marginTop: "123px",
    marginBottom: "137px",
    borderRadius: "10px"
  },
  cardTitle: {
    fontSize: "48px",
    fontWeight: 900,
    color: "#000",
    textAlign: "center"
  },
  cardText: {
    fontSize: "20px",
    color: "#000",
    textAlign: "center"
  },
  cardBtn: {
    width: "148px",
    height: "48px",
    color: "#40C4FF",
    fontSize: "12px",
    lineHeight: "30px",
    backgroundColor: "rgba(247, 248, 250, .5)",
    borderRadius: "3px"
  },
  aboutSection: {
    margin: "137px 50px 20px 50px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f7f8fa",
    alignSelf: "stretch",
    padding: "200px",
    zIndex: 10000
  },
  aboutLeft: {
    width: "50%"
  },
  aboutRight: {
    width: "50%"
  },
  aboutTitle: {
    fontSize: "40px",
    lineHeight: "50px",
    fontWeight: "bold",
    position: "relative",
    marginBottom: theme.spacing(1),
    "&:after": {
      content: "''",
      position: "absolute",
      width: "60px",
      height: "4px",
      backgroundColor: "#2699FB",
      bottom: 0,
      left: 0
    }
  },
  aboutText: {
    fontSize: "16px",
    lineHeight: "24px"
  },
  wwdSection: {
    borderRadius: "10px",
    margin: "20px 50px 30px 50px",
    alignSelf: "stretch",
    backgroundColor: "#f7f8fa",
    padding: "60px 0",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "221px",
    paddingRight: "221px",
    zIndex: 10000
  },
  wwdTitle: {
    fontSize: "40px",
    fontWeight: "bold",
    lineHeight: "50px",
    position: "relative",
    marginBottom: "70px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "60px",
      height: "4px",
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  wwdTab: {
    display: "flex",
    marginBottom: "30px"
  },
  wwdTabItem: {
    width: "331px",
    height: "69px",
    color: "#2699FB",
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    marginRight: "15px"
  },
  wwdTabActive: {
    color: "#CBD5E5",
    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      boxShadow: "2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset",
      borderRadius: "8px"
    }
  },
  wwdSider: {
    width: "331px",
    color: "#000",
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: "8px",
    marginRight: "15px",
    textAlign: "center",
    fontSize: "20px",
    padding: "50px 0"
  },
  wwdSideMenuItem: {
    lineHeight: "50px"
  },
  wwdContent: {
    flex: 1,
    padding: "50px 14px",
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: "8px",
    marginRight: "15px"
  },
  wwdContentTitle: {
    position: "relative",
    fontSize: "26px",
    fontWeight: "bold",
    lineHeight: "50px",
    marginBottom: theme.spacing(1),
    "&:after": {
      content: "''",
      position: "absolute",
      width: "60px",
      height: "4px",
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  wwdContentText: {
    fontSize: "16px",
    lineHeight: "24px"
  },
  wwdBody: {
    display: "flex"
  },
  wwdLinks: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "100px"
  },
  wwdLinkItem: {
    width: "31%",
    fontSize: "20px",
    lineHeight: "50px",
    color: "#000",
    display: "flex",
    alignItems: "center",
    marginRight: "2%",
    marginBottom: "70px"
  },
  wwdDot: {
    width: "9px",
    height: "9px",
    backgroundColor: "#2699FB",
    marginRight: "13px"
  },
  wwdLink: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  partnerCard: {
    display: "flex",

    marginLeft: "273px",
    marginRight: "273px",
    borderRadius: "10px"
  },
  partnerLeft: {
    width: "40%",
    margin: "60px 50px"
  },
  partnerRight: {
    width: "60%",
    margin: "30px 0px"
  },
  partnerTitle: {
    position: "relative",
    fontSize: "40px",
    lineHeight: "50px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: theme.spacing(2),
    "&:after": {
      content: "''",
      position: "absolute",
      width: "60px",
      height: "4px",
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  partnerText: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#000",
    marginBottom: "20px"
  },
  partnerBtn: {
    width: "148px",
    height: "48px",
    color: "#40C4FF",
    fontSize: "12px",
    lineHeight: "30px",
    backgroundColor: "rgba(247, 248, 250, .5)",
    borderRadius: "3px"
  },
  sectionThreeCard: {
    marginLeft: "273px",
    marginRight: "273px",
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: "30px"
  },
  threeCardWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    borderRadius: "10px",
    padding: "40px",
    justifyContent: "space-between"
  },
  threeCardImgWrapper: {
    marginBottom: "50px"
  },
  threeCardImg: {
    width: "148px",
    height: "auto",
    borderRadius: "74px"
  },
  threeCardTitle: {
    position: "relative",
    fontSize: "20px",
    lineHeight: "50px",
    color: "#000",
    fontWeight: "bold",
    marginBottom: "32px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "60px",
      height: "4px",
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  threeCardText: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#000",
    textAlign: "center"
  },
  threeCardBtn: {
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "30px",
    color: "#2699FB",
    width: "189px",
    height: "52px",
    backgroundColor: "#fff",
    marginTop: "22px",
    opacity: 0.5
  },
  sectionBlogs: {
    backgroundColor: "#f7f8fa",
    borderRadius: "8px",
    marginLeft: "50px",
    marginRight: "50px",
    alignSelf: "stretch",
    padding: "60px 277px",
    marginTop: "58px",
    zIndex: 100
  },
  sectionBlogsTitle: {
    fontSize: "40px",
    lineHeight: "50px",
    color: "#000",
    fontWeight: "bold",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "60px",
      height: "4px",
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  blogsBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
    padding: "10px 0"
  },
  blogsCard: {
    width: "23%",
    backgroundColor: "#f7f8fa"
  },
  blogsCardImg: {
    height: 0,
    paddingTop: "45%"
  },
  blogsCardTitle: {
    color: "#000"
  },
  blogCardText: {
    color: "#808080"
  },
  likesText: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#c3cfde",
    lineHeight: "24px",
    marginLeft: theme.spacing(1)
  },
  commentText: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#c3cfde",
    lineHeight: "24px",
    marginLeft: theme.spacing(1)
  }
}));
const Index = () => {
  const classes = useStyles();
  const [tab, setTab] = useState();
  const handleClickWwdTab = useCallback((tab) => {
    setTab(tab);
  }, []);
  return (
    <Layout>
      <Card className={classes.card}>
        <h1 className={classes.cardTitle}>
          SOFTWARE CONSULTING AND DEVELOPMENT FOR YOUR DIGITAL SUCCESS
        </h1>
        <p className={classes.cardText}>
          We Transform business with powerful and adaptable digital solutions that satisfy the needs
          of today and unlock the opportunities of tomorrow.
        </p>
        <ButtonBase className={classes.cardBtn}>NORMAL</ButtonBase>
      </Card>
      <div className={classes.aboutSection}>
        <div className={classes.aboutLeft}>
          <Swiper slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide>
              <img src={"/swiper1.svg"} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classes.aboutRight}>
          <div className={classes.aboutTitle}>About</div>
          <div>
            ModuleX is a provider of IT consulting and Software development services. Having founded
            at 2018 as a small Software company and ever since we have helped non-IT organizations
            and software product companies to improve business performance and quickly win new
            customers. With over 10 years in Technology, we have built up expertise int CRM, ERP,
            Ecommerce, Data Analytics, Information Security, DMS, and other areas and conquered such
            innovative field as Artificial Intelligence and Machine Learning, Big Data, Internet of
            Things, Computer vision and Augmented & Virtual Reality. We headquarter in Los Angeles,
            CA, US and have a China office at Shanghai, an India office at Mumbai, to provide the
            best service across the Pacific Ocean between America and Asia.
          </div>
        </div>
      </div>
      <div className={classes.wwdSection}>
        <div className={classes.wwdTitle}>What We Do</div>
        <div className={classes.wwdTab}>
          <ButtonBase
            disableRipple
            onClick={handleClickWwdTab.bind(null, 0)}
            style={{ flexShrink: 0 }}
            className={clsx(classes.wwdTabItem, { [classes.wwdTabActive]: tab == 0 })}>
            Technologies
          </ButtonBase>
          <ButtonBase
            disableRipple
            onClick={handleClickWwdTab.bind(null, 1)}
            className={clsx(classes.wwdTabItem, { [classes.wwdTabActive]: tab == 1 })}>
            Services
          </ButtonBase>
          <ButtonBase
            disableRipple
            onClick={handleClickWwdTab.bind(null, 2)}
            className={clsx(classes.wwdTabItem, { [classes.wwdTabActive]: tab == 2 })}>
            Solutions
          </ButtonBase>
          <ButtonBase
            disableRipple
            onClick={handleClickWwdTab.bind(null, 3)}
            className={clsx(classes.wwdTabItem, { [classes.wwdTabActive]: tab == 3 })}>
            Blog & News
          </ButtonBase>
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
            <div className={classes.wwdContentText}>
              The development of reliable and scalable software solutions for any OS, browser and
              device. We bring together deep industry expertise and the latest IT advancements to
              deliver custom solutions and products that perfectly fit the needs and behavior of
              their users.
            </div>
            <div className={classes.wwdLinks}>
              {links.map((item, index) => {
                return (
                  <div key={index} className={classes.wwdLinkItem}>
                    <span className={classes.wwdDot}></span>
                    <Link href={item.url} color="inherit" className={classes.wwdLink}>
                      {item.text}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Card className={classes.partnerCard}>
        <div className={classes.partnerLeft}>
          <div className={classes.partnerTitle}>Partners</div>
          <div className={classes.partnerText}>
            Over years of business development, ModuleX has won lots of long-term trusted
            relationship with companies across the continent. Our business partners include AWS,
            IBM, Carvana, Hulu and many others. We providing services across Web, Mobile and Cloud,
            we deliver cloud-based projects, digital marketing solutions, IoT infrastructures, big
            data processing and analytics solutions. We care about your business like you do, we
            built the project like it is our project.
          </div>
          <div>
            <ButtonBase className={classes.partnerBtn}>MORE</ButtonBase>
          </div>
        </div>
        <div className={classes.partnerRight}>
          <img src={"/map.svg"} />
        </div>
      </Card>
      <div className={classes.sectionThreeCard}>
        <Card className={classes.threeCardWrapper}>
          <div className={classes.threeCardImgWrapper}>
            <img className={classes.threeCardImg} src={"/service.svg"} />
          </div>
          <div className={classes.threeCardTitle}>Services We Provide</div>
          <div className={classes.threeCardText}>
            Comprehensive care of your cloud or on-premises infrastructure and applications with our
            diverse services.
          </div>
          <div>
            <ButtonBase className={classes.threeCardBtn}>MORE</ButtonBase>
          </div>
        </Card>
        <Card className={classes.threeCardWrapper}>
          <div className={classes.threeCardImgWrapper}>
            <img className={classes.threeCardImg} src={"/techonologies.svg"} />
          </div>
          <div className={classes.threeCardTitle}>We evolve with Technologies</div>
          <div className={classes.threeCardText}>
            Distilling deep tech experience, our experts can help you with platform-specific
            consulting, solution design and support for your business evolution.
          </div>
          <div>
            <ButtonBase className={classes.threeCardBtn}>MORE</ButtonBase>
          </div>
        </Card>
        <Card className={classes.threeCardWrapper}>
          <div className={classes.threeCardImgWrapper}>
            <img className={classes.threeCardImg} src={"/solution.svg"} />
          </div>
          <div className={classes.threeCardTitle}>Solutions We Deliver</div>
          <div className={classes.threeCardText}>
            We IT-enable all kinds of B2B, B2C interactions and internal operations.
          </div>
          <div>
            <ButtonBase className={classes.threeCardBtn}>MORE</ButtonBase>
          </div>
        </Card>
      </div>
      <div className={classes.sectionBlogs}>
        <div className={classes.sectionBlogsTitle}>Blogs</div>
        <div>
          <Swiper slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className={classes.blogsBox}>
                {blogs.map((item, index) => {
                  return (
                    <MuiCard key={index} className={classes.blogsCard} elevation={2}>
                      <CardMedia className={classes.blogsCardImg} image={item.img} />
                      <CardContent>
                        <Typography className={classes.blogsCardTitle} variant="h6" component="h6">
                          {item.title}
                        </Typography>
                        <Typography className={classes.blogCardText} variant="body2" component="p">
                          {item.text}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton>
                          <LikeIcon />
                          <span className={classes.likesText}>{item.likeNum}</span>
                        </IconButton>
                        <IconButton>
                          <CommentIcon />
                          <span className={classes.commentText}>{item.commentNum}</span>
                        </IconButton>
                      </CardActions>
                    </MuiCard>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};
export default Index;

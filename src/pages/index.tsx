import React, { useState, useCallback, Fragment, Dispatch, SetStateAction } from "react";
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
import useGlobalStyles from "../theme/globalStyles/globalStyles";
import rootCategory from "../data/rootCategories/rootCategory";
import servicesCategories from "../data/rootCategories/categories/servicesCategories";
import technologiesCategories from "../data/rootCategories/categories/technologiesCategories";
import solutionsCategories from "../data/rootCategories/categories/solutionsCategories";
import blogAndNewsCategories from "../data/rootCategories/categories/blogAndNewsCategories";
import servicesSubCategories from "../data/rootCategories/subCategories/servicesSubCategory";
import technologiesSubCategories from "../data/rootCategories/subCategories/technologiesSubCategory";
import solutionsSubCategories from "../data/rootCategories/subCategories/solutionsSubCategory";
import blogAndNewsSubCategories from "../data/rootCategories/subCategories/blogAndNewsSubCategory";
import servicesSubCategorySubDataAnalyticsLinks from "../data/rootCategories/subSubCategoriesLinks/servicesLinks/servicesSubCategorySubDataAnalyticsLinks";
import servicesSubCategoriesSub from "../data/rootCategories/subSubCategories/servicesSubCategories/servicesSubCategoriesSub";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { px2vw, px2vwMo } from "@/utils/pxtovw";
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
export interface IEmailIconProps {
  classes?: object;
}
const LikeIcon = (props: ILikeIconProps) => <SvgIcon component={LikeSvg} viewBox="0 0 16 14" />;
const CommentIcon = (props: ICommentIconProps) => (
  <SvgIcon component={CommentSvg} viewBox="0 0 16 16" />
);
const useStyles = makeStyles((theme) => ({
  card: {
    width: `${px2vw(1220)}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${px2vw(129)} ${px2vw(117)} ${px2vw(67)} ${px2vw(117)}`,
    marginTop: `${px2vw(123)}`,
    marginBottom: `${px2vw(137)}`,
    borderRadius: `${px2vw(10)}`,
    [theme.breakpoints.down("sm")]:{
      width:`${px2vwMo(662)}`,
      padding: `${px2vwMo(89)} ${px2vwMo(35)} ${px2vwMo(62)} ${px2vwMo(35)}`,
      marginTop: `${px2vwMo(87)}`,
      marginBottom: `${px2vwMo(99)}`,
      borderRadius: `${px2vwMo(10)}`,
    }
  },
  cardText: {
    fontSize: `${px2vw(20)}`,
    color: "#000",
    textAlign: "center"
  },
  aboutSection: {
    margin: `${px2vw(137)} ${px2vw(50)} ${px2vw(20)} ${px2vw(50)}`,
    borderRadius: `${px2vw(10)}`,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f7f8fa",
    alignSelf: "stretch",
    padding: `${px2vw(200)}`,
    zIndex: 10000
  },
  aboutLeft: {
    width: "50%"
  },
  aboutRight: {
    width: "50%",
    paddingLeft:`${px2vw(80)}`
  },
  slide:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  slideImg:{
    minWidth:'100%',
    objectFit:'cover',
  },
  wwdSection: {
    borderRadius: `${px2vw(10)}`,
    margin: `${px2vw(20)} ${px2vw(50)} ${px2vw(30)} ${px2vw(50)}`,
    alignSelf: "stretch",
    backgroundColor: "#f7f8fa",
    padding: `${px2vw(60)} 0`,
    display: "flex",
    flexDirection: "column",
    paddingLeft: `${px2vw(221)}`,
    paddingRight: `${px2vw(221)}`,
    zIndex: 10000
  },
  wwdTitle: {
    fontSize: `${px2vw(40)}`,
    fontWeight: "bold",
    lineHeight: `${px2vw(50)}`,
    position: "relative",
    marginBottom: `${px2vw(70)}`,
    "&:after": {
      content: "''",
      position: "absolute",
      width: `${px2vw(60)}`,
      height: `${px2vw(4)}`,
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  wwdTab: {
    display: "flex",
    marginBottom: `${px2vw(30)}`
  },
  wwdSider: {
    // maxHeight: "600px",
    height: `${px2vw(600)}`,
    overflowY: "scroll",
    width: `${px2vw(331)}`,
    color: "#000",
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: `${px2vw(8)}`,
    marginRight: `${px2vw(15)}`,
    textAlign: "center",
    fontSize: `${px2vw(20)}`,
    padding: `${px2vw(50)} 0`
  },
  wwdSideMenuItem: {
    lineHeight: `${px2vw(50)}`,
    paddingLeft: `${px2vw(16)}`,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline"
    }
  },
  wwdContent: {
    flex: 1,
    padding: `${px2vw(50)} ${px2vw(14)}`,
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: `${px2vw(8)}`,
    marginRight: `${px2vw(15)}`
  },
  wwdContentTitle: {
    position: "relative",
    fontSize: `${px2vw(26)}`,
    fontWeight: "bold",
    lineHeight: `${px2vw(50)}`,
    marginBottom: theme.spacing(1),
    "&:after": {
      content: "''",
      position: "absolute",
      width: `${px2vw(60)}`,
      height: `${px2vw(4)}`,
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  wwdContentText: {
    fontSize: `${px2vw(16)}`,
    lineHeight: `${px2vw(24)}`
  },
  wwdBody: {
    display: "flex"
  },
  wwdLinks: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: `${px2vw(100)}`
  },
  wwdLinkItem: {
    width: "31%",
    fontSize: `${px2vw(20)}`,
    lineHeight: `${px2vw(50)}`,
    color: "#000",
    display: "flex",
    alignItems: "center",
    marginRight: "2%",
    marginBottom: `${px2vw(70)}`
  },
  wwdDot: {
    width: `${px2vw(9)}`,
    height: `${px2vw(9)}`,
    backgroundColor: "#2699FB",
    marginRight: `${px2vw(13)}`
  },
  wwdLink: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  partnerCard: {
    display: "flex",

    marginLeft: `${px2vw(273)}`,
    marginRight: `${px2vw(273)}`,
    borderRadius: `${px2vw(10)}`
  },
  partnerLeft: {
    width: "40%",
    margin: `${px2vw(60)} ${px2vw(50)}`
  },
  partnerRight: {
    width: "60%",
    margin: `${px2vw(30)} 0`
  },
  partnerImg:{
    maxWidth:'100%',
  },
  partnerTitle: {
    position: "relative",
    fontSize: `${px2vw(40)}`,
    lineHeight: `${px2vw(50)}`,
    fontWeight: "bold",
    color: "#000",
    marginBottom: `${px2vw(8)}`,
    "&:after": {
      content: "''",
      position: "absolute",
      width: `${px2vw(60)}`,
      height: `${px2vw(4)}`,
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  partnerText: {
    fontSize: `${px2vw(16)}`,
    lineHeight: `${px2vw(24)}`,
    color: "#000",
    marginBottom: `${px2vw(20)}`
  },
  partnerBtn: {
    width: `${px2vw(148)}`,
    height: `${px2vw(48)}`,
    color: "#40C4FF",
    fontSize: `${px2vw(12)}`,
    lineHeight: `${px2vw(30)}`,
    backgroundColor: "rgba(247, 248, 250, .5)",
    borderRadius: `${px2vw(3)}`
  },
  sectionThreeCard: {
    marginLeft: `${px2vw(273)}`,
    marginRight: `${px2vw(273)}`,
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: `${px2vw(30)}`
  },
  threeCardWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    borderRadius: `${px2vw(10)}`,
    padding: `${px2vw(40)}`,
    justifyContent: "space-between"
  },
  threeCardImgWrapper: {
    marginBottom: `${px2vw(50)}`
  },
  threeCardImg: {
    width: `${px2vw(148)}`,
    height: "auto",
    borderRadius: "74px"
  },
  threeCardTitle: {
    position: "relative",
    fontSize: `${px2vw(20)}`,
    lineHeight: `${px2vw(50)}`,
    color: "#000",
    fontWeight: "bold",
    marginBottom: `${px2vw(32)}`,
    "&:after": {
      content: "''",
      position: "absolute",
      width: `${px2vw(60)}`,
      height: `${px2vw(4)}`,
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  threeCardText: {
    fontSize: `${px2vw(16)}`,
    lineHeight: `${px2vw(24)}`,
    color: "#000",
    textAlign: "center"
  },
  threeCardBtn: {
    borderRadius: `${px2vw(8)}`,
    fontSize: `${px2vw(14)}`,
    lineHeight: `${px2vw(30)}`,
    color: "#2699FB",
    width: `${px2vw(189)}`,
    height: `${px2vw(52)}`,
    backgroundColor: "#fff",
    marginTop: `${px2vw(22)}`,
    opacity: 0.5
  },
  sectionBlogs: {
    backgroundColor: "#f7f8fa",
    borderRadius: `${px2vw(8)}`,
    marginLeft: `${px2vw(50)}`,
    marginRight: `${px2vw(50)}`,
    alignSelf: "stretch",
    padding: `${px2vw(60)} ${px2vw(277)}`,
    marginTop: `${px2vw(58)}`,
    zIndex: 100
  },
  sectionBlogsTitle: {
    fontSize: `${px2vw(40)}`,
    lineHeight: `${px2vw(50)}`,
    color: "#000",
    fontWeight: "bold",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      width: `${px2vw(60)}`,
      height: `${px2vw(4)}`,
      bottom: 0,
      left: 0,
      backgroundColor: "#2699FB"
    }
  },
  blogsBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: `${px2vw(50)}`,
    padding: `${px2vw(10)} 0`
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
    fontSize: `${px2vw(14)}`,
    fontWeight: "bold",
    color: "#c3cfde",
    lineHeight: `${px2vw(24)}`,
    marginLeft: theme.spacing(1)
  },
  commentText: {
    fontSize: `${px2vw(14)}`,
    fontWeight: "bold",
    color: "#c3cfde",
    lineHeight: `${px2vw(24)}`,
    marginLeft: `${px2vw(4)}`
  }
}));
const Index = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [category, setCategory] = useState(servicesCategories);
  const [subCategory, setSubCategory] = useState(servicesSubCategories);
  const [current, setCurrent] = useState("");
  const [subCategorySub, setSubCategorySub] = useState(servicesSubCategoriesSub);
  const [subCategorySubLinks, setSubCategorySubLinks] = useState(
    servicesSubCategorySubDataAnalyticsLinks
  );
  // all the click handlers
  const handleClickCategory = useCallback(
    (idx) => {
      setCategory(rootCategory[idx]);
      setSubCategory(rootCategory[idx]["subCategories"]);
      setSubCategorySub(rootCategory[idx]["subCategories"][0]["subCategoriesSub"]);
      setSubCategorySubLinks(rootCategory[idx]["subCategories"][0]["subCategoriesSub"][0]["links"]);
      console.log("category", category);
      console.log("subcate", subCategory["subCategoriesSub" as unknown as number]);
    },
    [category]
  );
  const handleClickSubCategory = useCallback(
    (subCate) => {
      setCurrent((pre) => {
        if (pre == subCate.text) {
          return "";
        } else {
          return subCate.text;
        }
      });
      setSubCategory(subCate);
      setSubCategorySub(subCate["subCategoriesSub"]);
      setSubCategorySubLinks(subCate["subCategoriesSub"][0]["links"]);
    },
    [category]
  );
  const handleClickSubCategorySub = useCallback(
    (subCateSubItem) => {
      // console.log(" subCateSub: ", subCateSubItem, " [\"links\"]: ", subCateSubItem["links"], " this is just change the links");
      setSubCategorySubLinks(subCateSubItem["links"]);
    },
    [category]
  );
  const renderPannel = (category: any) => {
    return category.text == "Technologies"
      ? category["subCategories"].map(
          (subCategory: { [key: string]: object | any }, subCategoryIndex: number) => {
            return (
              <Fragment key={subCategoryIndex}>
                <ListItem
                  className={globalClasses.cardSmallTitle}
                  onClick={handleClickSubCategory.bind(null, subCategory)}
                  key={subCategoryIndex}>
                  <ListItemText>{subCategory.text}</ListItemText>
                  {current == subCategory.text ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={current == subCategory.text}>
                  <List disablePadding>
                    {subCategory["subCategoriesSub"].map(
                      (
                        subCategoriesSubItem: { [key: string]: object | any },
                        subCategoriesSubIndex: number
                      ) => {
                        return (
                          <ListItem
                            className={clsx(classes.wwdSideMenuItem, {
                              [globalClasses.textBlue]:
                                subCategorySubLinks === subCategoriesSubItem["links"] ? true : false
                            })}
                            onClick={handleClickSubCategorySub.bind(null, subCategoriesSubItem)}
                            key={subCategoriesSubIndex}>
                            {subCategoriesSubItem["text"]}
                          </ListItem>
                        );
                      }
                    )}
                  </List>
                </Collapse>
              </Fragment>
            );
          }
        )
      : category["subCategories"].map(
          (subCategory: { [key: string]: object | any }, subCategoryIndex: number) => {
            return (
              <div key={subCategoryIndex}>
                <List disablePadding>
                  {subCategory["subCategoriesSub"].map(
                    (
                      subCategoriesSubItem: { [key: string]: object | any },
                      subCategoriesSubIndex: number
                    ) => {
                      return (
                        <ListItem
                          className={clsx(classes.wwdSideMenuItem, {
                            [globalClasses.textBlue]:
                              subCategorySubLinks === subCategoriesSubItem["links"] ? true : false
                          })}
                          onClick={handleClickSubCategorySub.bind(null, subCategoriesSubItem)}
                          key={subCategoriesSubIndex}>
                          {subCategoriesSubItem["text"]}
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </div>
            );
          }
        );
  };
  return (
    <Layout>
      <Card customStyles={clsx(classes.card, globalClasses.cardGlassEffect)} blurActive={true}>
        <h1 className={globalClasses.cardMediumTitle}>
          SOFTWARE CONSULTING AND DEVELOPMENT FOR YOUR DIGITAL SUCCESS
        </h1>
        <p className={globalClasses.cardMediumText}>
          We Transform business with powerful and adaptable digital solutions that satisfy the needs
          of today and unlock the opportunities of tomorrow.
        </p>
        <ButtonBase className={globalClasses.cardBlurBtn} disableRipple>
          KNOW MORE
        </ButtonBase>
      </Card>
      <Card customStyles={classes.aboutSection} blurActive={false}>
        <div className={classes.aboutLeft}>
          <Swiper slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide className={classes.slide}>
              <img className={classes.slideImg} src={"/swiper1.svg"} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classes.aboutRight}>
          <div className={clsx(globalClasses.cardBigTitle, globalClasses.cardTitleDashLineGold)}>
            About us
          </div>
          <div className={globalClasses.cardMediumText}>
            ModuleX is a provider of IT consulting and Software development services. Having founded
            at 2016 as a small Software company and ever since we have helped non-IT organizations
            and software product companies to improve business performance and quickly win new
            customers. With over 10 years in Technology, we have built up expertise int CRM, ERP,
            Ecommerce, Data Analytics, Information Security, DMS, and other areas and conquered such
            innovative field as Artificial Intelligence and Machine Learning, Big Data, Internet of
            Things, Computer vision and Augmented & Virtual Reality. We headquarter in Los Angeles,
            CA, US and have a China office at Shanghai, an Ukraine office at Kyiv, to provide the
            best service across the Pacific Ocean between America, Asia and Europe.
          </div>
        </div>
      </Card>
      <Card customStyles={classes.wwdSection} blurActive={false}>
        <div className={clsx(globalClasses.cardBigTitle, globalClasses.cardTitleDashLineGold)}>
          What We Do
        </div>
        <div className={classes.wwdTab}>
          <ButtonBase
            disableRipple
            onClick={handleClickCategory.bind(null, 0)}
            style={{ flexShrink: 0 }}
            className={clsx(globalClasses.cardNormalBtn, {
              // [globalClasses.cardNormalBtnActive]: tab[0]
              [globalClasses.cardNormalBtnActive]: category === servicesCategories ? true : false
            })}>
            Services
          </ButtonBase>
          <ButtonBase
            disableRipple
            onClick={handleClickCategory.bind(null, 1)}
            className={clsx(globalClasses.cardNormalBtn, {
              // [globalClasses.cardNormalBtnActive]: tab[1]
              [globalClasses.cardNormalBtnActive]:
                category === technologiesCategories ? true : false
            })}>
            Technologies
          </ButtonBase>
          <ButtonBase
            disableRipple
            onClick={handleClickCategory.bind(null, 2)}
            className={clsx(globalClasses.cardNormalBtn, {
              // [globalClasses.cardNormalBtnActive]: tab[2]
              [globalClasses.cardNormalBtnActive]: category === solutionsCategories ? true : false
            })}>
            Solutions
          </ButtonBase>
          <ButtonBase
            disableRipple
            onClick={handleClickCategory.bind(null, 3)}
            className={clsx(globalClasses.cardNormalBtn, {
              // [globalClasses.cardNormalBtnActive]: tab[3]
              [globalClasses.cardNormalBtnActive]: category === blogAndNewsCategories ? true : false
            })}>
            Blog & News
          </ButtonBase>
        </div>
        <div className={classes.wwdBody}>
          <List disablePadding className={classes.wwdSider}>
            {renderPannel(category)}
          </List>
          <div className={classes.wwdContent}>
            <div className={globalClasses.cardMediumTitle}>Software Development</div>
            <div className={globalClasses.cardSmallText}>
              The development of reliable and scalable software solutions for any OS, browser and
              device. We bring together deep industry expertise and the latest IT advancements to
              deliver custom solutions and products that perfectly fit the needs and behavior of
              their users.
            </div>
            <div className={classes.wwdLinks}>
              {subCategorySubLinks.map((link: { [key: string]: object | any }, index: number) => {
                return (
                  <div key={index} className={classes.wwdLinkItem}>
                    <span className={classes.wwdDot}></span>
                    <Link href={link.url} color="inherit" className={classes.wwdLink}>
                      {link.text}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
      <Card
        customStyles={clsx(classes.partnerCard, globalClasses.cardGlassEffect)}
        blurActive={true}>
        <div className={classes.partnerLeft}>
          <div className={clsx(globalClasses.cardBigTitle, globalClasses.cardTitleDashLineGold)}>
            Partners
          </div>
          <div className={globalClasses.cardMediumText}>
            Over years of business development, ModuleX has won lots of long-term trusted
            relationship with companies across the continent. Our business partners include AWS,
            IBM, Carvana, Hulu and many others. We providing services across Web, Mobile and Cloud,
            we deliver cloud-based projects, digital marketing solutions, IoT infrastructures, big
            data processing and analytics solutions. We care about your business like you do, we
            built the project like it is our project.
          </div>
          <div>
            <ButtonBase className={globalClasses.cardBlurBtn} disableRipple>
              MORE
            </ButtonBase>
          </div>
        </div>
        <div className={classes.partnerRight}>
          <img className={classes.partnerImg} src={"/map.svg"} />
        </div>
      </Card>
      <div className={classes.sectionThreeCard}>
        <Card
          customStyles={clsx(classes.threeCardWrapper, globalClasses.cardGlassEffect)}
          blurActive={true}>
          <div className={classes.threeCardImgWrapper}>
            <img className={classes.threeCardImg} src={"/service.svg"} />
          </div>
          <div className={globalClasses.cardSmallTitle}>Services We Provide</div>
          <div className={globalClasses.cardSmallText}>
            Comprehensive care of your cloud or on-premises infrastructure and applications with our
            diverse services.
          </div>
          <div>
            <ButtonBase className={globalClasses.cardBlurBtn} disableRipple>
              MORE
            </ButtonBase>
          </div>
        </Card>
        <Card
          customStyles={clsx(classes.threeCardWrapper, globalClasses.cardGlassEffect)}
          blurActive={true}>
          <div className={classes.threeCardImgWrapper}>
            <img className={classes.threeCardImg} src={"/techonologies.svg"} />
          </div>
          <div className={globalClasses.cardSmallTitle}>We evolve with Technologies</div>
          <div className={globalClasses.cardSmallText}>
            Distilling deep tech experience, our experts can help you with platform-specific
            consulting, solution design and support for your business evolution.
          </div>
          <div>
            <ButtonBase className={globalClasses.cardBlurBtn} disableRipple>
              MORE
            </ButtonBase>
          </div>
        </Card>
        <Card
          customStyles={clsx(classes.threeCardWrapper, globalClasses.cardGlassEffect)}
          blurActive={true}>
          <div className={classes.threeCardImgWrapper}>
            <img className={classes.threeCardImg} src={"/solution.svg"} />
          </div>
          <div className={globalClasses.cardSmallTitle}>Solutions We Deliver</div>
          <div className={globalClasses.cardSmallText}>
            We IT-enable all kinds of B2B, B2C interactions and internal operations.
          </div>
          <div>
            <ButtonBase className={globalClasses.cardBlurBtn} disableRipple>
              MORE
            </ButtonBase>
          </div>
        </Card>
      </div>
      <Card customStyles={classes.sectionBlogs} blurActive={false}>
        <div className={clsx(globalClasses.cardBigTitle, globalClasses.cardTitleDashLineGold)}>
          Blogs
        </div>
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
      </Card>
    </Layout>
  );
};
export default Index;

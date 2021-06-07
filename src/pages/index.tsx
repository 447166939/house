import React, { useState, useCallback, Dispatch, SetStateAction } from "react";
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
  cardText: {
    fontSize: "20px",
    color: "#000",
    textAlign: "center"
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
  wwdSider: {
    // maxHeight: "600px",
    maxHeight: "inherit",
    overFlow: "hidden",
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
    lineHeight: "50px",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline"
    }
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
  const globalClasses = useGlobalStyles();
  const [category, setCategory] = useState(servicesCategories);
  const [subCategory, setSubCategory] = useState(servicesSubCategories);
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
      // console.log(" idx: ", idx, " subCategorySubLinks: ", subCategorySubLinks);
    },
    [category]
  );
  const handleClickSubCategory = useCallback(
    (subCate) => {
      setSubCategory(subCate);
      setSubCategorySub(subCate["subCategoriesSub"]);
      setSubCategorySubLinks(subCate["subCategoriesSub"][0]["links"]);
      // console.log(" subCate: ", subCate, " subCategorySubLinks: ", subCate["subCategoriesSub"][0]["links"]);
    },
    [category]
  );
  const handleClickSubCategorySub = useCallback(
    (subCateSubItem) => {
      // console.log(" subCateSub: ", subCateSubItem, " [\"links\"]: ", subCateSubItem["links"], " this is just change the links");
      setSubCategorySubLinks(subCateSubItem["links"]);
      // console.log(" subCateSubItem: ", subCateSubItem, " subCategorySubLinks: ", subCateSubItem["links"]);
    },
    [category]
  );
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
            <SwiperSlide>
              <img src={"/swiper1.svg"} />
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
          <div className={classes.wwdSider}>
            {category["subCategories"].map(
              (subCategory: { [key: string]: object | any }, subCategoryIndex: number) => {
                return (
                  <>
                    <div
                      className={globalClasses.cardSmallTitle}
                      onClick={handleClickSubCategory.bind(null, subCategory)}
                      key={subCategoryIndex}>
                      {subCategory.text}
                    </div>
                    {subCategory["subCategoriesSub"].map(
                      (
                        subCategoriesSubItem: { [key: string]: object | any },
                        subCategoriesSubIndex: number
                      ) => {
                        return (
                          <div
                            className={clsx(classes.wwdSideMenuItem, {
                              [globalClasses.textBlue]:
                                subCategorySubLinks === subCategoriesSubItem["links"] ? true : false
                            })}
                            onClick={handleClickSubCategorySub.bind(null, subCategoriesSubItem)}
                            key={subCategoriesSubIndex}>
                            {subCategoriesSubItem["text"]}
                          </div>
                        );
                      }
                    )}
                  </>
                );
              }
            )}
          </div>
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
          <img src={"/map.svg"} />
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

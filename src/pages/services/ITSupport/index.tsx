import React from "react";
import Layout from "@/components/Layout";
import Sider from "@/components/Sider";
import { makeStyles, createStyles } from "@material-ui/core";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import MuiCard from "@material-ui/core/Card";
import ButtonBase from "@material-ui/core/ButtonBase";
import { SvgIcon } from "@material-ui/core";
import card1Svg from "@/assets/card1.svg";
import card2Svg from "@/assets/card2.svg";
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
import wcsLeftSvg from "@/assets/wcsLeft.svg";
import wcsRightSvg from "@/assets/wcsRight.svg";
import smileSvg from "@/assets/smile.svg";
import { px2vw } from "@/utils/pxtovw";
export interface ICard1IconProps {}
export interface ICard2IconProps {}
export interface ICard3IconProps {}
export interface ICard4IconProps {}
export interface ICard5IconProps {}
export interface ICard6IconProps {}
const Card1Icon: React.FC<ICard1IconProps> = (props: ICard1IconProps) => (
  <SvgIcon fontSize={"large"} component={card1Svg} viewBox="0 0 44 44" />
);
const Card2Icon: React.FC<ICard2IconProps> = (props: ICard2IconProps) => (
  <SvgIcon fontSize={"large"} component={card2Svg} viewBox="0 0 50 50" />
);
const Card3Icon: React.FC<ICard3IconProps> = (props: ICard3IconProps) => (
  <SvgIcon fontSize={"large"} component={card3Svg} viewBox="0 0 50 50" />
);
const Card4Icon: React.FC<ICard4IconProps> = (props: ICard4IconProps) => (
  <SvgIcon fontSize={"large"} component={card4Svg} viewBox="0 0 50 50" />
);
const Card5Icon: React.FC<ICard5IconProps> = (props: ICard5IconProps) => (
  <SvgIcon fontSize={"large"} component={card5Svg} viewBox="0 0 50 50" />
);
const Card6Icon: React.FC<ICard6IconProps> = (props: ICard6IconProps) => (
  <SvgIcon fontSize={"large"} component={card6Svg} viewBox="0 0 50 50" />
);
export interface ISf1IconProps {}
export interface ISf2IconProps {}
export interface ISf3IconProps {}
export interface ISf4IconProps {}
export interface ISf5IconProps {}
export interface ISf6IconProps {}
const Sf1Icon: React.FC<ISf1IconProps> = (props: ISf1IconProps) => (
  <SvgIcon fontSize={"large"} component={sf1Svg} viewBox="0 0 46 46" />
);
const Sf2Icon: React.FC<ISf2IconProps> = (props: ISf2IconProps) => (
  <SvgIcon fontSize={"large"} component={sf2Svg} viewBox="0 0 48 48" />
);
const Sf3Icon: React.FC<ISf3IconProps> = (props: ISf3IconProps) => (
  <SvgIcon fontSize={"large"} component={sf3Svg} viewBox="0 0 46 46" />
);
const Sf4Icon: React.FC<ISf4IconProps> = (props: ISf4IconProps) => (
  <SvgIcon fontSize={"large"} component={sf4Svg} viewBox="0 0 40 40" />
);
const Sf5Icon: React.FC<ISf5IconProps> = (props: ISf5IconProps) => (
  <SvgIcon fontSize={"large"} component={sf5Svg} viewBox="0 0 40 40" />
);
const Sf6Icon: React.FC<ISf6IconProps> = (props: ISf6IconProps) => (
  <SvgIcon fontSize={"large"} component={sf6Svg} viewBox="0 0 44 44" />
);
export interface IWcsLeftIconProps {}
const WcsLeftIcon: React.FC<IWcsLeftIconProps> = (props: IWcsLeftIconProps) => (
  <SvgIcon fontSize={"large"} component={wcsLeftSvg} viewBox="0 0 50 50" />
);
export interface IWcsRightIconProps {}
const WcsRightIcon: React.FC<IWcsRightIconProps> = (props: IWcsRightIconProps) => (
  <SvgIcon fontSize={"large"} component={wcsRightSvg} viewBox="0 0 50 50" />
);
export interface ISmileIconProps {
  className: string;
}
const SmileIcon: React.FC<ISmileIconProps> = (props: ISmileIconProps) => (
  <SvgIcon
    className={props.className}
    fontSize={"large"}
    component={smileSvg}
    viewBox="0 0 40.858 40.858"
  />
);
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: `${px2vw(276)}`,
      paddingRight: `${px2vw(276)}`,
      alignSelf: "stretch"
    },
    sectionService: {
      display: "flex",
      marginTop: `${px2vw(20)}`
    },
    serviceLeft: {
      width: `${px2vw(320)}`,
      marginRight: `${px2vw(20)}`
    },
    serviceRight: {
      flex: 1
    },
    sdsCard: {
      padding: `${px2vw(40)}`,
      borderRadius: `${px2vw(10)}`
    },
    sdsTitle: {
      fontSize: `${px2vw(30)}`,
      lineHeight: `${px2vw(50)}`,
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        backgroundColor: "#2699FB",
        bottom: 0,
        left: 0
      }
    },
    sdsImg: {
      height: `${px2vw(300)}`,
      background: "url(/sds.png) no-repeat center",
      backgroundSize: "cover"
    },
    sdsText: {
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(24)}`,
      color: "#000"
    },
    wsaCard: {
      borderRadius: `${px2vw(10)}`,
      marginTop: `${px2vw(20)}`,
      padding: `${px2vw(40)}`
    },
    wsaTitle: {
      fontSize: `${px2vw(30)}`,
      lineHeight: `${px2vw(50)}`,
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        backgroundColor: "#2699FB",
        bottom: 0,
        left: 0
      }
    },
    wsaBox: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
    },
    wsaCardItem: {
      width: "30%",
      backgroundColor: "rgba(255,255,255,0.3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${px2vw(32)} ${px2vw(25)}`,
      marginBottom: `${px2vw(20)}`
    },
    wsaCardImg: {
      width: `${px2vw(91)}`,
      height: `${px2vw(91)}`,
      borderRadius: "50%",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "26px"
    },
    wsaCardTitle: {
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      fontWeight: "bold",
      color: "#000",
      textAlign: "center",
      marginBottom: `${px2vw(21)}`
    },
    wsaCardText: {
      fontSize: `${px2vw(14)}`,
      lineHeight: `${px2vw(24)}`,
      color: "#000",
      textAlign: "center"
    },
    wsaCardBtn: {
      color: "#2699FB",
      height: `${px2vw(54)}`,
      backgroundColor: "rgba(255,255,255,0.5)",
      borderRadius: `${px2vw(8)}`,
      marginTop: `${px2vw(27)}`,
      textAlign: "center",
      padding: `0 ${px2vw(35)}`
    },
    sfCard: {
      borderRadius: `${px2vw(8)}`,
      marginTop: `${px2vw(20)}`,
      padding: `${px2vw(40)}`
    },
    sfTitle: {
      fontSize: `${px2vw(30)}`,
      lineHeight: `${px2vw(50)}`,
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        backgroundColor: "#2699FB",
        bottom: 0,
        left: 0
      }
    },
    sfCardBox: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
    },
    sfCardItem: {
      width: "30%",
      backgroundColor: "rgba(255,255,255,0.3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${px2vw(32)} ${px2vw(25)}`,
      marginBottom: `${px2vw(20)}`
    },
    sfCardImg: {
      width: `${px2vw(79)}`,
      height: `${px2vw(79)}`,
      borderRadius: "50%",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: `${px2vw(26)}`
    },
    sfCardTitle: {
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      fontWeight: "bold",
      color: "#000",
      textAlign: "center",
      marginBottom: `${px2vw(21)}`
    },
    wcsCard: {
      borderRadius: `${px2vw(8)}`,
      marginTop: `${px2vw(20)}`,
      padding: `${px2vw(40)}`
    },
    wcsTitle: {
      fontSize: `${px2vw(30)}`,
      lineHeight: `${px2vw(50)}`,
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        backgroundColor: "#2699FB",
        bottom: 0,
        left: 0
      }
    },
    wcsStepBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      filter: "opacity(0.8)"
    },
    wcsContext: {
      marginTop: `${px2vw(44)}`,
      backgroundColor: "#fff",
      opacity: 0.3,
      padding: `${px2vw(50)}`
    },
    wcsTextWrapper: {
      display: "flex",
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      position: "relative",
      "&:before": {
        position: "absolute",
        left: `-${px2vw(14)}`,
        transform: "translateY(0.25em)",
        width: `${px2vw(9)}`,
        height: `${px2vw(9)}`,
        borderRadius: "50%",
        backgroundColor: "#2699FB",
        content: "''"
      }
    },
    wepCard: {
      borderRadius: `${px2vw(8)}`,
      marginTop: `${px2vw(20)}`,
      padding: `${px2vw(40)}`
    },
    wepTitle: {
      fontSize: `${px2vw(30)}`,
      lineHeight: `${px2vw(50)}`,
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        backgroundColor: "#2699FB",
        bottom: 0,
        left: 0
      }
    },
    wepBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    },
    wepItem: {
      width: "23%",
      backgroundColor: "#f1f4f9",
      filter: "opacity(0.3)",
      height: `${px2vw(102)}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      fontWeight: "bold",
      color: "#373737",
      marginBottom: `${px2vw(20)}`
    },
    stwCard: {
      borderRadius: `${px2vw(8)}`,
      marginTop: `${px2vw(20)}`,
      padding: `${px2vw(40)}`
    },
    stwTitle: {
      fontSize: `${px2vw(30)}`,
      lineHeight: `${px2vw(50)}`,
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        backgroundColor: "#2699FB",
        bottom: 0,
        left: 0
      }
    },
    stwBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    },
    stwItem: {
      width: "31%",
      padding: `${px2vw(20)}`,
      backgroundColor: "#f1f4f9",
      filter: "opacity(0.3)",
      paddingLeft: `${px2vw(34)}`,
      marginBottom: `${px2vw(23)}`
    },
    stwCardTitle: {
      fontSize: `${px2vw(20)}`,
      lineHeight: `${px2vw(23)}`,
      fontWeight: "bold",
      color: "#000",
      marginBottom: theme.spacing(1)
    },
    stwTextWrapper: {
      display: "flex",
      marginBottom: theme.spacing(1),
      position: "relative",
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      color: "#000",
      "&:before": {
        position: "absolute",
        left: `-${px2vw(14)}`,
        transform: "translateY(0.25em)",
        width: `${px2vw(9)}`,
        height: `${px2vw(9)}`,
        borderRadius: "50%",
        backgroundColor: "#2699FB",
        content: "''"
      }
    },
    whatCard: {
      borderRadius: `${px2vw(10)}`,
      marginTop: `${px2vw(20)}`,
      padding: `${px2vw(40)}`
    },
    whatTitle: {
      fontSize: `${px2vw(30)}`,
      lineHeight: `${px2vw(34)}`,
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        backgroundColor: "#2699FB",
        bottom: 0,
        left: 0
      }
    },
    whatSubTitle: {
      fontSize: `${px2vw(20)}`,
      lineHeight: `${px2vw(23)}`,
      fontWeight: "bold",
      color: "#000",
      marginBottom: `${px2vw(36)}`
    },
    whatBox: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
    },
    whatItem: {
      width: "23%",
      backgroundColor: "#f1f4f9",
      filter: "opacity(0.3)",
      height: `${px2vw(102)}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      fontWeight: "bold",
      color: "#373737",
      marginBottom: `${px2vw(20)}`
    },
    wdmsCard: {
      borderRadius: `${px2vw(8)}`,
      marginTop: `${px2vw(20)}`,
      padding: `${px2vw(40)}`
    },
    wdmsTitle: {
      fontSize: `${px2vw(30)}`,
      lineHeight: `${px2vw(50)}`,
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        backgroundColor: "#2699FB",
        bottom: 0,
        left: 0
      }
    },
    wdmsBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    },
    wdmsItem: {
      width: "31%",
      padding: `${px2vw(20)}`,
      backgroundColor: "#f1f4f9",
      filter: "opacity(0.3)",
      paddingLeft: `${px2vw(34)}`,
      marginBottom: `${px2vw(23)}`
    },
    wdmsCardTitle: {
      fontSize: `${px2vw(20)}`,
      lineHeight: `${px2vw(23)}`,
      fontWeight: "bold",
      color: "#000",
      marginBottom: theme.spacing(1)
    },
    wdmsTextWrapper: {
      display: "flex",
      marginBottom: theme.spacing(1),
      position: "relative",
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      color: "#000",
      "&:before": {
        position: "absolute",
        left: `-${px2vw(14)}`,
        transform: "translateY(0.25em)",
        width: `${px2vw(9)}`,
        height: `${px2vw(9)}`,
        borderRadius: "50%",
        backgroundColor: "#2699FB",
        content: "''"
      }
    },
    sbysCard: {
      borderRadius: `${px2vw(8)}`,
      marginTop: `${px2vw(20)}`,
      padding: `${px2vw(40)}`
    },
    sbysBox: {
      display: "flex",
      height: `${px2vw(184)}`,
      backgroundColor: "rgba(255,255,255,0.3)",
      padding: `0 ${px2vw(34)}`
    },
    sbysSmileIcon: {
      marginTop: `${px2vw(48)}`
    },
    sbysTextWrapper: {
      marginTop: `${px2vw(48)}`,
      marginLeft: `${px2vw(26)}`
    },
    sbysTitle: {
      fontSize: `${px2vw(20)}`,
      lineHeight: 1,
      fontWeight: "bold",
      color: "#373737"
    },
    sbysText: {
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(24)}`,
      color: "#000"
    },
    sbysBtn: {
      width: `${px2vw(274)}`,
      height: `${px2vw(68)}`,
      color: "#40C4FF",
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      borderRadius: `${px2vw(8)}`,
      alignSelf: "center",
      backgroundColor: "#fff",
      filter: "opacity(0.5)"
    }
  })
);
export interface IServicePageProps {}
const ServicePage: React.FC<IServicePageProps> = (props: IServicePageProps) => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <PageHeader />
        <div className={classes.sectionService}>
          <div className={classes.serviceLeft}>
            <Sider />
          </div>
          <div className={classes.serviceRight}>
            <Card customStyles={classes.sdsCard} blurActive={false}>
              <div className={classes.sdsTitle}>Software Development Services</div>
              <div className={classes.sdsImg}></div>
              <div className={classes.sdsText}>
                Software development services cover design, engineering, deployment, support,
                scaling and evolution of various software types. In IT since 1989, ScienceSoft
                develops quality software and offers related services – software consulting, cloud
                migration, app integration, and more. We serve mid and large enterprises and
                startups across 23+ industries.
              </div>
            </Card>
            <Card customStyles={classes.wsaCard} blurActive={false}>
              <div className={classes.wsaTitle}>WHAT SERVICE ARE YOU LOOKING FOR?</div>
              <div className={classes.wsaBox}>
                <MuiCard className={classes.wsaCardItem}>
                  <div className={classes.wsaCardImg}>
                    <Card1Icon />
                  </div>
                  <div className={classes.wsaCardTitle}>
                    Complete software development outsourcing
                  </div>
                  <div className={classes.wsaCardText}>
                    Shouldering complete software development project pipeline or its part to
                    support your business growth.
                  </div>
                  <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                </MuiCard>
                <MuiCard className={classes.wsaCardItem}>
                  <div className={classes.wsaCardImg}>
                    <Card2Icon />
                  </div>
                  <div className={classes.wsaCardTitle}>
                    Complete software development outsourcing
                  </div>
                  <div className={classes.wsaCardText}>
                    Shouldering complete software development project pipeline or its part to
                    support your business growth.
                  </div>
                  <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                </MuiCard>
                <MuiCard className={classes.wsaCardItem}>
                  <div className={classes.wsaCardImg}>
                    <Card3Icon />
                  </div>
                  <div className={classes.wsaCardTitle}>
                    Complete software development outsourcing
                  </div>
                  <div className={classes.wsaCardText}>
                    Shouldering complete software development project pipeline or its part to
                    support your business growth.
                  </div>
                  <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                </MuiCard>
                <MuiCard className={classes.wsaCardItem}>
                  <div className={classes.wsaCardImg}>
                    <Card4Icon />
                  </div>
                  <div className={classes.wsaCardTitle}>
                    Complete software development outsourcing
                  </div>
                  <div className={classes.wsaCardText}>
                    Shouldering complete software development project pipeline or its part to
                    support your business growth.
                  </div>
                  <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                </MuiCard>
                <MuiCard className={classes.wsaCardItem}>
                  <div className={classes.wsaCardImg}>
                    <Card5Icon />
                  </div>
                  <div className={classes.wsaCardTitle}>
                    Complete software development outsourcing
                  </div>
                  <div className={classes.wsaCardText}>
                    Shouldering complete software development project pipeline or its part to
                    support your business growth.
                  </div>
                  <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                </MuiCard>
                <MuiCard className={classes.wsaCardItem}>
                  <div className={classes.wsaCardImg}>
                    <Card6Icon />
                  </div>
                  <div className={classes.wsaCardTitle}>
                    Complete software development outsourcing
                  </div>
                  <div className={classes.wsaCardText}>
                    Shouldering complete software development project pipeline or its part to
                    support your business growth.
                  </div>
                  <ButtonBase className={classes.wsaCardBtn}>OUTSOURCE 100% OF IT</ButtonBase>
                </MuiCard>
              </div>
            </Card>
            <Card customStyles={classes.sfCard} blurActive={false}>
              <div className={classes.sfTitle}>SCIENCESOFT’S FACTS</div>
              <div className={classes.sfCardBox}>
                <MuiCard className={classes.sfCardItem}>
                  <div className={classes.sfCardImg}>
                    <Sf1Icon />
                  </div>
                  <div className={classes.sfCardTitle}>Web applications</div>
                </MuiCard>
                <MuiCard className={classes.sfCardItem}>
                  <div className={classes.sfCardImg}>
                    <Sf2Icon />
                  </div>
                  <div className={classes.sfCardTitle}>Mobile apps</div>
                </MuiCard>
                <MuiCard className={classes.sfCardItem}>
                  <div className={classes.sfCardImg}>
                    <Sf3Icon />
                  </div>
                  <div className={classes.sfCardTitle}>Cloud applications</div>
                </MuiCard>
                <MuiCard className={classes.sfCardItem}>
                  <div className={classes.sfCardImg}>
                    <Sf4Icon />
                  </div>
                  <div className={classes.sfCardTitle}>SaaS products</div>
                </MuiCard>
                <MuiCard className={classes.sfCardItem}>
                  <div className={classes.sfCardImg}>
                    <Sf5Icon />
                  </div>
                  <div className={classes.sfCardTitle}>Desktop applications</div>
                </MuiCard>
                <MuiCard className={classes.sfCardItem}>
                  <div className={classes.sfCardImg}>
                    <Sf6Icon />
                  </div>
                  <div className={classes.sfCardTitle}>Libraries</div>
                </MuiCard>
              </div>
            </Card>
            <Card customStyles={classes.wcsCard} blurActive={false}>
              <div className={classes.wcsTitle}>WHY CHOOSE SCIENCESOFT</div>
              <div className={classes.wcsStepBox}>
                <WcsLeftIcon />
                <img src={"/wcsStep.png"} />
                <WcsRightIcon />
              </div>
              <ul className={classes.wcsContext}>
                <li className={classes.wcsTextWrapper}>31 years in IT.</li>
                <li className={classes.wcsTextWrapper}>
                  One-stop shop for end-to-end software development.
                </li>
                <li className={classes.wcsTextWrapper}>
                  Over 450 developers on board, and the partner network of 5 companies with 700
                  employees.
                </li>
                <li className={classes.wcsTextWrapper}>
                  More than 50% of the developers are of senior level.
                </li>
                <li className={classes.wcsTextWrapper}>
                  25+ business analysts with 5-9 years of experience in the relevant fields.
                </li>
                <li className={classes.wcsTextWrapper}>
                  Mature DevOps culture, deep background in containerized environments, cloud
                  computing, continuous integration (CI) and continuous delivery (CD).
                </li>
                <li className={classes.wcsTextWrapper}>31 years in IT.</li>
              </ul>
            </Card>
            <Card customStyles={classes.wepCard} blurActive={false}>
              <div className={classes.wepTitle}>WE EAGERLY PUT IN USE IT INNOVATIONS</div>
              <div className={classes.wepBox}>
                <div className={classes.wepItem}>Manufacturing</div>
                <div className={classes.wepItem}>Manufacturing</div>
                <div className={classes.wepItem}>Manufacturing</div>
                <div className={classes.wepItem}>Manufacturing</div>
                <div className={classes.wepItem}>Manufacturing</div>
                <div className={classes.wepItem}>Manufacturing</div>
                <div className={classes.wepItem}>Manufacturing</div>
                <div className={classes.wepItem}>Manufacturing</div>
              </div>
            </Card>
            <Card customStyles={classes.stwCard} blurActive={false}>
              <div className={classes.stwTitle}>SOFTWARE TYPES WE DEVELOP</div>
              <div className={classes.stwBox}>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>
                    Enterprise resource and process management
                  </div>
                  <div className={classes.stwTextWrapper}>ERP</div>
                  <div className={classes.stwTextWrapper}>
                    Finance, accounting, invoicing and billing Budgeting
                  </div>
                  <div className={classes.stwTextWrapper}>
                    Document management, contract management, record management
                  </div>
                  <div className={classes.stwTextWrapper}>SCM (Supply Chain Management)</div>
                </div>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>Big data</div>
                  <div className={classes.stwTextWrapper}>Ecommerce</div>
                  <div className={classes.stwTextWrapper}>Customer portals</div>
                  <div className={classes.stwTextWrapper}>Advertising</div>
                  <div className={classes.stwTextWrapper}>Digital signage</div>
                  <div className={classes.stwTextWrapper}>Content management, DAM</div>
                  <div className={classes.stwTextWrapper}>Video streaming</div>
                  <div className={classes.stwTextWrapper}>Customer analytics</div>
                </div>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>Industrial solutions</div>
                  <div className={classes.stwTextWrapper}>Smart factory</div>
                  <div className={classes.stwTextWrapper}>MES</div>
                  <div className={classes.stwTextWrapper}>Maintenance</div>
                  <div className={classes.stwTextWrapper}>Equipment monitoring, OEE</div>
                  <div className={classes.stwTextWrapper}>Quality management</div>
                  <div className={classes.stwTextWrapper}>Field service</div>
                  <div className={classes.stwTextWrapper}>Industrial analytics</div>
                </div>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>Big data</div>
                  <div className={classes.stwTextWrapper}>Ecommerce</div>
                  <div className={classes.stwTextWrapper}>Customer portals</div>
                  <div className={classes.stwTextWrapper}>Advertising</div>
                  <div className={classes.stwTextWrapper}>Digital signage</div>
                  <div className={classes.stwTextWrapper}>Content management, DAM</div>
                  <div className={classes.stwTextWrapper}>Video streaming</div>
                  <div className={classes.stwTextWrapper}>Customer analytics</div>
                </div>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>Big data</div>
                  <div className={classes.stwTextWrapper}>Ecommerce</div>
                  <div className={classes.stwTextWrapper}>Customer portals</div>
                  <div className={classes.stwTextWrapper}>Advertising</div>
                  <div className={classes.stwTextWrapper}>Digital signage</div>
                  <div className={classes.stwTextWrapper}>Content management, DAM</div>
                  <div className={classes.stwTextWrapper}>Video streaming</div>
                  <div className={classes.stwTextWrapper}>Customer analytics</div>
                </div>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>Industrial solutions</div>
                  <div className={classes.stwTextWrapper}>Smart factory</div>
                  <div className={classes.stwTextWrapper}>MES</div>
                  <div className={classes.stwTextWrapper}>Maintenance</div>
                  <div className={classes.stwTextWrapper}>Equipment monitoring, OEE</div>
                  <div className={classes.stwTextWrapper}>Quality management</div>
                  <div className={classes.stwTextWrapper}>Field service</div>
                  <div className={classes.stwTextWrapper}>Industrial analytics</div>
                </div>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>
                    Enterprise resource and process management
                  </div>
                  <div className={classes.stwTextWrapper}>ERP</div>
                  <div className={classes.stwTextWrapper}>
                    Finance, accounting, invoicing and billing Budgeting
                  </div>
                  <div className={classes.stwTextWrapper}>
                    Document management, contract management, record management
                  </div>
                  <div className={classes.stwTextWrapper}>SCM (Supply Chain Management)</div>
                </div>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>Big data</div>
                  <div className={classes.stwTextWrapper}>Ecommerce</div>
                  <div className={classes.stwTextWrapper}>Customer portals</div>
                  <div className={classes.stwTextWrapper}>Advertising</div>
                  <div className={classes.stwTextWrapper}>Digital signage</div>
                  <div className={classes.stwTextWrapper}>Content management, DAM</div>
                  <div className={classes.stwTextWrapper}>Video streaming</div>
                  <div className={classes.stwTextWrapper}>Customer analytics</div>
                </div>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>Industrial solutions</div>
                  <div className={classes.stwTextWrapper}>Smart factory</div>
                  <div className={classes.stwTextWrapper}>MES</div>
                  <div className={classes.stwTextWrapper}>Maintenance</div>
                  <div className={classes.stwTextWrapper}>Equipment monitoring, OEE</div>
                  <div className={classes.stwTextWrapper}>Quality management</div>
                  <div className={classes.stwTextWrapper}>Field service</div>
                  <div className={classes.stwTextWrapper}>Industrial analytics</div>
                </div>
              </div>
            </Card>
            <Card customStyles={classes.whatCard} blurActive={false}>
              <div className={classes.whatTitle}>
                WE HAVE A TRACK OF SUCCESSFUL PROJECTS IN VARIOUS INDUSTRIES
              </div>
              <div className={classes.whatSubTitle}>
                We developed integrated solutions and provided IT consulting services for leading
                enterprises and startups around the globe.
              </div>
              <div className={classes.whatBox}>
                <div className={classes.whatItem}>Manufacturing</div>
                <div className={classes.whatItem}>Manufacturing</div>
                <div className={classes.whatItem}>Manufacturing</div>
                <div className={classes.whatItem}>Manufacturing</div>
                <div className={classes.whatItem}>Manufacturing</div>
                <div className={classes.whatItem}>Manufacturing</div>
                <div className={classes.whatItem}>Manufacturing</div>
                <div className={classes.whatItem}>Manufacturing</div>
              </div>
            </Card>
            <Card customStyles={classes.wdmsCard} blurActive={false}>
              <div className={classes.wdmsTitle}>WHAT DEFINES MODERN SOFTWARE DEVELOPMENT?</div>
              <div className={classes.wdmsBox}>
                <div className={classes.wdmsItem}>
                  <div className={classes.wdmsCardTitle}>
                    Enterprise resource and process management
                  </div>
                  <div className={classes.wdmsTextWrapper}>ERP</div>
                  <div className={classes.wdmsTextWrapper}>
                    Finance, accounting, invoicing and billing Budgeting
                  </div>
                  <div className={classes.wdmsTextWrapper}>
                    Document management, contract management, record management
                  </div>
                  <div className={classes.wdmsTextWrapper}>SCM (Supply Chain Management)</div>
                </div>
                <div className={classes.wdmsItem}>
                  <div className={classes.wdmsCardTitle}>Big data</div>
                  <div className={classes.wdmsTextWrapper}>Ecommerce</div>
                  <div className={classes.wdmsTextWrapper}>Customer portals</div>
                  <div className={classes.wdmsTextWrapper}>Advertising</div>
                  <div className={classes.wdmsTextWrapper}>Digital signage</div>
                  <div className={classes.wdmsTextWrapper}>Content management, DAM</div>
                  <div className={classes.wdmsTextWrapper}>Video streaming</div>
                  <div className={classes.wdmsTextWrapper}>Customer analytics</div>
                </div>
                <div className={classes.wdmsItem}>
                  <div className={classes.wdmsCardTitle}>Industrial solutions</div>
                  <div className={classes.wdmsTextWrapper}>Smart factory</div>
                  <div className={classes.wdmsTextWrapper}>MES</div>
                  <div className={classes.wdmsTextWrapper}>Maintenance</div>
                  <div className={classes.wdmsTextWrapper}>Equipment monitoring, OEE</div>
                  <div className={classes.wdmsTextWrapper}>Quality management</div>
                  <div className={classes.wdmsTextWrapper}>Field service</div>
                  <div className={classes.wdmsTextWrapper}>Industrial analytics</div>
                </div>
              </div>
            </Card>
            <Card customStyles={classes.sbysCard} blurActive={false}>
              <div className={classes.sbysBox}>
                <SmileIcon className={classes.sbysSmileIcon} />
                <div className={classes.sbysTextWrapper}>
                  <div className={classes.sbysTitle}>
                    Start Building Your Software in a Couple of Weeks!
                  </div>
                  <div className={classes.sbysText}>
                    We will develop a scalable solution with neat UX design that answers your
                    business needs.
                  </div>
                </div>
                <ButtonBase className={classes.sbysBtn}>GET A FREE CONSULTATION</ButtonBase>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServicePage;

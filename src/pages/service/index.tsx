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
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: "276px",
      paddingRight: "276px",
      alignSelf: "stretch"
    },
    sectionService: {
      display: "flex",
      marginTop: "20px"
    },
    serviceLeft: {
      width: "320px",
      marginRight: "20px"
    },
    serviceRight: {
      flex: 1
    },
    sdsCard: {
      padding: "40px",
      borderRadius: "10px"
    },
    sdsTitle: {
      fontSize: "30px",
      lineHeight: "50px",
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
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
    sdsImg: {
      height: "300px",
      background: "url(/sds.png) no-repeat center",
      backgroundSize: "cover"
    },
    sdsText: {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#000"
    },
    wsaCard: {
      borderRadius: "10px",
      marginTop: "20px",
      padding: "40px"
    },
    wsaTitle: {
      fontSize: "30px",
      lineHeight: "50px",
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
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
      padding: "32px 25px",
      marginBottom: "20px"
    },
    wsaCardImg: {
      width: "91px",
      height: "91px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "26px"
    },
    wsaCardTitle: {
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: "bold",
      color: "#000",
      textAlign: "center",
      marginBottom: "21px"
    },
    wsaCardText: {
      fontSize: "14px",
      lineHeight: "24px",
      color: "#000",
      textAlign: "center"
    },
    wsaCardBtn: {
      color: "#2699FB",
      height: "54px",
      backgroundColor: "rgba(255,255,255,0.5)",
      borderRadius: "8px",
      marginTop: "27px",
      textAlign: "center",
      padding: "0 35px"
    },
    sfCard: {
      borderRadius: "8px",
      marginTop: "20px",
      padding: "40px"
    },
    sfTitle: {
      fontSize: "30px",
      lineHeight: "50px",
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
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
      padding: "32px 25px",
      marginBottom: "20px"
    },
    sfCardImg: {
      width: "79px",
      height: "79px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "26px"
    },
    sfCardTitle: {
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: "bold",
      color: "#000",
      textAlign: "center",
      marginBottom: "21px"
    },
    wcsCard: {
      borderRadius: "8px",
      marginTop: "20px",
      padding: "40px"
    },
    wcsTitle: {
      fontSize: "30px",
      lineHeight: "50px",
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
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
    wcsStepBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      filter: "opacity(0.8)"
    },
    wcsContext: {
      marginTop: "44px",
      backgroundColor: "#fff",
      opacity: 0.3,
      padding: "50px"
    },
    wcsTextWrapper: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      lineHeight: "18px"
    },
    wcsDot: {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      backgroundColor: "#2699FB",
      marginRight: theme.spacing(1),
      flexShrink: 0
    },
    wepCard: {
      borderRadius: "8px",
      marginTop: "20px",
      padding: "40px"
    },
    wepTitle: {
      fontSize: "30px",
      lineHeight: "50px",
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
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
      height: "102px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: "bold",
      color: "#373737",
      marginBottom: "20px"
    },
    stwCard: {
      borderRadius: "8px",
      marginTop: "20px",
      padding: "40px"
    },
    stwTitle: {
      fontSize: "30px",
      lineHeight: "50px",
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(4),
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
    stwBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    },
    stwItem: {
      width: "31%",
      padding: "20px",
      backgroundColor: "#f1f4f9",
      filter: "opacity(0.3)"
    },
    stwCardTitle: {
      fontSize: "20px",
      lineHeight: "23px",
      fontWeight: "bold",
      color: "#000",
      marginBottom: theme.spacing(1)
    },
    stwTextWrapper: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(1)
    },
    stwDot: {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      flexShrink: 0,
      backgroundColor: "#2699FB",
      marginRight: theme.spacing(1)
    },
    stwText: {
      fontSize: "16px",
      lineHeight: "18px",
      color: "#000"
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
            <Card className={classes.sdsCard}>
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
            <Card className={classes.wsaCard}>
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
            <Card className={classes.sfCard}>
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
            <Card className={classes.wcsCard}>
              <div className={classes.wcsTitle}>WHY CHOOSE SCIENCESOFT</div>
              <div className={classes.wcsStepBox}>
                <WcsLeftIcon />
                <img src={"/wcsStep.png"} />
                <WcsRightIcon />
              </div>
              <div className={classes.wcsContext}>
                <div className={classes.wcsTextWrapper}>
                  <span className={classes.wcsDot}></span>
                  <span>31 years in IT.</span>
                </div>
                <div className={classes.wcsTextWrapper}>
                  <span className={classes.wcsDot}></span>
                  <span>One-stop shop for end-to-end software development.</span>
                </div>
                <div className={classes.wcsTextWrapper}>
                  <span className={classes.wcsDot}></span>
                  <span>
                    Over 450 developers on board, and the partner network of 5 companies with 700
                    employees.
                  </span>
                </div>
                <div className={classes.wcsTextWrapper}>
                  <span className={classes.wcsDot}></span>
                  <span>More than 50% of the developers are of senior level.</span>
                </div>
                <div className={classes.wcsTextWrapper}>
                  <span className={classes.wcsDot}></span>
                  <span>
                    25+ business analysts with 5-9 years of experience in the relevant fields.
                  </span>
                </div>
                <div className={classes.wcsTextWrapper}>
                  <span
                    style={{ alignSelf: "flex-start", marginTop: "5px" }}
                    className={classes.wcsDot}></span>
                  <span>
                    Mature DevOps culture, deep background in containerized environments, cloud
                    computing, continuous integration (CI) and continuous delivery (CD).
                  </span>
                </div>
                <div className={classes.wcsTextWrapper}>
                  <span className={classes.wcsDot}></span>
                  <span>31 years in IT.</span>
                </div>
              </div>
            </Card>
            <Card className={classes.wepCard}>
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
            <Card className={classes.stwCard}>
              <div className={classes.stwTitle}>SOFTWARE TYPES WE DEVELOP</div>
              <div className={classes.stwBox}>
                <div className={classes.stwItem}>
                  <div className={classes.stwCardTitle}>
                    Enterprise resource and process management
                  </div>
                  <div className={classes.stwTextWrapper}>
                    <span className={classes.stwDot}></span>
                    <span className={classes.stwText}>ERP</span>
                  </div>
                  <div className={classes.stwTextWrapper}>
                    <span className={classes.stwDot}></span>
                    <span className={classes.stwText}>
                      Finance, accounting, invoicing and billing Budgeting
                    </span>
                  </div>
                  <div className={classes.stwTextWrapper}>
                    <span className={classes.stwDot}></span>
                    <span className={classes.stwText}>
                      Document management, contract management, record management
                    </span>
                  </div>
                  <div className={classes.stwTextWrapper}>
                    <span className={classes.stwDot}></span>
                    <span className={classes.stwText}> SCM (Supply Chain Management)</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServicePage;

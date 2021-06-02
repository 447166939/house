import React, { Fragment, useState, useCallback } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import actions from "@/store/modules/global/action";
import { RootState } from "@/store/index";
const {
  // MAIN MENUS APP BAR
  setAppBarServiceMenuVisible,
  setAppBarTechnologiesMenuVisible,
  setAppBarSolutionsMenuVisible,
  setAppBarBlogAndNewsMenuVisible,

  // MAIN MENUS
  setServiceMenuVisible,
  setTechnologiesMenuVisible,
  setSolutionsMenuVisible,
  setBlogAndNewsMenuVisible,

  // SERVICES SUB-MENUS
  setServiceSoftwareDevelopmentSubMenuVisible,
  setServiceUiuxDesignSubMenuVisible,
  setServiceTestQaSubMenuVisible,
  setServiceInfrustructureServiceSubMenuVisible,
  setServiceDataAnalyticsServiceSubMenuVisible,
  setServiceItOutsourcingSubMenuVisible,
  setServiceItConsultingSubMenuVisible,
  setServiceItSupportSubMenuVisible,

  // TECHNOLOGIES SUB-MENUS
  setTechnologiesProgrammingLanguagesSubMenuVisible,
  // SUB-SUB-DETAILS TECHNOLOGIES_PROGRAMMING_LANGUAGES
  setTechnologiesProgrammingLanguagesJavaSubMenuVisible,
  setTechnologiesProgrammingLanguagesPythonSubMenuVisible,
  setTechnologiesProgrammingLanguagesGolangSubMenuVisible,
  setTechnologiesProgrammingLanguagesCSubMenuVisible,
  setTechnologiesProgrammingLanguagesJavaScriptSubMenuVisible,
  setTechnologiesProgrammingLanguagesNodeJSSubMenuVisible,
  setTechnologiesProgrammingLanguagesPHPSubMenuVisible,
  setTechnologiesProgrammingLanguagesNETSubMenuVisible,

  // SUB-SUB-DETAILS ADVANCED_TECHNOLOGIES
  setTechnologiesAdvancedTechnologiesSubMenuVisible,
  // SUB-SUB-DETAILS TECHNOLOGIES_ADVANCED_TECHNOLOGIES
  setTechnologiesAdvancedTechnologiesDataScienceSubMenuVisible,
  setTechnologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible,
  setTechnologiesAdvancedTechnologiesVirtualRealitySubMenuVisible,
  setTechnologiesAdvancedTechnologiesBigDataSubMenuVisible,
  setTechnologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible,
  setTechnologiesAdvancedTechnologiesCloudComputingSubMenuVisible,

  // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
  setTechnologiesCloudTechnologiesSubMenuVisible,
  // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
  setTechnologiesCloudTechnologiesAmazonWebServiceSubMenuVisible,
  setTechnologiesCloudTechnologiesMicroSoftAzureSubMenuVisible,
  setTechnologiesCloudTechnologiesSalesForceSubMenuVisible,
  setTechnologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible,

  // SOLUTION SUB-MENUS
  setSolutionsCrmSubMenuVisible,
  setSolutionsMarketingAdvertisingSubMenuVisible,
  setSolutionsDataAnalyticsSubMenuVisible,
  setSolutionsECommerceSubMenuVisible,
  setSolutionsSupplyChainSubMenuVisible,
  setSolutionsHumanResourcesSubMenuVisible,
  setSolutionsELearningSubMenuVisible,

  // LAST PART
  closeAllMenu
} = actions;
const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#2699FB",
    position: "relative",
    background: "inherit",
    outline: "none",
    border: "none",
    boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    height: "40px",
    padding: theme.spacing(2),
    marginRight: "32px"
  },
  active: {
    color: "#CBD5E5",
    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      boxShadow:
        "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset",
      borderRadius: "8px"
    }
  }
}));
export interface ITabsProps {
  menus: string[];
  onChange: (index: number) => void;
}
const Tabs: React.FC<ITabsProps> = (props: ITabsProps) => {
  const { onChange = function () {}, menus = [] } = props;
  // const { onChange, menus } = props;
  const classes = useStyles();
  const [idx, setIdx] = useState();
  const dispatch = useDispatch();
  const {
    // MAIN MENUS APP BAR
    appBarServiceMenuVisible,
    appBarTechnologiesMenuVisible,
    appBarSolutionsMenuVisible,
    appBarBlogAndNewsMenuVisible,

    // MAIN MENUS
    serviceMenuVisible,
    technologiesMenuVisible,
    solutionsMenuVisible,
    blogAndNewsMenuVisible,

    // SERVICES SUB-MENUS
    serviceSoftwareDevelopmentSubMenuVisible,
    serviceUiuxDesignSubMenuVisible,
    serviceTestQaSubMenuVisible,
    serviceInfrustructureServiceSubMenuVisible,
    serviceDataAnalyticsServiceSubMenuVisible,
    serviceItOutsourcingSubMenuVisible,
    serviceItConsultingSubMenuVisible,
    serviceItSupportSubMenuVisible,

    // TECHNOLOGIES SUB-MENUS
    technologiesProgrammingLanguagesSubMenuVisible,
    // SUB-SUB-DETAILS TECHNOLOGIES_PROGRAMMING_LANGUAGES
    technologiesProgrammingLanguagesJavaSubMenuVisible,
    technologiesProgrammingLanguagesPythonSubMenuVisible,
    technologiesProgrammingLanguagesGolangSubMenuVisible,
    technologiesProgrammingLanguagesCSubMenuVisible,
    technologiesProgrammingLanguagesJavaScriptSubMenuVisible,
    technologiesProgrammingLanguagesNodeJSSubMenuVisible,
    technologiesProgrammingLanguagesPHPSubMenuVisible,
    technologiesProgrammingLanguagesNETSubMenuVisible,

    // SUB-SUB-DETAILS ADVANCED_TECHNOLOGIES
    technologiesAdvancedTechnologiesSubMenuVisible,
    // SUB-SUB-DETAILS TECHNOLOGIES_ADVANCED_TECHNOLOGIES
    technologiesAdvancedTechnologiesDataScienceSubMenuVisible,
    technologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible,
    technologiesAdvancedTechnologiesVirtualRealitySubMenuVisible,
    technologiesAdvancedTechnologiesBigDataSubMenuVisible,
    technologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible,
    technologiesAdvancedTechnologiesCloudComputingSubMenuVisible,

    // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
    technologiesCloudTechnologiesSubMenuVisible,
    // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
    technologiesCloudTechnologiesAmazonWebServiceSubMenuVisible,
    technologiesCloudTechnologiesMicroSoftAzureSubMenuVisible,
    technologiesCloudTechnologiesSalesForceSubMenuVisible,
    technologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible,

    // SOLUTION SUB-MENUS
    solutionsCrmSubMenuVisible,
    solutionsMarketingAdvertisingSubMenuVisible,
    solutionsDataAnalyticsSubMenuVisible,
    solutionsECommerceSubMenuVisible,
    solutionsSupplyChainSubMenuVisible,
    solutionsHumanResourcesSubMenuVisible,
    solutionsELearningSubMenuVisible,

    // LAST PART
    closeAllMenu
  } = useSelector((state: RootState) => state.global);
  const handleClick = useCallback(
    (index) => {
      setIdx(index);
      if (index == 0) {
        dispatch(setServiceMenuVisible(!serviceMenuVisible));
      } else if (index == 1) {
        dispatch(setTechnologiesMenuVisible(!technologiesMenuVisible));
      } else if (index == 2) {
        dispatch(setSolutionsMenuVisible(!solutionsMenuVisible));
      } else if (index == 3) {
        dispatch(setBlogAndNewsMenuVisible(!blogAndNewsMenuVisible));
      }
      onChange(index);
    },
    [idx, serviceMenuVisible, technologiesMenuVisible, solutionsMenuVisible, blogAndNewsMenuVisible]
  );

  return (
    <>
      {menus.map((item, index) => {
        return (
          <ButtonBase
            key={index}
            onClick={handleClick.bind(null, index)}
            className={clsx(classes.btn, {
              [classes.active]: [
                serviceMenuVisible,
                technologiesMenuVisible,
                solutionsMenuVisible,
                blogAndNewsMenuVisible
              ][index]
            })}
            disableRipple>
            {item}
          </ButtonBase>
        );
      })}
    </>
  );
};
export default Tabs;

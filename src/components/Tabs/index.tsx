import React, { Fragment, useState, useCallback } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import actions from "@/store/modules/global/action";
import { RootState } from "@/store/index";
import useGlobalStyles from "../../theme/globalStyles/globalStyles";
const {
  // MAIN MENUS APP BAR
  setAppBarServiceMenuVisible,
  setAppBarTechnologiesMenuVisible,
  setAppBarSolutionsMenuVisible,
  setAppBarBlogAndNewsMenuVisible,

  // TECHNOLOGIES SUB-MENUS APP_BAR
  setAppBarTechnologiesProgrammingLanguagesSubMenuVisible,
  setAppBarTechnologiesAdvancedTechnologiesSubMenuVisible,
  setAppBarTechnologiesCloudTechnologiesSubMenuVisible,

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

export interface ITabsProps {
  menus: string[];
  onChange?: (index: number) => void;
}
const Tabs: React.FC<ITabsProps> = (props: ITabsProps) => {
  const { onChange = function () {}, menus = [] } = props;
  // const { onChange, menus } = props;
  // already lifted the BTN styles to Global Styles
  // const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [idx, setIdx] = useState();
  const dispatch = useDispatch();
  const {
    // MAIN MENUS APP BAR
    appBarServiceMenuVisible,
    appBarTechnologiesMenuVisible,
    appBarSolutionsMenuVisible,
    appBarBlogAndNewsMenuVisible,
    // TECHNOLOGIES SUB-MENUS APP_BAR
    appBarTechnologiesProgrammingLanguagesSubMenuVisible,
    appBarTechnologiesAdvancedTechnologiesSubMenuVisible,
    appBarTechnologiesCloudTechnologiesSubMenuVisible,

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
        dispatch(setAppBarServiceMenuVisible(!appBarServiceMenuVisible));
      } else if (index == 1) {
        dispatch(setAppBarTechnologiesMenuVisible(!appBarTechnologiesMenuVisible));
      } else if (index == 2) {
        dispatch(setAppBarSolutionsMenuVisible(!appBarSolutionsMenuVisible));
      } else if (index == 3) {
        dispatch(setAppBarBlogAndNewsMenuVisible(!appBarBlogAndNewsMenuVisible));
      }
      onChange(index);
    },
    [
      idx,
      appBarServiceMenuVisible,
      appBarTechnologiesMenuVisible,
      appBarSolutionsMenuVisible,
      appBarBlogAndNewsMenuVisible
    ]
  );

  return (
    <>
      {menus.map((item, index) => {
        return (
          <ButtonBase
            key={index}
            onClick={handleClick.bind(null, index)}
            className={clsx(globalClasses.mainMenuBtn, {
              [globalClasses.mainMenuBtnActive]: [
                appBarServiceMenuVisible,
                appBarTechnologiesMenuVisible,
                appBarSolutionsMenuVisible,
                appBarBlogAndNewsMenuVisible
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

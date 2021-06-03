import { handleActions } from "redux-actions";
import actions from "./action";

export const namespace = "global";
export const defaultState = {
  // MAIN MENUS APP_BAR
  appBarServiceMenuVisible: false,
  appBarTechnologiesMenuVisible: false,
  appBarSolutionsMenuVisible: false,
  appBarBlogAndNewsMenuVisible: false,
  // TECHNOLOGIES SUB-MENUS APP_BAR
  appBarTechnologiesProgrammingLanguagesSubMenuVisible: false,
  appBarTechnologiesAdvancedTechnologiesSubMenuVisible: false,
  appBarTechnologiesCloudTechnologiesSubMenuVisible: false,
  // MAIN MENUS
  serviceMenuVisible: false,
  technologiesMenuVisible: false,
  solutionsMenuVisible: false,
  blogAndNewsMenuVisible: false,
  // SERVICES SUB-MENUS
  serviceSoftwareDevelopmentSubMenuVisible: false,
  serviceUiuxDesignSubMenuVisible: false,
  serviceTestQaSubMenuVisible: false,
  serviceInfrustructureServiceSubMenuVisible: false,
  serviceDataAnalyticsServiceSubMenuVisible: false,
  serviceItOutsourcingSubMenuVisible: false,
  serviceItConsultingSubMenuVisible: false,
  serviceItSupportSubMenuVisible: false,
  // TECHNOLOGIES SUB-MENUS
  technologiesProgrammingLanguagesSubMenuVisible: false,
  // SUB-SUB-DETAILS TECHNOLOGIES_PROGRAMMING_LANGUAGES
  technologiesProgrammingLanguagesJavaSubMenuVisible: false,
  technologiesProgrammingLanguagesPythonSubMenuVisible: false,
  technologiesProgrammingLanguagesGolangSubMenuVisible: false,
  technologiesProgrammingLanguagesCSubMenuVisible: false,
  technologiesProgrammingLanguagesJavaScriptSubMenuVisible: false,
  technologiesProgrammingLanguagesNodeJSSubMenuVisible: false,
  technologiesProgrammingLanguagesPHPSubMenuVisible: false,
  technologiesProgrammingLanguagesNETSubMenuVisible: false,
  // SUB-SUB-DETAILS ADVANCED_TECHNOLOGIES
  technologiesAdvancedTechnologiesSubMenuVisible: false,
  // SUB-SUB-DETAILS TECHNOLOGIES_ADVANCED_TECHNOLOGIES
  technologiesAdvancedTechnologiesDataScienceSubMenuVisible: false,
  technologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible: false,
  technologiesAdvancedTechnologiesVirtualRealitySubMenuVisible: false,
  technologiesAdvancedTechnologiesBigDataSubMenuVisible: false,
  technologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible: false,
  technologiesAdvancedTechnologiesCloudComputingSubMenuVisible: false,
  // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
  technologiesCloudTechnologiesSubMenuVisible: false,
  // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
  technologiesCloudTechnologiesAmazonWebServiceSubMenuVisible: false,
  technologiesCloudTechnologiesMicroSoftAzureSubMenuVisible: false,
  technologiesCloudTechnologiesSalesForceSubMenuVisible: false,
  technologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible: false,
  // SOLUTION SUB-MENUS
  solutionsCrmSubMenuVisible: false,
  solutionsMarketingAdvertisingSubMenuVisible: false,
  solutionsDataAnalyticsSubMenuVisible: false,
  solutionsECommerceSubMenuVisible: false,
  solutionsSupplyChainSubMenuVisible: false,
  solutionsHumanResourcesSubMenuVisible: false,
  solutionsELearningSubMenuVisible: false,
  // LAST PART
  closeAllMenu: false
};
const {
  // MAIN MENUS APP_BAR
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
  setCloseAllMenu,
} = actions;
const turnOffState = (state: { [key: string]: boolean }): void => {
  Object.keys(state).forEach((key: string) => {
    state[key] = false;
  });
};
const turnOffAppBarState = (state: { [key: string]: boolean }): void => {
  console.log("turnning off AppBar State!");
  state = {
    ...state,
    appBarServiceMenuVisible: false,
    appBarTechnologiesMenuVisible: false,
    appBarSolutionsMenuVisible: false,
    appBarBlogAndNewsMenuVisible: false,
    appBarTechnologiesProgrammingLanguagesSubMenuVisible: false,
    appBarTechnologiesAdvancedTechnologiesSubMenuVisible: false,
    appBarTechnologiesCloudTechnologiesSubMenuVisible: false
  };
};
export const globalReducer = handleActions(
  {
    // MAIN MENUS APP_BAR
    [setAppBarServiceMenuVisible as unknown as string]: (state, action) => {
      const visible: boolean = action.payload.appBarServiceMenuVisible;
      return {
        ...state,
        appBarServiceMenuVisible: visible,
        appBarTechnologiesMenuVisible: false,
        appBarSolutionsMenuVisible: false,
        appBarBlogAndNewsMenuVisible: false
      };
    },
    [setAppBarTechnologiesMenuVisible as unknown as string]: (state, action) => {
      const visible: boolean = action.payload.appBarTechnologiesMenuVisible;
      return {
        ...state,
        appBarServiceMenuVisible: false,
        appBarTechnologiesMenuVisible: visible,
        appBarSolutionsMenuVisible: false,
        appBarBlogAndNewsMenuVisible: false,
        appBarTechnologiesProgrammingLanguagesSubMenuVisible: visible,
        appBarTechnologiesAdvancedTechnologiesSubMenuVisible: false,
        appBarTechnologiesCloudTechnologiesSubMenuVisible: false
      };
    },
    [setAppBarSolutionsMenuVisible as unknown as string]: (state, action) => {
      const visible: boolean = action.payload.appBarSolutionsMenuVisible;
      return {
        ...state,
        appBarServiceMenuVisible: false,
        appBarTechnologiesMenuVisible: false,
        appBarSolutionsMenuVisible: visible,
        appBarBlogAndNewsMenuVisible: false
      };
    },
    [setAppBarBlogAndNewsMenuVisible as unknown as string]: (state, action) => {
      const visible: boolean = action.payload.appBarBlogAndNewsMenuVisible;
      return {
        ...state,
        appBarServiceMenuVisible: false,
        appBarTechnologiesMenuVisible: false,
        appBarSolutionsMenuVisible: false,
        appBarBlogAndNewsMenuVisible: visible
      };
    },
    // TECHNOLOGIES SUB-MENUS APP_BAR
    [setAppBarTechnologiesProgrammingLanguagesSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      const visible: boolean = action.payload.appBarTechnologiesProgrammingLanguagesSubMenuVisible;
      console.log(
        " setAppBarTechnologiesProgrammingLanguagesSubMenuVisible and current visible is: " +
          visible
      );
      return {
        ...state,
        appBarTechnologiesProgrammingLanguagesSubMenuVisible: visible,
        appBarTechnologiesAdvancedTechnologiesSubMenuVisible: false,
        appBarTechnologiesCloudTechnologiesSubMenuVisible: false
      };
    },
    [setAppBarTechnologiesAdvancedTechnologiesSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      const visible: boolean = action.payload.appBarTechnologiesAdvancedTechnologiesSubMenuVisible;
      return {
        ...state,
        appBarTechnologiesProgrammingLanguagesSubMenuVisible: false,
        appBarTechnologiesAdvancedTechnologiesSubMenuVisible: visible,
        appBarTechnologiesCloudTechnologiesSubMenuVisible: false
      };
    },
    [setAppBarTechnologiesCloudTechnologiesSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      const visible: boolean = action.payload.appBarTechnologiesCloudTechnologiesSubMenuVisible;
      return {
        ...state,
        appBarTechnologiesProgrammingLanguagesSubMenuVisible: false,
        appBarTechnologiesAdvancedTechnologiesSubMenuVisible: false,
        appBarTechnologiesCloudTechnologiesSubMenuVisible: visible
      };
    },
    // MAIN MENUS
    [setServiceMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceSoftwareDevelopmentSubMenuVisible: visible
      };
    },
    [setTechnologiesMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesJavaSubMenuVisible: visible
      };
    },
    [setSolutionsMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsMenuVisible;
      return {
        ...state,
        solutionsMenuVisible: visible,
        solutionsCrmSubMenuVisible: visible
      };
    },
    [setBlogAndNewsMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsMenuVisible;
      return {
        ...state,
        blogAndNewsMenuVisible: visible
      };
    },
    // SERVICES SUB-MENUS
    [setServiceSoftwareDevelopmentSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceSoftwareDevelopmentSubMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceSoftwareDevelopmentSubMenuVisible: visible
      };
    },
    [setServiceUiuxDesignSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceUiuxDesignSubMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceUiuxDesignSubMenuVisible: visible
      };
    },
    [setServiceTestQaSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceTestQaSubMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceTestQaSubMenuVisible: visible
      };
    },
    [setServiceInfrustructureServiceSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceInfrustructureServiceSubMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceInfrustructureServiceSubMenuVisible: visible
      };
    },
    [setServiceDataAnalyticsServiceSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceDataAnalyticsServiceSubMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceDataAnalyticsServiceSubMenuVisible: visible
      };
    },
    [setServiceItOutsourcingSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceItOutsourcingSubMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceItOutsourcingSubMenuVisible: visible
      };
    },
    [setServiceItConsultingSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceItConsultingSubMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceItConsultingSubMenuVisible: visible
      };
    },
    [setServiceItSupportSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.serviceItSupportSubMenuVisible;
      return {
        ...state,
        serviceMenuVisible: visible,
        serviceItSupportSubMenuVisible: visible
      };
    },
    // TECHNOLOGIES SUB-MENUS
    [setTechnologiesProgrammingLanguagesSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesProgrammingLanguagesSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible
      };
    },
    // SUB-SUB-DETAILS TECHNOLOGIES_PROGRAMMING_LANGUAGES
    [setTechnologiesProgrammingLanguagesJavaSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesProgrammingLanguagesJavaSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible,
        technologiesProgrammingLanguagesJavaSubMenuVisible: visible
      };
    },
    [setTechnologiesProgrammingLanguagesPythonSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesProgrammingLanguagesPythonSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible,
        technologiesProgrammingLanguagesPythonSubMenuVisible: visible
      };
    },
    [setTechnologiesProgrammingLanguagesGolangSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesProgrammingLanguagesGolangSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible,
        technologiesProgrammingLanguagesGolangSubMenuVisible: visible
      };
    },
    [setTechnologiesProgrammingLanguagesCSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesProgrammingLanguagesCSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible,
        technologiesProgrammingLanguagesCSubMenuVisible: visible
      };
    },
    [setTechnologiesProgrammingLanguagesJavaScriptSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean =
        action.payload.technologiesProgrammingLanguagesJavaScriptSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible,
        technologiesProgrammingLanguagesJavaScriptSubMenuVisible: visible
      };
    },
    [setTechnologiesProgrammingLanguagesNodeJSSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesProgrammingLanguagesNodeJSSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible,
        technologiesProgrammingLanguagesNodeJSSubMenuVisible: visible
      };
    },
    [setTechnologiesProgrammingLanguagesPHPSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesProgrammingLanguagesPHPSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible,
        technologiesProgrammingLanguagesPHPSubMenuVisible: visible
      };
    },
    [setTechnologiesProgrammingLanguagesNETSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesProgrammingLanguagesNETSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesProgrammingLanguagesSubMenuVisible: visible,
        technologiesProgrammingLanguagesNETSubMenuVisible: visible
      };
    },
    // SUB-SUB-DETAILS ADVANCED_TECHNOLOGIES
    [setTechnologiesAdvancedTechnologiesSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesAdvancedTechnologiesSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible
      };
    },
    // SUB-SUB-DETAILS TECHNOLOGIES_ADVANCED_TECHNOLOGIES
    [setTechnologiesAdvancedTechnologiesDataScienceSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean =
        action.payload.technologiesAdvancedTechnologiesDataScienceSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesAdvancedTechnologiesDataScienceSubMenuVisible: visible
      };
    },
    [setTechnologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible as unknown as string]:
      (state, action) => {
        turnOffState(state);
        const visible: boolean =
          action.payload.technologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible;
        return {
          ...state,
          technologiesMenuVisible: visible,
          technologiesAdvancedTechnologiesSubMenuVisible: visible,
          technologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible: visible
        };
      },
    [setTechnologiesAdvancedTechnologiesVirtualRealitySubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean =
        action.payload.technologiesAdvancedTechnologiesVirtualRealitySubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesAdvancedTechnologiesVirtualRealitySubMenuVisible: visible
      };
    },
    [setTechnologiesAdvancedTechnologiesBigDataSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesAdvancedTechnologiesBigDataSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesAdvancedTechnologiesBigDataSubMenuVisible: visible
      };
    },
    [setTechnologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean =
        action.payload.technologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible: visible
      };
    },
    [setTechnologiesAdvancedTechnologiesCloudComputingSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean =
        action.payload.technologiesAdvancedTechnologiesCloudComputingSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesAdvancedTechnologiesCloudComputingSubMenuVisible: visible
      };
    },
    // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
    [setTechnologiesCloudTechnologiesSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesCloudTechnologiesSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesCloudTechnologiesSubMenuVisible: visible
      };
    },
    // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
    [setTechnologiesCloudTechnologiesAmazonWebServiceSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean =
        action.payload.technologiesCloudTechnologiesAmazonWebServiceSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesCloudTechnologiesAmazonWebServiceSubMenuVisible: visible
      };
    },
    [setTechnologiesCloudTechnologiesMicroSoftAzureSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean =
        action.payload.technologiesCloudTechnologiesMicroSoftAzureSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesCloudTechnologiesMicroSoftAzureSubMenuVisible: visible
      };
    },
    [setTechnologiesCloudTechnologiesSalesForceSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean = action.payload.technologiesCloudTechnologiesSalesForceSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesCloudTechnologiesSalesForceSubMenuVisible: visible
      };
    },
    [setTechnologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible as unknown as string]: (
      state,
      action
    ) => {
      turnOffState(state);
      const visible: boolean =
        action.payload.technologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible;
      return {
        ...state,
        technologiesMenuVisible: visible,
        technologiesAdvancedTechnologiesSubMenuVisible: visible,
        technologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible: visible
      };
    },
    // SOLUTION SUB-MENUS
    [setSolutionsCrmSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsCrmSubMenuVisible;
      return {
        ...state,
        solutionsMenuVisible: visible,
        solutionsCrmSubMenuVisible: visible
      };
    },
    [setSolutionsMarketingAdvertisingSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsMarketingAdvertisingSubMenuVisible;
      return {
        ...state,
        solutionsMenuVisible: visible,
        solutionsMarketingAdvertisingSubMenuVisible: visible
      };
    },
    [setSolutionsDataAnalyticsSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsDataAnalyticsSubMenuVisible;
      return {
        ...state,
        solutionsMenuVisible: visible,
        solutionsDataAnalyticsSubMenuVisible: visible
      };
    },
    [setSolutionsECommerceSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsECommerceSubMenuVisible;
      return {
        ...state,
        solutionsMenuVisible: visible,
        solutionsECommerceSubMenuVisible: visible
      };
    },
    [setSolutionsSupplyChainSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsSupplyChainSubMenuVisible;
      return {
        ...state,
        solutionsMenuVisible: visible,
        solutionsSupplyChainSubMenuVisible: visible
      };
    },
    [setSolutionsHumanResourcesSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsHumanResourcesSubMenuVisible;
      return {
        ...state,
        solutionsMenuVisible: visible,
        solutionsHumanResourcesSubMenuVisible: visible
      };
    },
    [setSolutionsELearningSubMenuVisible as unknown as string]: (state, action) => {
      turnOffState(state);
      const visible: boolean = action.payload.solutionsELearningSubMenuVisible;
      return {
        ...state,
        solutionsMenuVisible: visible,
        solutionsELearningSubMenuVisible: visible
      };
    },
    // LAST PART
    [setCloseAllMenu as unknown as string]: (state, action) => {
      turnOffState(state);
      return {
        ...state
      };
    }
  },
  defaultState
);

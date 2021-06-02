import { createActions } from "redux-actions";
const actions = createActions(
  {
    // MAIN MENUS
    SET_APP_BAR_SERVICE_MENU_VISIBLE: (appBarServiceMenuVisible) => ({ appBarServiceMenuVisible }),
    SET_APP_BAR_TECHNOLOGIES_MENU_VISIBLE: (appBarTechnologiesMenuVisible) => ({
      appBarTechnologiesMenuVisible
    }),
    SET_APP_BAR_SOLUTIONS_MENU_VISIBLE: (appBarSolutionsMenuVisible) => ({
      appBarSolutionsMenuVisible
    }),
    SET_APP_BAR_BLOG_AND_NEWS_MENU_VISIBLE: (appBarBlogAndNewsMenuVisible) => ({
      appBarBlogAndNewsMenuVisible
    }),

    // MAIN MENUS
    SET_SERVICE_MENU_VISIBLE: (serviceMenuVisible) => ({ serviceMenuVisible }),
    SET_TECHNOLOGIES_MENU_VISIBLE: (technologiesMenuVisible) => ({ technologiesMenuVisible }),
    SET_SOLUTIONS_MENU_VISIBLE: (solutionsMenuVisible) => ({ solutionsMenuVisible }),
    SET_BLOG_AND_NEWS_MENU_VISIBLE: (blogAndNewsMenuVisible) => ({ blogAndNewsMenuVisible }),

    // SERVICES SUB-MENUS
    SET_SERVICE_SOFTWARE_DEVELOPMENT_SUBMENU_VISIBLE: (
      serviceSoftwareDevelopmentSubMenuVisible
    ) => ({
      serviceSoftwareDevelopmentSubMenuVisible
    }),
    SET_SERVICE_UIUX_DESIGN_SUBMENU_VISIBLE: (serviceUiuxDesignSubMenuVisible) => ({
      serviceUiuxDesignSubMenuVisible
    }),
    SET_SERVICE_TEST_QA_SUBMENU_VISIBLE: (serviceTestQaSubMenuVisible) => ({
      serviceTestQaSubMenuVisible
    }),
    SET_SERVICE_INFRUSTRACTURE_SERVICE_VISIBLE: (serviceInfrustructureServiceSubMenuVisible) => ({
      serviceInfrustructureServiceSubMenuVisible
    }),
    SET_SERVICE_DATA_ANALYTICS_SUBMENU_VISIBLE: (serviceDataAnalyticsServiceSubMenuVisible) => ({
      serviceDataAnalyticsServiceSubMenuVisible
    }),
    SET_SERVICE_IT_OUTSOURCING_SUBMENU_VISIBLE: (serviceItOutsourcingSubMenuVisible) => ({
      serviceItOutsourcingSubMenuVisible
    }),
    SET_SERVICE_IT_CONSULTING_SUBMENU_VISIBLE: (serviceItConsultingSubMenuVisible) => ({
      serviceItConsultingSubMenuVisible
    }),
    SET_SERVICE_IT_SUPPORT_SUBMENU_VISIBLE: (serviceItSupportSubMenuVisible) => ({
      serviceItSupportSubMenuVisible
    }),

    // TECHNOLOGIES SUB-MENUS
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesSubMenuVisible }),
    // SUB-SUB-DETAILS TECHNOLOGIES_PROGRAMMING_LANGUAGES
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_JAVA_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesJavaSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesJavaSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_PYTHON_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesPythonSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesPythonSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_GOLANG_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesGolangSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesGolangSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_C_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesCSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesCSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_JAVASCRIPT_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesJavaScriptSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesJavaScriptSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_NODEJS_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesNodeJSSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesNodeJSSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_PHP_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesPHPSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesPHPSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_NET_SUBMENU_VISIBLE: (
      technologiesProgrammingLanguagesNETSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesNETSubMenuVisible }),

    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_SUBMENU_VISIBLE: (
      technologiesAdvancedTechnologiesSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesSubMenuVisible }),
    // SUB-SUB-DETAILS TECHNOLOGIES_ADVANCED_TECHNOLOGIES
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_DATA_SCIENCE_SUBMENU_VISIBLE: (
      technologiesAdvancedTechnologiesDataScienceSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesDataScienceSubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_ARTIFICIAL_INTELLIGENCE_SUBMENU_VISIBLE: (
      technologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_VIRTUAL_REALITY_SUBMENU_VISIBLE: (
      technologiesAdvancedTechnologiesVirtualRealitySubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesVirtualRealitySubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_BIG_DATA_SUBMENU_VISIBLE: (
      technologiesAdvancedTechnologiesBigDataSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesBigDataSubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_INTERNET_OF_THINGS_SUBMENU_VISIBLE: (
      technologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_CLOUD_COMPUTING_SUBMENU_VISIBLE: (
      technologiesAdvancedTechnologiesCloudComputingSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesCloudComputingSubMenuVisible }),

    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_SUBMENU_VISIBLE: (
      technologiesCloudTechnologiesSubMenuVisible
    ) => ({
      technologiesCloudTechnologiesSubMenuVisible
    }),
    // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_AMAZON_WEB_SERVICE_SUBMENU_VISIBLE: (
      technologiesCloudTechnologiesAmazonWebServiceSubMenuVisible
    ) => ({ technologiesCloudTechnologiesAmazonWebServiceSubMenuVisible }),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_MICROSOFT_AZURE_SUBMENU_VISIBLE: (
      technologiesCloudTechnologiesMicroSoftAzureSubMenuVisible
    ) => ({ technologiesCloudTechnologiesMicroSoftAzureSubMenuVisible }),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_SALES_FORCE_SUBMENU_VISIBLE: (
      technologiesCloudTechnologiesSalesForceSubMenuVisible
    ) => ({ technologiesCloudTechnologiesSalesForceSubMenuVisible }),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_GOOGLE_CLOUD_PLATFORM_SUBMENU_VISIBLE: (
      technologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible
    ) => ({ technologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible }),

    // SOLUTION SUB-MENUS
    SET_SOLUTIONS_CRM_SUBMENU_VISIBLE: (solutionsCrmSubMenuVisible) => ({
      solutionsCrmSubMenuVisible
    }),
    SET_SOLUTIONS_MARKETING_ADVERTISING_SUBMENU_VISIBLE: (
      solutionsMarketingAdvertisingSubMenuVisible
    ) => ({
      solutionsMarketingAdvertisingSubMenuVisible
    }),
    SET_SOLUTIONS_DATA_ANALYTICS_SUBMENU_VISIBLE: (solutionsDataAnalyticsSubMenuVisible) => ({
      solutionsDataAnalyticsSubMenuVisible
    }),
    SET_SOLUTIONS_CMS_SUBMENU_VISIBLE: (solutionsCmsSubMenuVisible) => ({
      solutionsCmsSubMenuVisible
    }),
    SET_SOLUTIONS_E_COMMERCE_SUBMENU_VISIBLE: (solutionsECommerceSubMenuVisible) => ({
      solutionsECommerceSubMenuVisible
    }),
    SET_SOLUTIONS_SUPPLY_CHAIN_SUBMENU_VISIBLE: (solutionsSupplyChainSubMenuVisible) => ({
      solutionsSupplyChainSubMenuVisible
    }),
    SET_SOLUTIONS_HUMAN_RESOURCES_SUBMENU_VISIBLE: (solutionsHumanResourcesSubMenuVisible) => ({
      solutionsHumanResourcesSubMenuVisible
    }),
    SET_SOLUTIONS_E_LEARNING_SUBMENU_VISIBLE: (solutionsELearningSubMenuVisible) => ({
      solutionsELearningSubMenuVisible
    })
  },
  "CLOSE_ALL_MENU"
);

export default actions;

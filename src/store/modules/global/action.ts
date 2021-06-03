import { createActions } from "redux-actions";

const actions = createActions(
  {
    // MAIN MENUS APP_BAR
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
    // TECHNOLOGIES SUB-MENUS APP_BAR
    SET_APP_BAR_TECHNOLOGIES_PROGRAMMING_LANGUAGES_SUB_MENU_VISIBLE: (
      appBarTechnologiesProgrammingLanguagesSubMenuVisible
    ) => ({ appBarTechnologiesProgrammingLanguagesSubMenuVisible }),
    SET_APP_BAR_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_SUB_MENU_VISIBLE: (
      appBarTechnologiesAdvancedTechnologiesSubMenuVisible
    ) => ({ appBarTechnologiesAdvancedTechnologiesSubMenuVisible }),
    SET_APP_BAR_TECHNOLOGIES_CLOUD_TECHNOLOGIES_SUB_MENU_VISIBLE: (
      appBarTechnologiesCloudTechnologiesSubMenuVisible
    ) => ({
      appBarTechnologiesCloudTechnologiesSubMenuVisible
    }),

    // MAIN MENUS
    SET_SERVICE_MENU_VISIBLE: (serviceMenuVisible) => ({ serviceMenuVisible }),
    SET_TECHNOLOGIES_MENU_VISIBLE: (technologiesMenuVisible) => ({ technologiesMenuVisible }),
    SET_SOLUTIONS_MENU_VISIBLE: (solutionsMenuVisible) => ({ solutionsMenuVisible }),
    SET_BLOG_AND_NEWS_MENU_VISIBLE: (blogAndNewsMenuVisible) => ({ blogAndNewsMenuVisible }),

    // SERVICES SUB-MENUS
    SET_SERVICE_SOFTWARE_DEVELOPMENT_SUB_MENU_VISIBLE: (
      serviceSoftwareDevelopmentSubMenuVisible
    ) => ({
      serviceSoftwareDevelopmentSubMenuVisible
    }),
    SET_SERVICE_UIUX_DESIGN_SUB_MENU_VISIBLE: (serviceUiuxDesignSubMenuVisible) => ({
      serviceUiuxDesignSubMenuVisible
    }),
    SET_SERVICE_TEST_QA_SUB_MENU_VISIBLE: (serviceTestQaSubMenuVisible) => ({
      serviceTestQaSubMenuVisible
    }),
    SET_SERVICE_INFRUSTRACTURE_SERVICE_VISIBLE: (serviceInfrustructureServiceSubMenuVisible) => ({
      serviceInfrustructureServiceSubMenuVisible
    }),
    SET_SERVICE_DATA_ANALYTICS_SUB_MENU_VISIBLE: (serviceDataAnalyticsServiceSubMenuVisible) => ({
      serviceDataAnalyticsServiceSubMenuVisible
    }),
    SET_SERVICE_IT_OUTSOURCING_SUB_MENU_VISIBLE: (serviceItOutsourcingSubMenuVisible) => ({
      serviceItOutsourcingSubMenuVisible
    }),
    SET_SERVICE_IT_CONSULTING_SUB_MENU_VISIBLE: (serviceItConsultingSubMenuVisible) => ({
      serviceItConsultingSubMenuVisible
    }),
    SET_SERVICE_IT_SUPPORT_SUB_MENU_VISIBLE: (serviceItSupportSubMenuVisible) => ({
      serviceItSupportSubMenuVisible
    }),

    // TECHNOLOGIES SUB-MENUS
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesSubMenuVisible }),
    // SUB-SUB-DETAILS TECHNOLOGIES_PROGRAMMING_LANGUAGES
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_JAVA_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesJavaSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesJavaSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_PYTHON_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesPythonSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesPythonSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_GOLANG_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesGolangSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesGolangSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_C_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesCSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesCSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_JAVASCRIPT_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesJavaScriptSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesJavaScriptSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_NODEJS_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesNodeJSSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesNodeJSSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_PHP_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesPHPSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesPHPSubMenuVisible }),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_NET_SUB_MENU_VISIBLE: (
      technologiesProgrammingLanguagesNETSubMenuVisible
    ) => ({ technologiesProgrammingLanguagesNETSubMenuVisible }),

    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_SUB_MENU_VISIBLE: (
      technologiesAdvancedTechnologiesSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesSubMenuVisible }),
    // SUB-SUB-DETAILS TECHNOLOGIES_ADVANCED_TECHNOLOGIES
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_DATA_SCIENCE_SUB_MENU_VISIBLE: (
      technologiesAdvancedTechnologiesDataScienceSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesDataScienceSubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_ARTIFICIAL_INTELLIGENCE_SUB_MENU_VISIBLE: (
      technologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesArtificialIntelligenceSubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_VIRTUAL_REALITY_SUB_MENU_VISIBLE: (
      technologiesAdvancedTechnologiesVirtualRealitySubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesVirtualRealitySubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_BIG_DATA_SUB_MENU_VISIBLE: (
      technologiesAdvancedTechnologiesBigDataSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesBigDataSubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_INTERNET_OF_THINGS_SUB_MENU_VISIBLE: (
      technologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesInternetOfThingsSubMenuVisible }),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_CLOUD_COMPUTING_SUB_MENU_VISIBLE: (
      technologiesAdvancedTechnologiesCloudComputingSubMenuVisible
    ) => ({ technologiesAdvancedTechnologiesCloudComputingSubMenuVisible }),

    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_SUB_MENU_VISIBLE: (
      technologiesCloudTechnologiesSubMenuVisible
    ) => ({
      technologiesCloudTechnologiesSubMenuVisible
    }),
    // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_AMAZON_WEB_SERVICE_SUB_MENU_VISIBLE: (
      technologiesCloudTechnologiesAmazonWebServiceSubMenuVisible
    ) => ({ technologiesCloudTechnologiesAmazonWebServiceSubMenuVisible }),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_MICROSOFT_AZURE_SUB_MENU_VISIBLE: (
      technologiesCloudTechnologiesMicroSoftAzureSubMenuVisible
    ) => ({ technologiesCloudTechnologiesMicroSoftAzureSubMenuVisible }),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_SALES_FORCE_SUB_MENU_VISIBLE: (
      technologiesCloudTechnologiesSalesForceSubMenuVisible
    ) => ({ technologiesCloudTechnologiesSalesForceSubMenuVisible }),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_GOOGLE_CLOUD_PLATFORM_SUB_MENU_VISIBLE: (
      technologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible
    ) => ({ technologiesCloudTechnologiesGoogleCloudPlatformSubMenuVisible }),

    // SOLUTION SUB-MENUS
    SET_SOLUTIONS_CRM_SUB_MENU_VISIBLE: (solutionsCrmSubMenuVisible) => ({
      solutionsCrmSubMenuVisible
    }),
    SET_SOLUTIONS_MARKETING_ADVERTISING_SUB_MENU_VISIBLE: (
      solutionsMarketingAdvertisingSubMenuVisible
    ) => ({
      solutionsMarketingAdvertisingSubMenuVisible
    }),
    SET_SOLUTIONS_DATA_ANALYTICS_SUB_MENU_VISIBLE: (solutionsDataAnalyticsSubMenuVisible) => ({
      solutionsDataAnalyticsSubMenuVisible
    }),
    SET_SOLUTIONS_CMS_SUB_MENU_VISIBLE: (solutionsCmsSubMenuVisible) => ({
      solutionsCmsSubMenuVisible
    }),
    SET_SOLUTIONS_E_COMMERCE_SUB_MENU_VISIBLE: (solutionsECommerceSubMenuVisible) => ({
      solutionsECommerceSubMenuVisible
    }),
    SET_SOLUTIONS_SUPPLY_CHAIN_SUB_MENU_VISIBLE: (solutionsSupplyChainSubMenuVisible) => ({
      solutionsSupplyChainSubMenuVisible
    }),
    SET_SOLUTIONS_HUMAN_RESOURCES_SUB_MENU_VISIBLE: (solutionsHumanResourcesSubMenuVisible) => ({
      solutionsHumanResourcesSubMenuVisible
    }),
    SET_SOLUTIONS_E_LEARNING_SUB_MENU_VISIBLE: (solutionsELearningSubMenuVisible) => ({
      solutionsELearningSubMenuVisible
    })
  },
  "CLOSE_ALL_MENU"
);

export default actions;

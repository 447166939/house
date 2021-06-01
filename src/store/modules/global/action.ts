import { createActions } from "redux-actions";
const actions = createActions(
  {
    // MAIN MENUS
    SET_SERVICE_MENU_VISIBLE: (serviceMenuVisible) => ({ serviceMenuVisible }),
    SET_TECHNOLOGIES_MENU_VISIBLE: (technologiesMenuVisible) => ({ technologiesMenuVisible }),
    SET_SOLUTIONS_MENU_VISIBLE: (solutionsMenuVisible) => ({ solutionsMenuVisible }),
    SET_BLOG_AND_NEWS_MENU_VISIBLE: (blogAndNewsMenuVisible) => ({ blogAndNewsMenuVisible }),

    // SERVICES SUB-MENUS
    SET_SERVICE_SOFTWARE_DEVELOPMENT_SUBMENU_VISIBLE: (softwareDevelopmentSubMenuVisible) => ({softwareDevelopmentSubMenuVisible}),
    SET_SERVICE_UIUX_DESIGN_SUBMENU_VISIBLE: (uiuxDesignSubMenuVisible) => ({uiuxDesignSubMenuVisible}),
    SET_SERVICE_TEST_QA_SUBMENU_VISIBLE: (testQaSubMenuVisible) => ({testQaSubMenuVisible}),
    SET_SERVICE_INFRUSTRACTURE_SERVICE_VISIBLE: (infrustructureServiceSubMenuVisible) => ({infrustructureServiceSubMenuVisible}),
    SET_SERVICE_DATA_ANALYTICS_SUBMENU_VISIBLE: (dataAnalyticsSubMenuVisible) => ({dataAnalyticsSubMenuVisible}),
    SET_SERVICE_IT_OUTSOURCING_SUBMENU_VISIBLE: (itOutsourcingSubMenuVisible) => ({itOutsourcingSubMenuVisible}),
    SET_SERVICE_IT_CONSULTING_SUBMENU_VISIBLE: (itConsultingSubMenuVisible) => ({itConsultingSubMenuVisible}),
    SET_SERVICE_IT_SUPPORT_SUBMENU_VISIBLE: (itSupportSubMenuVisible) => ({itSupportSubMenuVisible}),

    // TECHNOLOGIES SUB-MENUS
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_SUBMENU_VISIBLE: (programmingLanguagesSubMenuVisible) => ({programmingLanguagesSubMenuVisible}),
    // SUB-SUB-DETAILS TECHNOLOGIES_PROGRAMMING_LANGUAGES
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_JAVA_SUBMENU_VISIBLE: (programmingLanguagesJavaSubMenuVisible) => ({programmingLanguagesJavaSubMenuVisible}),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_PYTHON_SUBMENU_VISIBLE: (programmingLanguagesPythonSubMenuVisible) => ({programmingLanguagesPythonSubMenuVisible}),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_GOLANG_SUBMENU_VISIBLE: (programmingLanguagesGolangSubMenuVisible) => ({programmingLanguagesGolangSubMenuVisible}),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_C_SUBMENU_VISIBLE: (programmingLanguagesCSubMenuVisible) => ({programmingLanguagesCSubMenuVisible}),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_JAVASCRIPT_SUBMENU_VISIBLE: (programmingLanguagesJavaScriptSubMenuVisible) => ({programmingLanguagesJavaScriptSubMenuVisible}),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_NODEJS_SUBMENU_VISIBLE: (programmingLanguagesNodeJSSubMenuVisible) => ({programmingLanguagesNodeJSSubMenuVisible}),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_PHP_SUBMENU_VISIBLE: (programmingLanguagesPHPSubMenuVisible) => ({programmingLanguagesPHPSubMenuVisible}),
    SET_TECHNOLOGIES_PROGRAMMING_LANGUAGES_NET_SUBMENU_VISIBLE: (programmingLanguagesNETSubMenuVisible) => ({programmingLanguagesNETSubMenuVisible}),

    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_SUBMENU_VISIBLE: (advancedTechnologiesSubMenuVisible) => ({advancedTechnologiesSubMenuVisible}),
    // SUB-SUB-DETAILS TECHNOLOGIES_ADVANCED_TECHNOLOGIES
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_DATA_SCIENCE_SUBMENU_VISIBLE: (advancedTechnologiesDataScienceSubMenuVisible) => ({advancedTechnologiesDataScienceSubMenuVisible}),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_ARTIFICIAL_INTELLIGENCE_SUBMENU_VISIBLE: (advancedTechnologiesArtificialIntelligenceSubMenuVisible) => ({advancedTechnologiesArtificialIntelligenceSubMenuVisible}),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_VIRTUAL_REALITY_SUBMENU_VISIBLE: (advancedTechnologiesVirtualRealitySubMenuVisible) => ({advancedTechnologiesVirtualRealitySubMenuVisible}),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_BIG_DATA_SUBMENU_VISIBLE: (advancedTechnologiesBigDataSubMenuVisible) => ({advancedTechnologiesBigDataSubMenuVisible}),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_INTERNET_OF_THINGS_SUBMENU_VISIBLE: (advancedTechnologiesInternetOfThingsSubMenuVisible) => ({advancedTechnologiesInternetOfThingsSubMenuVisible}),
    SET_TECHNOLOGIES_ADVANCED_TECHNOLOGIES_CLOUD_COMPUTING_SUBMENU_VISIBLE: (advancedTechnologiesCloudComputingSubMenuVisible) => ({advancedTechnologiesCloudComputingSubMenuVisible}),

    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_SUBMENU_VISIBLE: (cloudTechnologiesSubMenuVisible) => ({cloudTechnologiesSubMenuVisible}),
    // SUB-SUB-DETAILS TECHNOLOGIES_CLOUD_TECHNOLOGIES
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_AMAZON_WEB_SERVICE_SUBMENU_VISIBLE: (cloudTechnologiesAmazonWebServiceSubMenuVisible) => ({cloudTechnologiesAmazonWebServiceSubMenuVisible}),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_MICROSOFT_AZURE_SUBMENU_VISIBLE: (cloudTechnologiesMicroSoftAzureSubMenuVisible) => ({cloudTechnologiesMicroSoftAzureSubMenuVisible}),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_SALES_FORCE_SUBMENU_VISIBLE: (cloudTechnologiesSalesForceSubMenuVisible) => ({cloudTechnologiesSalesForceSubMenuVisible}),
    SET_TECHNOLOGIES_CLOUD_TECHNOLOGIES_GOOGLE_CLOUD_PLATFORM_SUBMENU_VISIBLE: (cloudTechnologiesGoogleCloudPlatformSubMenuVisible) => ({cloudTechnologiesGoogleCloudPlatformSubMenuVisible}),

    // SOLUTION SUB-MENUS
    SET_SOLUTIONS_CRM_SUBMENU_VISIBLE: (crmSubMenuVisible) => ({crmSubMenuVisible}),
    SET_SOLUTIONS_MARKETING_ADVERTISING_SUBMENU_VISIBLE: (marketingAdvertisingSubMenuVisible) => ({marketingAdvertisingSubMenuVisible}),
    SET_SOLUTIONS_DATA_ANALYTICS_SUBMENU_VISIBLE: (dataAnalyticsSubMenuVisible) => ({dataAnalyticsSubMenuVisible}),
    SET_SOLUTIONS_CMS_SUBMENU_VISIBLE: (cmsSubMenuVisible) => ({cmsSubMenuVisible}),
    SET_SOLUTIONS_E_COMMERCE_SUBMENU_VISIBLE: (eCommerceSubMenuVisible) => ({eCommerceSubMenuVisible}),
    SET_SOLUTIONS_SUPPLY_CHAIN_SUBMENU_VISIBLE: (supplyChainSubMenuVisible) => ({supplyChainSubMenuVisible}),
    SET_SOLUTIONS_HUMAN_RESOURCES_SUBMENU_VISIBLE: (humanResourcesSubMenuVisible) => ({humanResourcesSubMenuVisible}),
    SET_SOLUTIONS_E_LEARNING_SUBMENU_VISIBLE: (eLearningSubMenuVisible) => ({eLearningSubMenuVisible}),
  },
  "CLOSE_ALL_MENU"
);

export default actions;

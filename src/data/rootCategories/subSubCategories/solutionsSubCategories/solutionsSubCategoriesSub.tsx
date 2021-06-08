import solutionsSubCategoriesSubCRMLinks from "../../subSubCategoriesLinks/solutionsLinks/solutionsSubCategoriesSubCRMLinks";
import solutionsSubCategoriesSubERPLinks from "../../subSubCategoriesLinks/solutionsLinks/solutionsSubCategoriesSubERPLinks";
import solutionsSubCategoriesSubMarketingAndAdvertisingLinks from "../../subSubCategoriesLinks/solutionsLinks/solutionsSubCategoriesSubMarketingAndAdvertisingLinks";
import solutionsSubCategoriesSubECommerceLinks from "../../subSubCategoriesLinks/solutionsLinks/solutionsSubCategoriesSubECommerceLinks";
import solutionsSubCategoriesSubCMSLinks from "../../subSubCategoriesLinks/solutionsLinks/solutionsSubCategoriesSubCMSLinks";
import solutionsSubCategoriesSubELearningLinks from "../../subSubCategoriesLinks/solutionsLinks/solutionsSubCategoriesSubELearningLinks";
import solutionsSubCategoriesSubHumanResourcesLinks from "../../subSubCategoriesLinks/solutionsLinks/solutionsSubCategoriesSubHumanResourcesLinks";
import solutionsSubCategoriesSubSupplyChainManagementLinks from "../../subSubCategoriesLinks/solutionsLinks/solutionsSubCategoriesSubSupplyChainManagementLinks";

const solutionsSubCategorySub: { [key: string]: object | any }[] = [
  {
    text: "CRM",
    links: solutionsSubCategoriesSubCRMLinks
  },
  {
    text: "ERP",
    links: solutionsSubCategoriesSubERPLinks
  },
  {
    text: "Marketing & Advertising",
    links: solutionsSubCategoriesSubMarketingAndAdvertisingLinks
  },
  {
    text: "CMS",
    links: solutionsSubCategoriesSubCMSLinks
  },
  {
    text: "Ecommerce",
    links: solutionsSubCategoriesSubECommerceLinks
  },
  {
    text: "Supply Chain Management",
    links: solutionsSubCategoriesSubSupplyChainManagementLinks
  },
  {
    text: "Human Resources",
    links: solutionsSubCategoriesSubHumanResourcesLinks
  },
  {
    text: "ELearning",
    links: solutionsSubCategoriesSubELearningLinks
  }
];

export default solutionsSubCategorySub;

import servicesSubCategorySubDataAnalyticsLinks from "../../subSubCategoriesLinks/servicesLinks/servicesSubCategorySubDataAnalyticsLinks";
import servicesSubCategorySubSoftwareDevelopmentLinks from "../../subSubCategoriesLinks/servicesLinks/servicesSubCategorySubSoftwareDevelopmentLinks";
import servicesSubCategorySubUIUXDesignLinks from "../../subSubCategoriesLinks/servicesLinks/servicesSubCategorySubUIUXDesignLinks";
import servicesSubCategorySubTestingAndQALinks from "../../subSubCategoriesLinks/servicesLinks/servicesSubCategorySubTestingAndQALinks";
import servicesSubCategorySubInfrastructureServicesLinks from "../../subSubCategoriesLinks/servicesLinks/servicesSubCategorySubInfrastructureServicesLinks";
import servicesSubCategorySubITOutSourcingLinks from "../../subSubCategoriesLinks/servicesLinks/servicesSubCategorySubITOutSourcingLinks";
import servicesSubCategorySubITConsultingLinks from "../../subSubCategoriesLinks/servicesLinks/servicesSubCategorySubITConsultingLinks";
import servicesSubCategorySubITSupportLinks from "../../subSubCategoriesLinks/servicesLinks/servicesSubCategorySubITSupportLinks";

const servicesSubCategoriesSub: { [key: string]: object | any }[] = [
  {
    text: "Software Development",
    links: servicesSubCategorySubSoftwareDevelopmentLinks
  },
  {
    text: "Data Analytics",
    links: servicesSubCategorySubDataAnalyticsLinks
  },
  {
    text: "UI/UX Design",
    links: servicesSubCategorySubUIUXDesignLinks
  },
  {
    text: "Testing And QA",
    links: servicesSubCategorySubTestingAndQALinks
  },
  {
    text: "Infrastructure Services",
    links: servicesSubCategorySubInfrastructureServicesLinks
  },
  {
    text: "IT OutSourcing",
    links: servicesSubCategorySubITOutSourcingLinks
  },
  {
    text: "IT Consulting",
    links: servicesSubCategorySubITConsultingLinks
  },
  {
    text: "IT Support",
    links: servicesSubCategorySubITSupportLinks
  }
];

export default servicesSubCategoriesSub;

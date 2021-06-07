import technologiesSubCategoriesProgrammingLanguages from "../subSubCategories/technologiesSubCategories/technologiesSubCategoriesProgrammingLanguages";
import technologiesSubCategoriesAdvancedTechnologies from "../subSubCategories/technologiesSubCategories/technologiesSubCategoriesAdvancedTechnologies";
import technologiesSubCategoriesCloudTechnologies from "../subSubCategories/technologiesSubCategories/technologiesSubCategoriesCloudTechnologies";

const technologiesSubCategories: { [key: string]: object | any }[] = [
  {
    text: "Programming Languages",
    subCategoriesSub: technologiesSubCategoriesProgrammingLanguages
  },
  {
    text: "Advanced Technologies",
    subCategoriesSub: technologiesSubCategoriesAdvancedTechnologies
  },
  {
    text: "Cloud Technologies",
    subCategoriesSub: technologiesSubCategoriesCloudTechnologies
  }
];

export default technologiesSubCategories;

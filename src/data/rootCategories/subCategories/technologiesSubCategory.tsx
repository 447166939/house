import technologiesSubCategoriesProgrammingLanguages from "../subSubCategories/technologiesSubCategories/technologiesSubCategoriesProgrammingLanguages";
import technologiesSubCategoriesAdvancedTechnologies from "../subSubCategories/technologiesSubCategories/technologiesSubCategoriesAdvancedTechnologies";
import technologiesSubCategoriesCloudTechnologies from "../subSubCategories/technologiesSubCategories/technologiesSubCategoriesCloudTechnologies";

const technologiesSubCategories: { [key: string]: object | any }[] = [
  {
    text: "Programming Languages",
    subSubCategories: technologiesSubCategoriesProgrammingLanguages
  },
  {
    text: "Advanced Technologies",
    subSubCategories: technologiesSubCategoriesAdvancedTechnologies
  },
  {
    text: "Cloud Technologies",
    subSubCategories: technologiesSubCategoriesCloudTechnologies
  }
];

export default technologiesSubCategories;

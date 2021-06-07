import servicesCategories from "./categories/servicesCategories";
import technologiesCategories from "./categories/technologiesCategories";
import solutionsCategories from "./categories/solutionsCategories";
import blogAndNewsCategories from "./categories/blogAndNewsCategories";

const rootCategory: { [key: string]: object | any }[] = [
  servicesCategories,
  technologiesCategories,
  solutionsCategories,
  blogAndNewsCategories
];

export default rootCategory;

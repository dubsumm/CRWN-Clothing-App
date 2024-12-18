//*REACT
import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
//*COMPONENTS
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;

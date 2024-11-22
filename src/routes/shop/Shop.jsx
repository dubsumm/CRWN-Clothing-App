//*REACT
import { Route, Routes } from "react-router-dom";

//*STYLES
import "./shop.styles.scss";

//*COMPONENTS
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.actions";

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(setCategories(categoriesArray));
      };

      getCategoriesMap();
      // eslint-disable-next-line
    }, []);
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default Shop;

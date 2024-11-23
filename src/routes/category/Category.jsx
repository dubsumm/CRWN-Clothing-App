//*REACT
import {  useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
// *CONTEXT

// *STYLES
import "./category.styles.scss";
import ProductCard from "../../components/product-card/ProductCard";

const Category = () => {
  const {category} = useParams();
  console.log("render/rerender category component");
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);
  

  useEffect(() => {
    console.log("effect fired calling setProducts");
    
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <div className="category-header">
        <h2 className="title">{category.toUpperCase()}</h2>
        <Link to="/shop" >Back to Shop</Link>
      </div>
      <div className="category-container">
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default Category;

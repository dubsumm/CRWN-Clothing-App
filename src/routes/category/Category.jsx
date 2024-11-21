//*REACT
import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// *CONTEXT
import { CategoriesContext } from "../../contexts/categories.context";

// *STYLES
import "./category.styles.scss";
import ProductCard from "../../components/product-card/ProductCard";

const Category = () => {
  const {category} = useParams();
  
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
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

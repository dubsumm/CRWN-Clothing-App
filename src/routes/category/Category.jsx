//*REACT
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// *CONTEXT
import { CategoriesContext } from "../../contexts/categories.context";

// *STYLES
import "./category.styles.scss";
import ProductCard from "../../components/product-card/ProductCard";

const Category = () => {
  const {category} = useParams();
  console.log(category);
  
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="category-container">
      {products && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Category;

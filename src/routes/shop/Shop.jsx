//*REACT
import { useContext } from "react";

//*STYLES
import './shop.styles.scss'

//*COMPONENTS
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard";

const Shop = () => {
  const {} = useContext(CategoriesContext)
  return (
    <div className='products-container'>
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))} */}
    </div>
  );
};

export default Shop;

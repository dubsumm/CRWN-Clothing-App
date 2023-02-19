//*REACT
import { useContext } from "react";

//*STYLES
import './shop.styles.scss'

//*COMPONENTS
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/ProductCard";

const Shop = () => {
  const {products} = useContext(ProductsContext)
  console.log(products)
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop;
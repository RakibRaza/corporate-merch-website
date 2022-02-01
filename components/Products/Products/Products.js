import { useEffect, useState } from "react";
import Product from "../Product/Product"
import ProductSidebar from "../ProductSidebar/ProductSidebar"
import data from '../../../public/data/products';

const allCategory = data.map((item) => item.category);
const unique = new Set(allCategory.flat());
const uniqueCategory = ["all items", ...unique];

const Products = () => {
  const [products, setProducts] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("all items");

  const handleClick = (item) => {
    setSelectedCategory(item);
  }
  useEffect(() => {
    if (selectedCategory === "all items") {
      setProducts(data);
    } else {
      setProducts(data.filter((item) => item.category.includes(selectedCategory)));
    }
  }, [selectedCategory])
  return (
    <>
      <div className="inner-top">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="products-filter text-center">
                {uniqueCategory.map((item, i) => <button key={i} className={`${item === selectedCategory ? "active" : ""}`} onClick={() => handleClick(item)}>{item}</button>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Product products={products} />
          <ProductSidebar />
        </div>
      </div>
    </>
  )
}

export default Products

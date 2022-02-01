import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Products from '../../components/Products/Products/Products';

const products = () => {
  return (
    <>
      <Breadcrumb page="products" />
      <div className="products-inner">
        <Products />
      </div>
    </>
  )
}

export default products;

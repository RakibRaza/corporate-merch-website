import OrderDetails from '../../components/cart/OrderDetails/OrderDetails';
import ProfileInfo from '../../components/cart/ProfileInfo/ProfileInfo';
import BreadcrumbTwo from '../../components/Common/Breadcrumb/BreadcrumbTwo';

const Cart = () => {
  return (<>
    <BreadcrumbTwo page="cart" />
    <div className="cart-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <OrderDetails />
          </div>
          <div className="col-lg-4">
            <ProfileInfo />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cart;

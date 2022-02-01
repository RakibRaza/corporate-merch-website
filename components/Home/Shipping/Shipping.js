import Image from 'next/image';
import ship from '../../../public/images/home/shipping.png';

const Shipping = () => {
  return (
    <section className="shipping-area">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 col-xl-5 order-md-last">
            <div className="section-title">
              <div className="line"></div>
              <h2>Fast International <br /> Shipping</h2>
              <p>Shipping overseas is complicated. Leave all your international shipments to us. We manage your customs form and country restrictions. Plus, our rates are deeply discounted.</p>
              <button className="shipping-btn">Order Now</button>
            </div>
          </div>
          <div className="col-md-5 col-xl-6">
            <div className="shipping-left">
              <div className="shipping-img text-center">
                <Image src={ship} alt="shipping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shipping;

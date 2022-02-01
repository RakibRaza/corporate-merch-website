import Image from 'next/image';
import icon1 from '../../../public/images/icon/t-shirt.svg';
import icon2 from '../../../public/images/icon/truck.svg';
import icon3 from '../../../public/images/icon/1.svg';
import icon4 from '../../../public/images/icon/storage.svg';
import icon5 from '../../../public/images/icon/dashboard.svg';
import icon6 from '../../../public/images/icon/design.svg';
import icon7 from '../../../public/images/icon/truck-green.svg';
import love from '../../../public/images/icon/love.svg';

const Notes = () => {
  return (
    <section className="notes-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="notes-top-title">
              <h2 className="note-title">Let's Keep It Simple</h2>
              <p className="note-sub-title">Our plans and pricing are always simple and straightforward. See what you’ll pay and know exactly how much you need. And if you need more, you can contact at any time.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="notes-inner">
        <div className="container">
          <div data-aos="zoom-in" className="notes-top">
            <div className="love-section">
              <div className="row align-items-center">
                <div className="col-lg-5 text-center">
                  <h2 className="top-title">You Pay for</h2>
                </div>
                <div className="col-lg-2 text-center">
                  <div className="top-icon">
                    <Image src={love} alt="love" />
                  </div>
                </div>
                <div className="col-lg-5 text-center">
                  <h2 className="top-title">We include</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="notes-left notes">
                  <div className="single-service">
                    <div className="icon">
                      <Image src={icon1} alt="icon" />
                    </div>
                    <div className="service-info">
                      <h4>Swag Products</h4>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="icon">
                      <Image src={icon2} alt="icon" />
                    </div>
                    <div className="service-info">
                      <h4>Shipping</h4>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="icon">
                      <Image src={icon3} alt="icon" />
                    </div>
                    <div className="service-info">
                      <h4>Carbon Offsets</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="notes-right notes">
                  <div className="single-service">
                    <div className="icon">
                      <Image src={icon4} alt="icon" />
                    </div>
                    <div className="service-info">
                      <h4>Storage</h4>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="icon">
                      <Image src={icon5} alt="icon" />
                    </div>
                    <div className="service-info">
                      <h4>Swag Dashboard</h4>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="icon">
                      <Image src={icon6} alt="icon" />
                    </div>
                    <div className="service-info">
                      <h4>Design Services</h4>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="icon">
                      <Image src={icon7} alt="icon" />
                    </div>
                    <div className="service-info">
                      <h4>Unlimited Drop Shipments</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="bottom-title">Notes</h2>
          <div className="note">
            <span className="number">1</span>
            <p className="note-text">We will store your swag for free as long as we make it. If 3rd party swag is sent to us, we will need to charge a storage fee. Please contact customer service for more details.</p>
          </div>
          <div className="note">
            <span className="number">2</span>
            <p className="note-text">At the end of every billing period, we will send a bill for your incurred postage costs.</p>
          </div>
          <div className="note">
            <span className="number">3</span>
            <p className="note-text">Due to our shipping volume, you will receive wholesale postage rates, which will result in significant savings!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notes;

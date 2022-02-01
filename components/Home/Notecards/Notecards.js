import Image from 'next/image';
import notec from '../../../public/images/home/dashboard.png';
import star from '../../../public/images/home/star-3.svg';

const Notecards = () => {
  return (
    <section className="notecards-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2>API Powered Swag Dashboard </h2>
              <p>We pride ourselves on being flexible. We’re here to build solutions that cater toward your needs. Our goal is to make you feel as if you’re our only customer. </p>
              <button className="dash-btn">Get a free demo</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-2 d-none d-lg-block">
            <div className="single-item">
              <div className="icon">
                <Image src={star} alt="star" />
              </div>
              <h5>Inventory Management</h5>
            </div>
            <div className="single-item">
              <div className="icon">
                <Image src={star} alt="star" />
              </div>
              <h5>Distribute Swag</h5>
            </div>
            <div className="single-item">
              <div className="icon">
                <Image src={star} alt="star" />
              </div>
              <h5>Collaborative</h5>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cards-img">
              <Image src={notec} alt="notecards" />
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <div className="single-item">
              <div className="icon">
                <Image src={star} alt="star" />
              </div>
              <h5>Shipment Status</h5>
            </div>
            <div className="single-item">
              <div className="icon">
                <Image src={star} alt="star" />
              </div>
              <h5>Reporting</h5>
            </div>
            <div className="single-item">
              <div className="icon">
                <Image src={star} alt="star" />
              </div>
              <h5>Carbon Offset</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notecards;

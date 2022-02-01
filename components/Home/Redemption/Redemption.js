import Image from 'next/image';
import rede from '../../../public/images/home/red.png';

const Redemption = () => {
  return (
    <section className="redemption-area">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4">
            <div className="line"></div>
            <h2>Redemption <br /> <span>Pages</span> </h2>
            <p className="first-text">Stop sending forms to your recipients to collect their size and address. Our redemption technology allows each recipient to enter that information themselves.</p>
            <p> Use our Pre-Order feature to know exactly how much of each size to order. No more extras!</p>
          </div>
          <div className="col-lg-7">
            <div className="redemtion-right">
              <div className="dashboard-img">
                <Image src={rede} alt="redemption" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Redemption;

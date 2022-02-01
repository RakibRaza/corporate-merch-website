import Image from 'next/image';
import sales from '../../../public/images/use-cases/sales.png';

const SalesManagement = () => {
  return (
    <section id="sales-management" className="management section-padding bg-gray">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="management__right">
              <p className="use-case-top-title">SALES MANAGEMENT</p>
              <h2 className="use-case-title">Rethink sales management, Work Less and Sell More</h2>
              <div className="points">
                <div className="point">
                  <span className="point__number">1</span>
                  <p className="point__text">Express gratitude to loyal clients with curated gifts picked for them. Dont forget to include a notecard!</p>
                </div>
                <div className="point">
                  <span className="point__number">2</span>
                  <p className="point__text">Send a thank you gift after a meeting and cut through that cluttered inbox!</p>
                </div>
                <div className="point">
                  <span className="point__number">3</span>
                  <p className="point__text">Closed a big deal? Let’s celebrate!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-first">
            <div className="management__left">
              <div className="shape text-center">
                <Image src={sales} alt="sales" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SalesManagement;

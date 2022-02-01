import Image from 'next/image';
import gift from '../../../public/images/features/gift.png';
import { FaAngleRight } from "react-icons/fa";

const Gift = () => {
  return (
    <section className="gift-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div data-aos="zoom-in" className="gift-left">
              <Image src={gift} alt="gift" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="features-title">
              <h2 className="title">Enhance the gift experience with custom packaging</h2>
              <p className="sub-title">First impressions are everything. Stand out from the crowd with awesome customized packaging. We’ll make sure every item is folded and placed perfectly. </p>
              <a className="link" href="#">Ask us about our packing solutions <FaAngleRight className="icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gift

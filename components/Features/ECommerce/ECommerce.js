import Image from 'next/image';
import man1 from '../../../public/images/features/man-1.png';
import man2 from '../../../public/images/features/man-2.png';
import man3 from '../../../public/images/features/man-3.png';
import le from '../../../public/images/home/le.png'
import su from '../../../public/images/home/su.png'

const ECommerce = () => {
  return (
    <section className="e-commerce-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="features-title">
              <h2 className="title">Our expertise includes userfriendly E-commerce</h2>
              <div className="single-stores">
                <div className="icon">
                  <Image src={le} alt="lemited edition" />
                </div>
                <div className="store-info">
                  <h4>Limited Edition </h4>
                  <p>You’ve worked so hard building an awesome brand that people love. It’s time to let your fans support you! Limited edition merch drops.</p>
                </div>
              </div>
              <div className="single-stores">
                <div className="icon-two">
                  <Image src={su} alt="lemited edition" />
                </div>
                <div className="store-info">
                  <h4>Superfast processing </h4>
                  <p>Our E-commerce platform is an end to end solution. We’ll manage the whole process for you.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="e-com-left">
              <div data-aos="fade-down" className="box man1">
                <Image src={man1} alt="man1" />
              </div>
              <div data-aos="fade-down" className="box man2">
                <Image src={man2} alt="man2" />
              </div>
              <div data-aos="fade-down" className="box man3">
                <Image src={man3} alt="man3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ECommerce;

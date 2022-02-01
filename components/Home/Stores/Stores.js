import Image from 'next/image';
import le from '../../../public/images/home/le.png';
import su from '../../../public/images/home/su.png';
import job1 from '../../../public/images/home/job-1.png';
import job2 from '../../../public/images/home/job-4.png';
import job3 from '../../../public/images/home/job-3.png';

const Stores = () => {

  return (
    <section className="e-commerce-area section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6">
            <div className="e-com-left">
              <div className="box job-1">
                <Image src={job1} alt="job1" />
              </div>
              <div className="box">
                <div className="job-2">
                  <Image src={job2} alt="man2" />
                </div>
                <div className="job-3">
                  <Image src={job3} alt="man3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="e-commerce-left">
              <div className="line"></div>
              <h2><span>Customized</span>  <br /> E-commerce Solutions</h2>
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
        </div>
      </div>
    </section>
  )
}

export default Stores

import Image from 'next/image';
import logo from '../../../public/images/features/logo.png';
import company1 from '../../../public/images/features/company-1.png';
import company2 from '../../../public/images/features/company-2.png';
import company3 from '../../../public/images/features/company-3.png';
import company4 from '../../../public/images/features/company-4.png';
import company5 from '../../../public/images/features/company-5.png';

const Integration = () => {
  return (
    <>
      <section className="integration">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">Integration</h2>
                <p className="sub-title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
              </div>
            </div>
          </div>
          <div className="integration-wrap">
            <a href="#" className="festival">
              <Image src={company2} alt="company" />
            </a>
            <a href="#" className="festival">
              <Image src={company3} alt="company" />
            </a>
            <a href="#" className="festival">
              <Image src={company4} alt="company" />
            </a>
            <a href="#" className="events">
              <Image src={company1} alt="company" />
            </a>
            <a href="#" className="events">
              <Image src={company5} alt="company" />
            </a>
            <a href="#" className="events">
              <Image src={logo} alt="logo" />
            </a>
            <span className="dot-shape"></span>
            <span className="dot-shape"></span>
            <span className="dot-shape"></span>
            <span className="dot-shape"></span>
          </div>
        </div>
      </section>
      <div style={{ padding: "130px 0", backgroundColor: "#ffffff" }}>

      </div>
    </>
  )
}

export default Integration;

import Image from 'next/image';
import process from '../../../public/images/features/process.png';
import { FaAngleRight } from "react-icons/fa";

const Process = () => {
  return (
    <section className="process-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div data-aos="zoom-in-up" className="prodess-left">
              <Image src={process} alt="process" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="features-title">
              <h2 className="title">Effortless Redemption Process</h2>
              <p className="sub-title">Send Swah without an address. Our redemption pages allow you to share a link with the recipient and THEY enter their address and choose their size. All you do is choose which products you want to include in the giveaway. Our pages can be fully customized by your team as you build them.  </p>
              <a className="link" href="#">Get started now <FaAngleRight className="icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process;

import Image from 'next/image';
import shape from '../../../public/images/use-cases/shape-1.png';
import box from '../../../public/images/use-cases/box.png';

const EmployeeExperience = () => {
  return (
    <section id="employe_experi" className="employee section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="employee__right">
              <p className="use-case-top-title">Employee Experience</p>
              <h2 className="use-case-title">Empowering the modern workforce</h2>
              <div className="points">
                <div className="point">
                  <span className="point__number">1</span>
                  <p className="point__text">Keeping company culture alive throughout the year is difficult. Try sending monthly themed gifts to your team! Ask us about our “Experiences in a box” program to have fun over Zoom.</p>
                </div>
                <div className="point">
                  <span className="point__number">2</span>
                  <p className="point__text">Connect your rewards program to our catalog to let your team redeem merch for points they earn.</p>
                </div>
                <div className="point">
                  <span className="point__number">3</span>
                  <p className="point__text">Make birthdays special! Use our CRM to track birthdays and send gifts automatically!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="employee__left">
              <div className="shape">
                <Image src={shape} alt="shape" />
                <div className="shape__box">
                  <Image src={box} alt="box" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmployeeExperience;

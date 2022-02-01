import Image from 'next/image';
import hr from '../../../public/images/use-cases/hr.png';
import sales from '../../../public/images/use-cases/sales.png';

const HrManagement = () => {
  return (
    <section id="hr-management" className="hr-manage section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="hr-manage__right">
              <p className="use-case-top-title">HR MANAGEMENT</p>
              <h2 className="use-case-title">Connecting Work and Workforce</h2>
              <div className="points">
                <div className="point">
                  <span className="point__number">1</span>
                  <p className="point__text">Starting a new job is scary. Welcome new hire with a special onboarding pack and a warm note</p>
                </div>
                <div className="point">
                  <span className="point__number">2</span>
                  <p className="point__text">Employees reach 1 year 5 year 10 year anniversary milestones? Celebrate their accomplishment!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hr-manage__left">
              <div className="shape text-center">
                <Image src={hr} alt="hr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HrManagement;

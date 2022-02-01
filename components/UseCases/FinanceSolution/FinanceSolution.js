import Image from 'next/image';
import shape from '../../../public/images/use-cases/shape-1.png';
import box from '../../../public/images/use-cases/box.png';

const FinanceSolution = () => {
  return (
    <section id="finance-solution" className="finance">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="finance__left">
              <p className="use-case-top-title">Finance SOLUTION</p>
              <h2 className="use-case-title">Get the most out of your money!</h2>
              <p className="use-case-subtitle">Budget. Budget. Budget! Our software comes with a robust billing center which will enable your team to analyze and plan your swag purchases. Keep all purchases in one dashboard to easily generate reports. </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="finance__right">
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

export default FinanceSolution;

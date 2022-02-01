import Image from 'next/image';
import dashboard from '../../../public/images/use-cases/dash.png';

const Swag = () => {
  return (
    <section className="swag section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 className="swag__title">Send swag and gifts to customers, employees, and fans worldwide. </h2>
            <p className="swag__subtitle">We pride ourselves on being flexible. We’re here to build solutions that cater toward your needs. Our goal is to make you feel as if you’re our only customer. </p>
            <button className="swag__btn">Get a free demo</button>
            <div className="swag__img">
              <Image src={dashboard} alt="dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Swag;

import Image from 'next/image';
import card from '../../../public/images/home/notecard.png';

const EnterpriseTeams = () => {
  return (
    <section className="enterprise-team">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4">
            <div className="line"></div>
            <h2>Personalized<br /> <span>Notecards</span>  </h2>
            <p className="first-text">Stop sending forms to your recipients to collect their size and address. Our redemption technology allows each recipient to enter that information themselves.</p>
            <p> Use our Pre-Order feature to know exactly how much of each size to order. No more extras!</p>
          </div>
          <div className="col-lg-7">
            <div data-aos="zoom-in" className="enterprise-right">
              <Image src={card} alt="entrprise" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseTeams;

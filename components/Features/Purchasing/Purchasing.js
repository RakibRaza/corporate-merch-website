import Image from 'next/image';
import purch from '../../../public/images/features/purchase.png';

const Purchasing = () => {
  return (
    <section className="purchasing-area section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6">
            <div data-aos="flip-left" className="purchasing-left">
              <Image src={purch} alt="purchasing" />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="features-title">
              <div className="line"></div>
              <h2 className="title">Creative Team</h2>
              <p className="sub-title">Send Swag without an address. Our redemption pages allow you to share a link with the recipient and THEY enter their address and choose their size. All you do is choose which products you want to include in the giveaway. Our pages can be fully customized by your team as you build them.  </p>
              <div className="proc-list">
                <div className="single-item">
                  <div className="icon">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15.5" cy="15.5" r="15.5" fill="#34C84A" />
                      <path d="M12.8211 21.8387C12.4217 21.8387 12.0794 21.6675 11.7941 21.4393L8.4279 17.959C7.85737 17.3885 7.85737 16.4756 8.4279 15.9621C8.99844 15.3916 9.91131 15.3916 10.4248 15.9621L12.4787 17.2173L19.3252 10.4279C19.8957 9.85737 20.8086 9.85737 21.3221 10.4279C21.8926 10.9984 21.8926 11.9113 21.3221 12.4248L13.791 21.4393C13.5628 21.6675 13.2204 21.8387 12.8211 21.8387Z" fill="white" />
                    </svg>
                  </div>
                  <div className="info">
                    <p>Unlimited Mock-ups</p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="icon">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15.5" cy="15.5" r="15.5" fill="#34C84A" />
                      <path d="M12.8211 21.8387C12.4217 21.8387 12.0794 21.6675 11.7941 21.4393L8.4279 17.959C7.85737 17.3885 7.85737 16.4756 8.4279 15.9621C8.99844 15.3916 9.91131 15.3916 10.4248 15.9621L12.4787 17.2173L19.3252 10.4279C19.8957 9.85737 20.8086 9.85737 21.3221 10.4279C21.8926 10.9984 21.8926 11.9113 21.3221 12.4248L13.791 21.4393C13.5628 21.6675 13.2204 21.8387 12.8211 21.8387Z" fill="white" />
                    </svg>
                  </div>
                  <div className="info">
                    <p>Design Assistance</p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="icon">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15.5" cy="15.5" r="15.5" fill="#34C84A" />
                      <path d="M12.8211 21.8387C12.4217 21.8387 12.0794 21.6675 11.7941 21.4393L8.4279 17.959C7.85737 17.3885 7.85737 16.4756 8.4279 15.9621C8.99844 15.3916 9.91131 15.3916 10.4248 15.9621L12.4787 17.2173L19.3252 10.4279C19.8957 9.85737 20.8086 9.85737 21.3221 10.4279C21.8926 10.9984 21.8926 11.9113 21.3221 12.4248L13.791 21.4393C13.5628 21.6675 13.2204 21.8387 12.8211 21.8387Z" fill="white" />
                    </svg>
                  </div>
                  <div className="info">
                    <p>Decoration method experts</p>
                  </div>
                </div>
              </div>
              <p className="team-text">We're your swag experts!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Purchasing;

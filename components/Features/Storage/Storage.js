import Image from 'next/image';
import gift from '../../../public/images/features/gift.png';

const Storage = () => {
  return (
    <section className="storage-area section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-5">
            <div className="features-title">
              <div className="line"></div>
              <h2 className="title">Storage & Fulfillment</h2>
              <p className="sub-title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia...   </p>
            </div>
            <div className="proc-list">
              <div className="single-item">
                <div className="icon">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15.5" r="15.5" fill="#34C84A" />
                    <path d="M12.8211 21.8387C12.4217 21.8387 12.0794 21.6675 11.7941 21.4393L8.4279 17.959C7.85737 17.3885 7.85737 16.4756 8.4279 15.9621C8.99844 15.3916 9.91131 15.3916 10.4248 15.9621L12.4787 17.2173L19.3252 10.4279C19.8957 9.85737 20.8086 9.85737 21.3221 10.4279C21.8926 10.9984 21.8926 11.9113 21.3221 12.4248L13.791 21.4393C13.5628 21.6675 13.2204 21.8387 12.8211 21.8387Z" fill="white" />
                  </svg>
                </div>
                <div className="info">
                  <p>Bring your swag to the cloud.</p>
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
                  <p>Free storage on all products </p>
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
                  <p>Take back your office closet!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="storage-right">
              <div data-aos="zoom-in-up" className="text-center">
                <Image src={gift} alt="gift" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Storage;

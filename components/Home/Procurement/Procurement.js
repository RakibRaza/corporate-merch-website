import Image from 'next/image';
import pro1 from '../../../public/images/home/pro-1.png';
import pro2 from '../../../public/images/home/pro-2.png';
import pro3 from '../../../public/images/home/pro-3.png';

const Procurement = () => {
  return (
    <div className="container">
      <section className="procurment-area">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-5">
            <div className="line"></div>
            <h2>Simple Procurement</h2>
            <div className="proc-list">
              <div className="single-item">
                <div className="icon">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15.5" r="15.5" fill="#34C84A" />
                    <path d="M12.8211 21.8387C12.4217 21.8387 12.0794 21.6675 11.7941 21.4393L8.4279 17.959C7.85737 17.3885 7.85737 16.4756 8.4279 15.9621C8.99844 15.3916 9.91131 15.3916 10.4248 15.9621L12.4787 17.2173L19.3252 10.4279C19.8957 9.85737 20.8086 9.85737 21.3221 10.4279C21.8926 10.9984 21.8926 11.9113 21.3221 12.4248L13.791 21.4393C13.5628 21.6675 13.2204 21.8387 12.8211 21.8387Z" fill="white" />
                  </svg>
                </div>
                <div className="info">
                  <p>Live Inventory</p>
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
                  <p>Real-Time Quotes</p>
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
                  <p>Design Studio</p>
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
                  <p>Order Status</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7">
            <div className="procurement-right">
              <div className="pro-box pro-1">
                <Image src={pro1} alt="porcment" />
              </div>
              <div className="pro-box pro-2">
                <Image src={pro2} alt="porcment" />
              </div>
              <div className="pro-box pro-3">
                <Image src={pro3} alt="porcment" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Procurement

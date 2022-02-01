import Image from 'next/image';
import Link from 'next/link';
import shape1 from '../../../public/images/home/footer-shape-1.png';
import shape2 from '../../../public/images/home/footer-shape-2.png';
import shape3 from '../../../public/images/home/footer-shape-3.png';
import shape4 from '../../../public/images/home/footer-shape-4.png';
import logo from '../../../public/images/white-logo.png';
import CTA from '../../../public/images/cta.png';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="shape-one d-none d-md-block">
        <Image src={shape1} alt="shape1" />
      </div>
      <div className="shape-two d-none d-lg-block">
        <Image src={shape2} alt="shape1" />
      </div>
      <div className="shape-three d-none d-sm-block">
        <Image src={shape3} alt="shape1" />
      </div>
      <div className="shape-four d-none d-lg-block">
        <Image src={shape4} alt="shape1" />
      </div>
      <div className="container">
        <div data-aos="zoom-in-up" className="footer-top">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <div className="line"></div>
                <h2>Ready to upgrade the way you stay connected? Book a demo <span>or start ordering today!</span> </h2>
                <button className="white-btn">Schecule Demo</button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cta-img">
                <Image src={CTA} alt="cta" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div data-aos="fade-up" className="footer-bottom">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="single-widget">
                <div className="footer-logo">
                  <Image src={logo} alt="logo" />
                </div>
                <p className="footer-text">We help companies create custom promotional products that align with their core values. Paired with our swag software and warehousing services, it’s never been easier to create and send swag.</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-6 col-lg-2 offset-lg-1">
              <div className="link-widget">
                <h4 className="title">Quick Links</h4>
                <ul className="widget-link">
                  <li>
                    <Link href="/products"><a>products</a></Link>
                  </li>
                  <li>
                    <Link href="/features"><a>features</a></Link>
                  </li>
                  <li>
                    <Link href="/pricing"><a>Pricing</a></Link>
                  </li>
                  <li>
                    <Link href="/use-cases"><a>use-cases</a></Link>
                  </li>
                  <li>
                    <Link href="/our-value"><a>Our Value</a></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-8 col-md-6 col-lg-4">
              <div className="contact-widget">
                <h4 className="title">Social Links</h4>
                <a className="social-icon" href="#">
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.86205 10.7024L9.323 7.25905H6.44096V5.02455C6.44096 4.08252 6.84356 3.16427 8.13433 3.16427H9.44455V0.232629C9.44455 0.232629 8.25557 0 7.11877 0C4.74533 0 3.19394 1.64921 3.19394 4.63473V7.25905H0.555664V10.7024H3.19394V19.0265H6.44096V10.7024H8.86205Z" fill="white" />
                  </svg>
                </a>
                <a className="social-icon" href="#">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.022 10.1718C16.1299 9.65527 16.1969 9.10558 16.1969 8.55588C16.1969 4.3686 12.778 0.981879 8.55922 0.981879C8.00491 0.981879 7.45431 1.0446 6.92976 1.15527C6.22291 0.612956 5.34494 0.291992 4.38883 0.291992C2.08973 0.291992 0.222168 2.14399 0.222168 4.42394C0.222168 5.37207 0.545829 6.24273 1.08898 6.94C0.981097 7.45649 0.914132 8.00619 0.914132 8.55588C0.914132 12.7432 4.33303 16.1299 8.55178 16.1299C9.1061 16.1299 9.65669 16.0672 10.1812 15.9565C10.8881 16.4951 11.7661 16.8161 12.7184 16.8161C15.0176 16.8161 16.8851 14.9641 16.8851 12.6841C16.8888 11.7397 16.5652 10.869 16.022 10.1718ZM8.78244 13.5474C6.34196 13.5474 4.29955 12.4702 4.29955 11.1494C4.29955 10.5591 4.63437 10.0205 5.39702 10.0205C6.55773 10.0205 6.66562 11.677 8.67455 11.677C9.63065 11.677 10.2482 11.2564 10.2482 10.7067C10.2482 10.0168 9.65297 9.90983 8.68571 9.67372C6.36056 9.10558 4.30327 8.86209 4.30327 6.45671C4.30327 4.27268 6.48333 3.46474 8.36205 3.46474C10.4119 3.46474 12.4841 4.27268 12.4841 5.50857C12.4841 6.13205 12.06 6.68175 11.3568 6.68175C10.304 6.68175 10.2705 5.44586 8.56666 5.44586C7.61056 5.44586 7.00416 5.7041 7.00416 6.27593C7.00416 7.0064 7.77797 7.08019 9.57485 7.49338C11.115 7.83648 12.9491 8.4821 12.9491 10.3562C12.9491 12.5366 10.8248 13.5474 8.78244 13.5474Z" fill="white" />
                  </svg>
                </a>
                <a className="social-icon" href="#">
                  <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0586 4.70856C17.0706 4.87634 17.0706 5.04417 17.0706 5.21195C17.0706 10.3297 13.1754 16.2265 6.05605 16.2265C3.86273 16.2265 1.82524 15.5912 0.111328 14.4886C0.422958 14.5245 0.722561 14.5365 1.04618 14.5365C2.85594 14.5365 4.52192 13.9253 5.8523 12.8826C4.15038 12.8466 2.72412 11.732 2.23271 10.1978C2.47244 10.2338 2.71213 10.2578 2.96385 10.2578C3.31141 10.2578 3.65901 10.2098 3.98259 10.1259C2.20877 9.76635 0.878357 8.20828 0.878357 6.32658V6.27866C1.39371 6.56631 1.99302 6.74608 2.6282 6.77003C1.58547 6.07486 0.902337 4.88833 0.902337 3.54597C0.902337 2.82686 1.09407 2.16767 1.42968 1.59237C3.33535 3.94149 6.19986 5.47559 9.41189 5.64341C9.35198 5.35576 9.31601 5.05616 9.31601 4.75652C9.31601 2.62311 11.0419 0.885254 13.1873 0.885254C14.3019 0.885254 15.3087 1.35268 16.0158 2.10776C16.8907 1.93997 17.7297 1.61635 18.4728 1.1729C18.1851 2.07182 17.5739 2.8269 16.7709 3.30628C17.5499 3.22242 18.305 3.00664 19.0001 2.70704C18.4729 3.47406 17.8136 4.1572 17.0586 4.70856Z" fill="white" />
                  </svg>
                </a>
                <a className="social-icon" href="#">
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.95282 14.7719H0.497466V5.05778H3.95282V14.7719ZM2.22328 3.73269C1.11837 3.73269 0.222168 2.93373 0.222168 1.96914C0.222168 1.50582 0.432999 1.06147 0.808281 0.733846C1.18356 0.406224 1.69256 0.222168 2.22328 0.222168C2.75401 0.222168 3.263 0.406224 3.63829 0.733846C4.01357 1.06147 4.2244 1.50582 4.2244 1.96914C4.2244 2.93373 3.32782 3.73269 2.22328 3.73269ZM16.8851 14.7719H13.4372V10.0431C13.4372 8.91613 13.4112 7.47087 11.6407 7.47087C9.84419 7.47087 9.56889 8.69528 9.56889 9.96191V14.7719H6.11726V5.05778H9.43124V6.38287H9.47961C9.94092 5.61964 11.0678 4.81419 12.749 4.81419C16.246 4.81419 16.8888 6.82456 16.8888 9.43577V14.7719H16.8851Z" fill="white" />
                  </svg>
                </a>
                <a className="social-icon" href="#">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.022 10.1718C16.1299 9.65527 16.1969 9.10558 16.1969 8.55588C16.1969 4.3686 12.778 0.981879 8.55922 0.981879C8.00491 0.981879 7.45431 1.0446 6.92976 1.15527C6.22291 0.612956 5.34494 0.291992 4.38883 0.291992C2.08973 0.291992 0.222168 2.14399 0.222168 4.42394C0.222168 5.37207 0.545829 6.24273 1.08898 6.94C0.981097 7.45649 0.914132 8.00619 0.914132 8.55588C0.914132 12.7432 4.33303 16.1299 8.55178 16.1299C9.1061 16.1299 9.65669 16.0672 10.1812 15.9565C10.8881 16.4951 11.7661 16.8161 12.7184 16.8161C15.0176 16.8161 16.8851 14.9641 16.8851 12.6841C16.8888 11.7397 16.5652 10.869 16.022 10.1718ZM8.78244 13.5474C6.34196 13.5474 4.29955 12.4702 4.29955 11.1494C4.29955 10.5591 4.63437 10.0205 5.39702 10.0205C6.55773 10.0205 6.66562 11.677 8.67455 11.677C9.63065 11.677 10.2482 11.2564 10.2482 10.7067C10.2482 10.0168 9.65297 9.90983 8.68571 9.67372C6.36056 9.10558 4.30327 8.86209 4.30327 6.45671C4.30327 4.27268 6.48333 3.46474 8.36205 3.46474C10.4119 3.46474 12.4841 4.27268 12.4841 5.50857C12.4841 6.13205 12.06 6.68175 11.3568 6.68175C10.304 6.68175 10.2705 5.44586 8.56666 5.44586C7.61056 5.44586 7.00416 5.7041 7.00416 6.27593C7.00416 7.0064 7.77797 7.08019 9.57485 7.49338C11.115 7.83648 12.9491 8.4821 12.9491 10.3562C12.9491 12.5366 10.8248 13.5474 8.78244 13.5474Z" fill="white" />
                  </svg>
                </a>
                <div className="touch">
                  <p>Get in touch : <span className="email">orders@corporatemerch.com</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="copyright-text text-center">
              <p>Designed And Developed By Team Zainiklab @2021</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

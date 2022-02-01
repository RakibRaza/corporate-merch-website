import Image from 'next/image';
import Slider from "react-slick";
import person1 from '../../../public/images/home/person-1.png';
import person2 from '../../../public/images/home/person-2.png';
import person3 from '../../../public/images/home/person-3.png';
import shape from '../../../public/images/home/footer-shape-5.png';

const Testimonial = () => {
  const settings = {
    className: "testimonial-slide",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <section className="testimonial-area">
      <div className="shape-1 d-none d-lg-block">
        <Image src={shape} alt="shape" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-title text-center">
              <div className="line"></div>
              <h2>Open Your Mind To The <br /> <span> Possibility </span> Of You. </h2>
              <p className="sub-title">Daily use and frequent reapplication of a sunscreen is your best line of This fine sheer SPF mist goes right over makeup, dries quickly, on the skin.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Slider {...settings}>
              <div className="single-slide text-center">
                <p className="quote">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula</p>
                <div className="person-img">
                  <Image src={person1} alt="person" />
                </div>
                <div className="person-info">
                  <h3 className="name">Ralph Edwards</h3>
                  <h4 className="title">Person’s Title</h4>
                  <div className="stars">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#B9B9B9" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="single-slide bg-1 text-center">
                <p className="quote">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula</p>
                <div className="person-img">
                  <Image src={person2} alt="person" />
                </div>
                <div className="person-info">
                  <h3 className="name">Ralph Edwards</h3>
                  <h4 className="title">Person’s Title</h4>
                  <div className="stars">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#B9B9B9" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="single-slide bg-2 text-center">
                <p className="quote">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula</p>
                <div className="person-img">
                  <Image src={person3} alt="person" />
                </div>
                <div className="person-info">
                  <h3 className="name">Ralph Edwards</h3>
                  <h4 className="title">Person’s Title</h4>
                  <div className="stars">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FCA610" />
                    </svg>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#B9B9B9" />
                    </svg>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;

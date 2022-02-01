import Image from 'next/image';
import Slider from "react-slick";
import Typical from 'react-typical'
import banner from '../../../public/images/home/banner-left.png';
import fire from '../../../public/images//home/fire.png';

const Banner = () => {
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  }
  return (
    <div className="home-banner" >
      <div className="home-banner-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-left">
                <div className="banner-left-top">
                  <Image src={fire} alt="fire" />
                  <p className="top-text">Created For Enterprise </p>
                </div>
                <h1>A better way to connect with <br />
                  <Slider {...setting}>
                    <span>Clients</span>
                    <span>Prospects</span>
                    <span>Employees</span>
                    <span>Fans</span>
                  </Slider>
                  {/* <Typical
                    steps={['Clients', 2000, "Prospects", 2000, 'Employees', 2000, "Fans", 2000]}
                    loop={Infinity}
                    wrapper="span"
                  /> */}
                </h1>
                <p className="subtitle">Improve your swag logistics and leave the swag creation, storage and shipping to us.</p>
                <button className="white-btn">Schecule Demo</button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="banner-right">
                <Image src={banner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

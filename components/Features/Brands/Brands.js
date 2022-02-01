import Image from 'next/image';
import Slider from "react-slick";
import brand1 from '../../../public/images/home/brand-1.png';
import brand2 from '../../../public/images/home/brand-2.png';
import brand3 from '../../../public/images/home/brand-3.png';
import brand4 from '../../../public/images/home/brand-4.png';
import brand5 from '../../../public/images/home/brand-5.png';
const brands = [brand1, brand2, brand3, brand4, brand5]
const Brands = () => {
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    className: "brand-list slide-brands",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <section className="brand-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="features-title text-center">
              <div className="title">Our Featured Brands</div>
            </div>
            <div className="brand-container">
              <Slider {...setting}>
                {brands.map((item, i) => (
                  <div key={i} className="single-brand text-center">
                    <Image src={item} alt="brand" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands;

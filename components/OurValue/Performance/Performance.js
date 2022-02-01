import Image from 'next/image';
import logo from '../../../public/images/our-value/logo.png';
import icon1 from '../../../public/images/icon/t-shirt-white.svg';
import icon2 from '../../../public/images/icon/usa.svg';
import icon3 from '../../../public/images/icon/box.svg';
import icon4 from '../../../public/images/icon/2.svg';
import icon5 from '../../../public/images/icon/brush.svg';
import icon6 from '../../../public/images/icon/safety.svg';

const data = [
  {
    id: 1, title: "Top Class Materials", desc: "We refuse to use cheap plastic in our products. We never compromise when it comes to design and comfort. We always provide the best materials .", img: icon1
  },
  {
    id: 2, title: "Made in USA", desc: "Giving Americans a fair and affordable option when buying products and services in their country.", img: icon2

  },
  {
    id: 3, title: "Plasticless Packeging", desc: "Packaging that's better for the environment. 100% recycled packaging, made without factory-made fibres.", img: icon3

  },
  {
    id: 4, title: "Carbon Offsetting", desc: "Reducing the damage effect environmental pollutants have on our planet", img: icon4
  },
  {
    id: 5, title: "Union Shop", desc: "The Union brings you fashion from all around the world", img: icon5

  },
  {
    id: 6, title: "Safety Measurment", desc: "Our products are built with safe working conditions, ethical manufacturing processes and environmentally friendly materials", img: icon6

  },
]

const Performance = () => {
  return (
    <section className="performance-area">
      <div className="container">
        <div className="performance-top">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-4">
              <div className="logo">
                <Image src={logo} alt="logo" />
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <div className="quote-left">
                <h2 className="quote">“All companies should have access to sustainable products and the right services to support their projects”</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <h2 className="perfor-title">Superior performance at a great value</h2>
            <p className="perfor-text">We believe that branded products are more than just a gift. They are how companies express themselves and their culture. They are how companies translate their mission statements into actions.</p>
            <p className="perfor-text mb-70">For that reason, we are on a mission to curate collections of products that support our social and environmental causes. Through charitable contributions from every sale, we will be able to support our initiatives further and leave the planet in a better place than we found it.</p>
          </div>
        </div>
        <div className="row">
          {data.map(({ id, title, desc, img }) => (
            <div key={id} className="col-md-6 col-lg-4">
              <div data-aos="zoom-in-up" className="single-performance">
                <div className="icon">
                  <Image src={img} alt={title} />
                </div>
                <h3 className="title">{title}</h3>
                <p className="sub-title">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-10">
            <p className="perfor-text mt-20">Through this journey, we will be able to guide our corporate clients and help them align their core values with the branded products that support their initiatives.</p>
            <p className="perfor-text">We work tirelessly to keep the carbon footprint of our operation to a minimum; however, every order still produces a carbon footprint.</p>
            <p className="perfor-text">For that reason, we have partnered with EcoCart to enable our clients to offset the carbon footprint of their orders. If you opt for this program, we will simply add the offsetting costs to your order and take care of the rest!</p>
            <p className="perfor-text">Our clients can view our carbon offsetting projects using the button below.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Performance;

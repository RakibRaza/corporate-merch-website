import { Accordion } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { useRouter } from 'next/router'
import arrowPrev from '../../../public/images/icon/arrow-prev.svg';
import arrowNext from '../../../public/images/icon/arrow-next.svg';
import tShirt from '../../../public/images/products/1.png';
import upload from '../../../public/images/icon/upload.svg';
import error from '../../../public/images/icon/error.svg';
import cart from '../../../public/images/icon/cart-2.svg';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={`${className}`} style={{ ...style }} onClick={onClick} >
      <Image src={arrowPrev} alt="arrow" />
    </button>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={`${className}`} style={{ ...style }} onClick={onClick}>
      <Image src={arrowNext} alt="arrow" />
    </button>

  );
}
const data = [
  { id: 1, category: "green", img: tShirt, size: "s", quantity: 100 },
  { id: 2, category: "blue", img: tShirt, size: "m", quantity: 100 },
  { id: 3, category: "blue", img: tShirt, size: "s", quantity: 100 },
  { id: 4, category: "red", img: tShirt, size: "l", quantity: 100 },
  { id: 5, category: "red", img: tShirt, size: "xl", quantity: 100 },
  { id: 6, category: "red", img: tShirt, size: "m", quantity: 100 },
  { id: 7, category: "blue", img: tShirt, size: "xl", quantity: 100 },
  { id: 8, category: "red", img: tShirt, size: "xl", quantity: 20 },
  { id: 9, category: "green", img: tShirt, size: "3xl", quantity: 20 },
]

const allCategory = data.map((item) => item.category);
const unique = new Set(allCategory);
const uniqueCategory = ["all color", ...unique];

const ProductDetails = ({ singleProduct }) => {
  const router = useRouter()
  const [products, setProducts] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("all color");

  const handleClick = (item) => {
    setSelectedCategory(item);
  }
  useEffect(() => {
    if (selectedCategory === "all color") {
      setProducts(data);
    } else {
      setProducts(data.filter((item) => item.category === selectedCategory));
    }
  }, [selectedCategory])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    className: "product_slide",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <section>
      <div className="container">
        <div className="product-details">
          <div className="row">
            <div className="col-lg-5">
              <Slider {...settings}>
                <div className="product-details__img">
                  <Image src={singleProduct.img} alt="product" />
                </div>
                <div className="product-details__img">
                  <Image src={singleProduct.img} alt="product" />
                </div>
                <div className="product-details__img">
                  <Image src={singleProduct.img} alt="product" />
                </div>
              </Slider>
              <div className="product-check">
                <input className="form-check-input" type="checkbox" id="swag" />
                <label className="form-check-label" htmlFor="swag">Looking to have this added to a swag pack? We offer kitting on all our products. Check this box to let us know. </label>
              </div>
              <div className="check-inventory">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Check Inventory</Accordion.Header>
                    <Accordion.Body>
                      <div className="body-top">
                        {uniqueCategory.map((item, i) => <button key={i} className={`${item === selectedCategory ? "active" : ""}`} onClick={() => handleClick(item)}>{item}</button>)}
                      </div>
                      <div className="body-bottom">
                        <div className="color-products">
                          <div className="row">
                            {products.map(({ id, quantity, size, category }) => (
                              <div key={id} className="col-6 col-sm-4">
                                <div className="color-product">
                                  <div className="color-product__img">
                                    <Image src={singleProduct.img} alt="product" />
                                  </div>
                                  <div className="color-product__meta">
                                    <span className={`color ${category}`}></span> <span className="size"> {size} </span> <span className="quantity"> ({quantity}) </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="details-right">
                <div className="single-widget">
                  <h2 className="title">Aenean nec suscip T-Shirt</h2>
                  <p className="info">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Lorem ipsum dolor</p>
                </div>
                <div className="single-widget">
                  <h3 className="subtitle">Choose your color</h3>
                  <ul className="choose-colors">
                    <li className="color active"></li>
                    <li className="color color-1"></li>
                    <li className="color color-2"></li>
                    <li className="color color-3"></li>
                    <li className="color color-4"></li>
                    <li className="color color-5"></li>
                    <li className="color color-6"></li>
                    <li className="color color-7"></li>
                    <li className="color color-8"></li>
                    <li className="color color-9"></li>
                    <li className="color color-10"></li>
                    <li className="color color-11"></li>
                    <li className="color color-12"></li>
                  </ul>
                </div>
                <div className="single-widget">
                  <div className="widget-title">
                    <h3 className="subtitle">Upload your design</h3>
                    <div className="select-part"><span>Side : </span>
                      <select className="form-select">
                        <option value="fron-part">Front Part</option>
                        <option value="back-part">back Part</option>
                      </select>
                    </div>
                  </div>
                  <div className="upload-input-wrapper">
                    <div className="input-group">
                      <input type="file" className="form-control" id="inputGroupFile02" />
                      <label className="input-group-text" htmlFor="inputGroupFile02">
                        <div className="img">
                          <Image src={upload} alt="icon" />
                        </div>
                        <p className="drag-drop">Drag and Drop or <span>Upload</span> Design (max 20M)</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="single-widget">
                  <h3 className="subtitle">Decorating method</h3>
                  <div className="btns">
                    <select className="form-select">
                      <option value="2-color">Screenprinting (2 Color)</option>
                      <option value="3-color">Screenprinting (3 Color)</option>
                      <option value="4-color">Screenprinting (4 Color)</option>
                      <option value="5-color">Screenprinting (5 Color)</option>
                      <option value="6-color">Screenprinting (6 Color)</option>
                    </select>
                    <button className="embroidery">Embroidery</button>
                  </div>
                </div>
                <div className="single-widget">
                  <div className="methods-details">
                    <div className="icon">
                      <Image src={error} alt="error" />
                    </div>
                    <p className="text">Your design is applied directly onto the products’ surface by pushing ink through a fine mesh screen. This is one of our most popular decoration methods.</p>
                  </div>
                </div>
                <div className="single-widget quantity">
                  <div className="quantity-header">
                    <h2>Quanitity</h2>
                    <div className="minimum"> <Image src={error} alt="error" /> <span>Minimum Order amount 20</span> </div>
                  </div>
                  <div className="quantity-body">
                    <div className="body-top">
                      <h3 className="item">Total Item : <span>104</span></h3>
                      <div className="gender"><span>Gender : </span>
                        <select className="form-select">
                          <option value="male">male</option>
                          <option value="female">female</option>
                          <option value="others">others</option>
                        </select>
                      </div>
                    </div>
                    <div className="body-bottom">
                      <div className="sizes-wrapper">
                        <div className="single-sizes">
                          <div className="size-box">
                            <span>10</span>
                          </div>
                          <h3 className="size-name">s</h3>
                        </div>
                        <div className="single-sizes">
                          <div className="size-box">
                            <span>22</span>
                          </div>
                          <h3 className="size-name">m</h3>
                        </div>
                        <div className="single-sizes">
                          <div className="size-box">
                            <span>42</span>
                          </div>
                          <h3 className="size-name">l</h3>
                        </div>
                        <div className="single-sizes">
                          <div className="size-box">
                            <span>32</span>
                          </div>
                          <h3 className="size-name">xl</h3>
                        </div>
                        <div className="single-sizes">
                          <div className="size-box">
                            <span>12</span>
                          </div>
                          <h3 className="size-name">2xl</h3>
                        </div>
                        <div className="single-sizes">
                          <div className="size-box">
                            <span>12</span>
                          </div>
                          <h3 className="size-name">3xl</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quantity-btn">
                    <button>+ Add More Size</button>
                  </div>
                </div>
                <div className="single-widget production">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="production-time">
                        <span>Production Time</span>
                        <h3>Standard - 20 Days <span className="icon"> <Image src={error} alt="error" /></span></h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="pricing">
                        <span>Pricing</span>
                        <h3>$15 to $37.5 <span className="icon"><Image src={error} alt="error" /></span></h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-btn">
                  <button onClick={() => router.push("/products/cart")}> <span className="icon"><Image src={cart} alt="cart" /></span> Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;

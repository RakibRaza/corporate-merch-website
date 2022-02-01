import Image from 'next/image';
import img1 from '../../../public/images/products/5.png';
import img2 from '../../../public/images/products/p.png';
import { FiEdit, FiTrash2 } from "react-icons/fi";

const OrderDetails = () => {
  return (
    <div className="order-details">
      <h2 className="title">Order details <span>(2)</span></h2>
      <div className="top-product">
        <div className="row">
          <div className="col-md-6">
            <div className="product-left">
              <div className="img">
                <Image src={img1} alt="product" />
              </div>
              <div className="info">
                <h4 className="name">Aenean nec suscip</h4>
                <span className="sub-text">Size : S,M,L</span> <span className="sub-text">Gender : Male</span>
                <div className="colors">
                  <span className="sub-text">Color : </span>
                  <span className="color one"></span>
                  <span className="color two"></span>
                  <span className="color three"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-right text-md-end">
              <div className="btns">
                <button className="add-logo"> + Add Logo</button> <button className="edit"><FiEdit /></button> <button className="delet"><FiTrash2 /></button>
              </div>
              <span className="sub-text">x120</span><span className="price">$15,302.00</span>
            </div>
          </div>
        </div>
        <div className="product-info-wrapper">
          <div className="product-info">
            <div className="single-product">
              <div className="name">
                <span className="top-title">Name</span>
                <div className="box">
                  <div className="img">
                    <Image src={img2} alt="product" />
                  </div>
                  <span>Aenean nec suscip</span>
                </div>
              </div>
              <div className="size">
                <span className="top-title">Size</span>
                <select className="form-select">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                </select>
              </div>
              <div className="gender">
                <span className="top-title">Gender</span>
                <select className="form-select">
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="colors">
                <span className="top-title">color</span>
                <div className="color"></div>
              </div>
              <div className="quantity">
                <span className="top-title">Quantity</span>
                <select className="form-select">
                  <option value="20">20</option>
                  <option value="12">12</option>
                  <option value="25">25</option>
                </select>
              </div>
            </div>
            <div className="single-product">
              <div className="name">
                <span className="top-title">Name</span>
                <div className="box">
                  <div className="img">
                    <Image src={img2} alt="product" />
                  </div>
                  <span>Aenean nec suscip</span>
                </div>
              </div>
              <div className="size">
                <span className="top-title">Size</span>
                <select className="form-select">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                </select>
              </div>
              <div className="gender">
                <span className="top-title">Gender</span>
                <select className="form-select">
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="colors">
                <span className="top-title">color</span>
                <div className="color two"></div>
              </div>
              <div className="quantity">
                <span className="top-title">Quantity</span>
                <select className="form-select">
                  <option value="20">20</option>
                  <option value="12">12</option>
                  <option value="25">25</option>
                </select>
              </div>
            </div>
            <div className="single-product">
              <div className="name">
                <span className="top-title">Name</span>
                <div className="box">
                  <div className="img">
                    <Image src={img2} alt="product" />
                  </div>
                  <span>Aenean nec suscip</span>
                </div>
              </div>
              <div className="size">
                <span className="top-title">Size</span>
                <select className="form-select">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                </select>
              </div>
              <div className="gender">
                <span className="top-title">Gender</span>
                <select className="form-select">
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="colors">
                <span className="top-title">color</span>
                <div className="color three"></div>
              </div>
              <div className="quantity">
                <span className="top-title">Quantity</span>
                <select className="form-select">
                  <option value="20">20</option>
                  <option value="12">12</option>
                  <option value="25">25</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-product">
        <div className="row">
          <div className="col-md-6">
            <div className="product-left">
              <div className="img">
                <Image src={img1} alt="product" />
              </div>
              <div className="info">
                <h4 className="name">Aenean nec suscip</h4>
                <span className="sub-text">Size : S,M,L</span> <span className="sub-text">Gender : Male</span>
                <div className="colors">
                  <span className="sub-text">Color : </span>
                  <span className="color one"></span>
                  <span className="color two"></span>
                  <span className="color three"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-right text-md-end">
              <div className="btns">
                <button className="add-logo"> + Add Logo</button> <button className="edit"><FiEdit /></button> <button className="delet"><FiTrash2 /></button>
              </div>
              <span className="sub-text">x120</span><span className="price">$15,302.00</span>
            </div>
          </div>
        </div>
        <div className="product-info-wrapper">
          <div className="product-info">
            <div className="single-product">
              <div className="name">
                <span className="top-title">Name</span>
                <div className="box">
                  <div className="img">
                    <Image src={img2} alt="product" />
                  </div>
                  <span>Aenean nec suscip</span>
                </div>
              </div>
              <div className="size">
                <span className="top-title">Size</span>
                <select className="form-select">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                </select>
              </div>
              <div className="gender">
                <span className="top-title">Gender</span>
                <select className="form-select">
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="colors">
                <span className="top-title">color</span>
                <div className="color four"></div>
              </div>
              <div className="quantity">
                <span className="top-title">Quantity</span>
                <select className="form-select">
                  <option value="20">20</option>
                  <option value="12">12</option>
                  <option value="25">25</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="time-price">
        <div className="row">
          <div className="col-md-6">
            <div className="left">
              <span className="sub-text">Production Time</span>
              <h3 className="time">Standard - 20 Days</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right text-md-end">
              <span className="sub-text">Estimated Total</span>
              <h3 className="price">$37, 243</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="submit">
        <button>Submit Request</button>
      </div>

    </div>
  )
}

export default OrderDetails;

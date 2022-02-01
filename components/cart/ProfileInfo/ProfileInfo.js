import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import user from '../../../public/images/user-1.png';
import icon from '../../../public/images/icon/3.svg';
import email from '../../../public/images/icon/email.svg';
import mobile from '../../../public/images/icon/mobile.svg';
import location from '../../../public/images/icon/location.svg';

const ProfileInfo = () => {
  return (
    <aside className="prifile-info">
      <h2 className="title">Profile Info</h2>
      <div className="single-widget">
        <div className="profile-detail">
          <div className="left">
            <div className="img">
              <Image src={user} alt="user" />
            </div>
            <div className="meta">
              <h5 className="name">Zachary Parker</h5>
              <p className="email">renasaevu@bej.edu</p>
            </div>
          </div>
          <div className="right">
            <FaChevronRight className="icon" />
          </div>
        </div>
      </div>
      <div className="single-widget">
        <div className="profile-detail">
          <div className="left">
            <div className="img icon">
              <Image src={icon} alt="user" />
            </div>
            <div className="meta">
              <h5 className="name">Order History</h5>
            </div>
          </div>
          <div className="right">
            <FaChevronRight className="icon" />
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="box-top">
          <h5 className="subtitle">Contact Information</h5>
          <span className="edit">Edit Info <FaChevronRight className="icon" /> </span>
        </div>
        <div className="single-item">
          <div className="icon">
            <Image src={email} alt="email" />
          </div>
          <div className="details">
            <span>Email</span>
            <p>renasaevu@bej.edu</p>
          </div>
        </div>
        <div className="single-item">
          <div className="icon">
            <Image src={mobile} alt="mobile" />
          </div>
          <div className="details">
            <span>Phone</span>
            <p>(562) 975-6876</p>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="box-top">
          <h5 className="subtitle">Shipping Address</h5>
          <span className="edit">Edit Info <FaChevronRight className="icon" /> </span>
        </div>
        <div className="single-item">
          <div className="icon">
            <Image src={location} alt="location" />
          </div>
          <div className="details">
            <p>45 Roker Terrace, Latheronweel <br /> KW5 8NW, London</p>
            <span className="flag-icon flag-icon-gb"></span><span> United Kingdom</span>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="box-top">
          <h5 className="subtitle">Billing Address</h5>
          <span className="edit">Edit Info <FaChevronRight className="icon" /> </span>
        </div>
        <div className="single-item">
          <div className="icon">
            <Image src={location} alt="location" />
          </div>
          <div className="details">
            <p>45 Roker Terrace, Latheronweel <br /> KW5 8NW, London</p>
            <span className="flag-icon flag-icon-gb"></span> <span> United Kingdom</span>
          </div>
        </div>
      </div>
      <div className="others">
        <h5 className="subtext">Others</h5>
        <div className="dates">
          <span>In-hands date</span>
          <input className="date" type="date" />
        </div>
        <div className="single-switch">
          <div className="switch-top">
            <span>Kitting</span>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
            </div>
          </div>
          <p>Will we be putting one of each product into a pack for you?</p>
        </div>
        <div className="single-switch">
          <div className="switch-top">
            <span>Drop shipping</span>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
            </div>
          </div>
          <p>Will we be individually shipping these</p>
        </div>
        <div className="single-switch">
          <div className="switch-top">
            <span>Storage </span>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
            </div>
          </div>
          <p>Will we be warehousing these products for you? </p>
        </div>
      </div>
    </aside>
  )
}

export default ProfileInfo;

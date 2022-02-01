import { useEffect, useState } from 'react';
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import cartIcon from '../../../public/images/icon/cart.svg';
import icon1 from '../../../public/images/icon/dashboard-3.svg';
import icon2 from '../../../public/images/icon/sales-1.svg';
import icon3 from '../../../public/images/icon/mike-2.svg';
import icon4 from '../../../public/images/icon/profile.svg';
import icon5 from '../../../public/images/icon/finance-1.svg';

const links = [

  { title: "products", path: "/products" },
  { title: "how it works", path: "/features" },
  { title: "pricing", path: "/pricing" },
  {
    title: "use-cases", path: "/use-cases", subNav: [
      { title: "HR Management", icon: icon1, id: "hr-management" },
      { title: "Sales Management", icon: icon2, id: "sales-management" },
      { title: "Marketing Solution", icon: icon3, id: "marketing-solution" },
      { title: "Employee Experience", icon: icon4, id: "employe_experi" },
      { title: "Finance Solution", icon: icon5, id: "finance-solution" },
    ]
  },
]

const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.pageYOffset > 100) {
        document.getElementById("sticky").classList.add("stick")

      } else {
        document.getElementById("sticky").classList.remove("stick")
      }
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  return (
    <>
      <header id="sticky" className="header-area header-md-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <Link href="/"><a><Image src={logo} alt="logo" /></a></Link>
            </div>
            <div className="col-lg-7">
              <nav className="main-menu">
                <ul>
                  {links.map(({ title, path, subNav }, i) => (
                    <li key={i}><Link href={path}><a className={`${router.pathname == path ? "active" : ""}`}>{title} {subNav && <FaAngleDown />}</a></Link>
                      {subNav && <ul className="sub-menu">
                        {subNav.map(({ title, icon, id }, i) => (
                          <li key={i}><Link href={`${path}#${id}`}><a>
                            <div className="icon">
                              <Image className="icon-img" src={icon} alt="icon" />
                            </div>
                            <span>{title}</span>
                          </a></Link>
                          </li>
                        ))}
                      </ul>}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 text-end">
              <div className="header-right">
                <div className="cart-icon">
                  <Image src={cartIcon} alt="cart-icon" />
                  <span className="count">2</span>
                </div>
                <div>
                  <button className="logn-in">login</button>
                  <button className="sign-in">sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="logo-area">
                <Link href="/"><a><Image src={logo} alt="logo" /></a></Link>
              </div>
            </div>
            <div className="col-6">
              <div className="menu-bar text-end">
                <FaBars onClick={handleOpen} />
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${open ? "open-menu" : ""}`}>
          <nav>
            <ul>
              {links.map(({ title, path }, i) => (
                <li key={i}><Link href={path}><a className={`${router.pathname == path ? "active" : ""}`}>{title}</a></Link> </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div onClick={() => setOpen(false)} className={`menu-overlay ${open ? "open" : ""}`}></div>
    </>
  )
}

export default Header;

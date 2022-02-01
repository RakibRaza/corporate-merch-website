import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import ScrollToTop from '../Helpers/ScrollToTop/ScrollToTop';
import Aos from 'aos';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    Aos.init({ startEvent: 'load' })
  }, [])
  return (
    <>
      <Header />
      {children}
      <ScrollToTop showBelow={400} />
      <Footer />
    </>
  )
}

export default Layout;

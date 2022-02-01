import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });
  return (
    <>
      {show && (
        <button onClick={handleClick} id="scrollUp" style={{ position: "fixed", zIndex: 2147483647, display: "block" }}>
          <FaAngleUp className="icon" />
        </button>
      )}
    </>
  );
};
export default ScrollToTop;
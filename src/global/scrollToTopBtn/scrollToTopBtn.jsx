import { useState, useEffect } from "react";
import "./scrollToTopBtn.css";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopBtn = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setActiveBtn(true);
      } else {
        setActiveBtn(false);
      }
    });
  }, []);
  return (
    <div className="scrollToTopBtn_container">
      <button
        className={`${activeBtn ? "showBtn" : "hideBtn"}`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default ScrollToTopBtn;

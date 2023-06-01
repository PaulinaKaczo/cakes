import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    //sprawdzamy, czy wartość scrollY przekracza trzykrotność wysokości okna przeglądarki.
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight * 3) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Dzięki useEffect rejestrujemy zdarzenie scroll, które nasłuchuje na przewijanie strony.
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${showButton ? "show" : ""}`}
      onClick={handleScrollToTop}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default ScrollToTopButton;

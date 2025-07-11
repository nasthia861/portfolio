import React, { useEffect } from "react";
import "../styling/Loader.css";

const Loader = () => {
  const [showMessage, setShowMessage] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 6000); // Show message after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  const handleScroll = () => {
    const layoutSection = document.getElementById("main-layout");
    layoutSection?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="loader">
      {!showMessage ? (
        <svg
          width="1000"
          height="900"
          viewBox="0 0 1136 947"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group1">
            <path
              id="large-tri"
              d="M517.533 78.4858C541.152 41.7537 594.848 41.7538 618.467 78.4859L1000.46 672.549C1026.13 712.479 997.461 765 949.988 765H186.012C138.539 765 109.869 712.479 135.544 672.549L517.533 78.4858Z"
              fill="#D9D9D9"
            />
            <path
              id="medium-tri"
              d="M515.78 219.951C538.977 180.503 596.023 180.503 619.22 219.951L847.318 607.836C870.839 647.834 841.999 698.25 795.598 698.25H339.402C293.001 698.25 264.161 647.834 287.682 607.836L515.78 219.951Z"
              fill="#D8BFD9"
            />
            <path
              id="small-tri"
              d="M513.414 373.386C535.582 329.374 598.418 329.374 620.586 373.386L706.78 544.509C726.88 584.413 697.874 631.5 653.194 631.5H480.806C436.126 631.5 407.12 584.413 427.22 544.509L513.414 373.386Z"
              fill="#D9D9D9"
            />
          </g>
        </svg>
      ) : (
        <div className="welcome-container">
          <h1>Welcome to My Portfolio!</h1>
          <button className="see-work-btn" onClick={handleScroll}>
            See My Work
          </button>
        </div>
      )}
    </div>
  );
};

export default Loader;

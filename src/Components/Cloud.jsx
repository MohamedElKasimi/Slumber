import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Form from "./Form";

const Cloud = () => {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0 },
    delay: 50,
    config: {
      mass: 1,
      friction: 1,
      tension: 1,
    },

    onRest: () => setFlip(!flip),
  });

  return (
    <animated.div className="cloud" style={props}>
      <svg
        width="650px"
        height="650px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M12 4C15.0333 4 17.5583 6.15833 18.125 9.03333C20.2917 9.18333 22 10.9667 22 13.1667C22 15.4667 20.1333 17.3333 17.8333 17.3333H7C4.24167 17.3333 2 15.0917 2 12.3333C2 9.75833 3.95 7.63333 6.45833 7.36667C7.5 5.36667 9.59167 4 12 4Z"
            fill="#0b1343"
          ></path>{" "}
        </g>
      </svg>
    </animated.div>
  );
};

export default Cloud;

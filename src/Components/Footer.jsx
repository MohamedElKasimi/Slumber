import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
    config: {
      mass: 1,
      friction: 1,
      tension: 1,
    },

    onRest: () => setFlip(!flip),
  });

  return (
    <animated.div className="footer" style={props}>
      <div className="logo">Slumber</div>
      {<TypeAnimation
        sequence={[
          "",
          0,
          "REM cycles are stages of sleep with vivid dreams and active brain activity. Sleep cycles repeat throughout the night, lasting around 90 minutes, including REM sleep. It helps process information and consolidate memories. Considering REM cycles when waking up can lead to feeling refreshed. Understanding your sleep patterns helps aim for waking up between cycles for a smoother transition to wakefulness.", // Types 'One'
          100000000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        speed = {60}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        omitDeletionAnimation	= {true}
        style={{ fontSize: "0.85em", display :"none"
        }
        }
        className='desc'
      /> }
      {/* <p className="desc">REM cycles are stages of sleep with vivid dreams and active brain activity. Sleep cycles repeat throughout the night, lasting around 90 minutes, including REM sleep. It helps process information and consolidate memories. Considering REM cycles when waking up can lead to feeling refreshed. Understanding your sleep patterns helps aim for waking up between cycles for a smoother transition to wakefulness.</p> */}
    </animated.div>
  );
};

export default Footer;

import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const Form = () => {
  const [stt, changeStt] = useState(true);
  const [flip, setFlip] = useState(false);
  const [timeInput, setTimeInput] = useState('00:00');
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const handleInputChange = (event) => {
    setTimeInput(event.target.value);
  };

  const props1 = useSpring({
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
    <animated.div className="form" style={props1}>
      <button
        className={stt ? "sleep-time selected" : "sleep-time"}
        onClick={() => changeStt(true)}
      >
        I want to sleep at
      </button>
      <button
        className={stt ? "wake-time" : "wake-time selected"}
        onClick={() => changeStt(false)}
      >
        I want to wake at
      </button>
      <div className="box">
        <input type="time" value={timeInput} onChange={handleInputChange}/>
        <motion.button className="calculate" onClick={modalOpen ? close : open}>
          Calculate
        </motion.button>
        <AnimatePresence initial={false}
          wait ={true}
          onExitComplete={() => null}>
          
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} mode={stt} timeInput={timeInput}/>}
        </AnimatePresence>
      </div>
    </animated.div>
  );
};
export default Form;

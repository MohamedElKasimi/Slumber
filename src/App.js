import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './App.css';
import React, { useState } from 'react';
import Backdrop from './Components/Backdrop';
import Form from './Components/Form';
import Footer from './Components/Footer';
import { motion } from 'framer-motion';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);
  return (
    <div>
      <Backdrop></Backdrop>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;

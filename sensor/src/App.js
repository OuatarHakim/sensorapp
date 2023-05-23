import './App.css';
import React from 'react';

import Header from './Componenet/Header/Header.jsx';
import Information from './Componenet/Information/Information.jsx';
import BrokerClient from './Componenet/Mqtt/Connection';
import { Route, Routes } from 'react-router-dom';
import Home from './Componenet/Home';
function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="*" element={<Home />} />
         </Routes>

    </div>




  );
}

export default App;



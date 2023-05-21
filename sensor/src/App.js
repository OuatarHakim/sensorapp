import './App.css';
import React from 'react';

import Header from './Componenet/Header/Header.jsx';
import Information from './Componenet/Information/Information.jsx';
import BrokerClient from './Componenet/Mqtt/Connection';
function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Header/>

  </header>
  <BrokerClient/>

      <Information className="App-information"/>
    
    </div>




  );
}

export default App;









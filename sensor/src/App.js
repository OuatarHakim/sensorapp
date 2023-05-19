import './App.css';
import './Componenet/Header/Header.jsx'
import './Componenet/Information/Information.jsx'


import React from 'react';

import Header from './Componenet/Header/Header.jsx';
import Information from './Componenet/Information/Information.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Header/>
      </header>


      <information className="App-information">


                  <Information/>
                </information>
    </div>




  );
}

export default App;









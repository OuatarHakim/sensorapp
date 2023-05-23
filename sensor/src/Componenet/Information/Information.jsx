import React, { useState } from 'react';
//import './Information.module.css';

function Information(){



    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [inputValue, setInputValue] = useState('');

const handleLogin = () => {
                        // Code pour gérer la connexion
                        setIsLoggedIn(true);
                        };

const handleLogout = () => {
                         // Code pour gérer la déconnexion
                         setIsLoggedIn(false);
                         };

const handleInputChange = (event) => {
                                   setInputValue(event.target.value);
                                   };

    return(
<div className="information">
    <div className ="Nav">
                        <section>


                          <nav>

                            <ul>
                            <h1>Sensors</h1>
                              <li><a href="/Taux d'humidité salle serveur">Taux d'humidité salle serveurrrr</a></li>
                              <li><a href="/Température Bureau">Température Bureau</a></li>
                              <li><a href="/Porte avant">Porte avant</a></li>
                              <li><a href="/Température Salle A111">Température Salle A111</a></li>
                              <li><a href="/charge batterie">charge batterie</a></li>
                              <li><a href="/Température aile B">Température aile B</a></li>
                            </ul>
                          </nav>
                        </section>

              
                            </div>
</div>
    );



}
export default Information;
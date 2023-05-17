import React, { useState } from 'react'
import  './Broker.module.css'



const BrokerMqtt =({connect , disconnect ,connectBtn }) => {
    const [broker ,setBroker] = useState('')
   
   
    const changeBroker = (event) => {
        setBroker(event.target.value)
    }
    
  
   const handleDisconnect = () => {
    disconnect()
   }
   const handleconnect = (event) => {
    event.preventDefault();

    connect(broker)
   }
   return (
    <div className="form-group">
        <p>MQTT broker : </p>

        <form >
               
               <input id ="url" className="form-field" text="text" placecholder="URL" onChange = {changeBroker}   value = {broker}/>
                  
          
           <button className="ButtonInput" onClick={handleconnect}>{connectBtn}</button>
           <button className="ButtonInput" onClick={handleDisconnect}>Disconnect</button>
          
     </form>

   </div>
   )
}

export default BrokerMqtt
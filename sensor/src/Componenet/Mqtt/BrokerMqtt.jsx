import React, { useState } from 'react'


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

    connect(broker,"value/#")
   }
   return (
    <div className='url-content'>
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
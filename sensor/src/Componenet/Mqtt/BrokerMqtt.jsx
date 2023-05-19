import React, { useState } from 'react'

import  style from'./Broker.module.css'



const BrokerMqtt =({connect , disconnect ,connectBtn }) => {
    const [broker ,setBroker] = useState('')
   
   
    const changeBroker = (event) => {
        setBroker(event.target.value)
    }
    
  
    
   const handleconnect = (event) => {
    if(connectBtn === 'Connect'){
    event.preventDefault()
    connect(broker)
    }else if(connectBtn === 'Disconnect'){
        disconnect()
    
    }
   }
   return (
    <div className={style.broker}>
    <div className={style.formgroup}>
        <p><strong>MQTT broker :  </strong></p>

        <form >
               
               <input id ="url" className={style.styleformfield} text="text" placecholder="URL" onChange = {changeBroker}   value = {broker}/>
                  
           <button className={style.ButtonInput} onClick={handleconnect}>{connectBtn}</button>
          
     </form>

   </div>
   </div>
   )
}

export default BrokerMqtt
import mqtt from "mqtt/dist/mqtt"
import { useEffect, useState } from 'react'
import BrokerMqtt from '../Mqtt/BrokerMqtt'



    const BrokerClient = () => {
        const [client ,setClient] = useState(null)
        const [messages, setMessages] = useState([])
        const [connectStatus, setConnectStatus] = useState('Connect')
        const [isSubed, setIsSub] = useState(false)

       
        const connectMqtt = (host) => {
            
             setConnectStatus('Connecting')
             setClient(mqtt.connect(host))
          
            
          
        }


        useEffect(() => {
            if(client) {
                client.on('connect', () => {
                    setConnectStatus('connected')
                    console.log('connection successful')
                })
                
                client.on('error', (err) => {
                    console.log('connection error : ' ,err)
                    client.end()
                })
                client.on('reconnect' , () => {
                    setConnectStatus('Reconnecting')
                })
                
                  client.on('message' , (topic , message) => {
                    console.log(`hakim`);
                   
                    console.log(`received message: ${message} from topic: ${topic}`)
                })
                client.subscribe("value/#")
              
            }
        } ,[client,messages])

        const mqttDisconnect = () => {
            if (client) {
              try {
                client.end(false, () => {
                  setConnectStatus('Connect')
                  console.log('disconnected successfully')
                })
              } catch (error) {
                console.log('disconnect error:', error)
              }
            }
        }


  const mqttSub = (subscription) => {
    if (client) {
      const topic = subscription
     
      client.subscribe(topic, (error) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        console.log("Subscribe to topic")
        setIsSub(true)
      })
    }
  }
        return (
            <>
              <BrokerMqtt 
              connect = {connectMqtt}
              disconnect = {mqttDisconnect}
              connectBtn={connectStatus}
              />
            
             <ul>
  
    <li >
      <strong>Topic:</strong> {messages}, <strong>Message:</strong> {messages}
    </li>

</ul>

            </>
        )
    }

    export default  BrokerClient
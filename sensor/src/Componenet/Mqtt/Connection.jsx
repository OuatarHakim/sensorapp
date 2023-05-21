import mqtt from "mqtt/dist/mqtt"
import { useEffect, useState } from 'react'
import BrokerMqtt from '../Mqtt/BrokerMqtt'
import Type from "../Type/Type"


    const BrokerClient = () => {
        const [client ,setClient] = useState(null)
        const [messages, setMessages] = useState(null)
        const [connectStatus, setConnectStatus] = useState('Connect')
        const [isSubed, setIsSub] = useState(false)

       
        const connectMqtt = (host) => {
             setConnectStatus('Connecting')
             setClient(mqtt.connect(host))
          
        }


        useEffect(() => {
            if(client) {
                client.on('connect', () => {
                    setConnectStatus('Disconnect')
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
                    setMessages(message);
                    console.log(`Received message: ${message} from topic: ${topic}`);
                })
                client.subscribe("value/#")
              
            }
        } ,[client])

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

              <Type messageJson ={JSON.parse(messages)}/>
              
      
       
            </>
        )
    }

    export default  BrokerClient
import Header from "./Header/Header"
import Information from "./Information/Information"
import Info from "./Information/info"

import BrokerClient from "./Mqtt/Connection"


const Home = () => {
return (
    <>
    <Header/>
    <BrokerClient/>
<Info/>
    
    </>
)
}

export default Home 
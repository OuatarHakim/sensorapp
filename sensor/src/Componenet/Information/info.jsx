import { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import BrokerClient from '../Mqtt/Connection.jsx';
import "./Information.module.css"






const Info = ({values,type} ) => {

  const [valueType, setValueType] = useState([]);

  useEffect(() => {
    setValueType(values || []);
  }, [values]);

  return (
<dd>
     <div class='info'>
       <h1 className='title'>{type}</h1>
       <p className='subtitle'>Valeur actuelle:</p>
       <p className='current-value'>{valueType.slice(-1)}</p>
       <p className='subtitle'>Valeurs historiques:</p>
       <ul className='value-list'>
         {valueType.map((value) => (
           <li className='value-item'>{value}</li>
         ))}
       </ul>
     </div>
     </dd>
   );


}


export default Info




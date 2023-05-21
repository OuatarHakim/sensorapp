import { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';



const Info = ({values,type} ) => {

  const [valueType, setValueType] = useState([]);

  useEffect(() => {
    setValueType(values || []);
  }, [values]);

  return (
  
    <div className='info'>
      <h1>{type}</h1>
      <p>Valeur actuelle:</p>
      {valueType.slice(-1)}
      <p>Valeurs historiques:</p>
      <ul>{valueType.map((value) => <li>{value}</li>)}</ul>
    </div>
  );


}

export default Info
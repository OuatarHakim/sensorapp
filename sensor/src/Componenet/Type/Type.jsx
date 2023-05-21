import { useEffect, useState } from 'react'
import style  from './Type.module.css'
import Info from '../Information/info'
import { useParams ,useLocation } from 'react-router-dom';
import { Routes,Link ,Route} from 'react-router-dom';
import React from 'react';

const  Type = ({ messageJson }) => {

const [types ,setTypes]= useState([])
const [values ,setValues] = useState([])
useEffect(() => {
if(messageJson && messageJson.name ){
    if (!types.some((type) => type.name === messageJson.name)) {
        setTypes((prevTypes) => [...prevTypes, messageJson]);
      }
     
      const { name, value } = messageJson;
      if (!values[name]) {
          values[name] = [];
      }
      values[name].push(value);
}
}, [messageJson,types,values]);


const location = useLocation();
const { typeName } = useParams();

return (
    <>
    <div className={style.type}>
            <ul>
            {types.map ((type ,index) => (
                        <li> <Link to={`${location.pathname}/${type.name}`}>{type.name}</Link></li>
 
                      ))}
            </ul>
    </div>
    <div className={style.info}>
    <Routes>
          <Route
            path={`${location.pathname}/:typeName`}
            element={<Info values={values}  />}
          />
        </Routes>
      </div>
    </>
)

}

export default Type;
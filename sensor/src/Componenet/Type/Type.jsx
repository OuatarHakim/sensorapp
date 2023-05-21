import { useEffect, useState } from 'react'
import style  from './Type.module.css'
import Info from '../Information/info'
import { useParams ,useLocation } from 'react-router-dom';
import { Routes,Link ,Route} from 'react-router-dom';
import Home from '../Home';
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

      setValues((prevValues) => {
        const updatedValues = { ...prevValues };
        if (!updatedValues[name]) {
          updatedValues[name] = [];
        }
        updatedValues[name].push(value);
        return updatedValues;
      });
    }
}, [messageJson]);

const formatTypeName = (typeName) => {
    const formattedTypeName = typeName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return formattedTypeName.toLowerCase().replace(/ /g, '_');
  };
const location = useLocation();
const { typeName } = useParams();

return (
    <>
    <div className={style.type}>
            <ul>
            {types.map ((type ,index) => (
                        <li  key={type.name}> <Link to={`${location.pathname}/${formatTypeName(type.name)}`}>{type.name}</Link></li>
 
                      ))}
            </ul>
    </div>
    <div className={style.info}>
    <Routes>
    <Route
        path={`${location.pathname}/:typeName`}

            element={<Info values={values[typeName]} type={typeName} />}
          />
        </Routes>
      </div>
    </>
)

}

export default Type;
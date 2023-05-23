import './Header.module.css';
import monImage from '../../assets/logo_sensor.jpeg';



function Header(){


    return(

<section>
        <div className="header">
              <h1>Stuff Sensor </h1>

<div>
      <img src={monImage} alt="Description de l'image" />
    </div>


            </div>
</section>
          
    );


}


export default Header
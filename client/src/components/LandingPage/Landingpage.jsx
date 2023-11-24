import "./LandingPage.css";
import control2 from './control2.avif'
import {Link} from 'react-router-dom';



const LandingPage= ()=>{
    return (
        <div className="landingPage">
            <h1>GAMING´S CAPSULES</h1>
            <div className="inicio"> 
                <img alt="logoControl" src={control2}></img>
            </div>
            <div >
                <Link to="/home" ><h1>CLICK HERE</h1></Link>
                
            </div>
        </div>
    );
};

export default LandingPage;
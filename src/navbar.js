import {Link , Button } from 'react-scroll';
import { NavLink  } from "react-router-dom";

const Navbar = () => {
    
    return (
      <div className="nav">
         <Link className="homenav" smooth spy to="homeid"offset={-60} >Home</Link>
         <Link className="aboutnav" smooth spy to="aboutid"offset={-60}>About</Link>
         <Link className="contactnav" smooth spy to="contactid"offset={-60}>Contact</Link>
         <NavLink className="resnav" to='/Resume'  style={{ textDecoration: 'none' , color:'rgba(29,37,58,.9)'}} >Resume</NavLink>
      </div>
    );
}
 
export default Navbar;
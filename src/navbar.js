import {Link , Button } from 'react-scroll';
import { NavLink  } from "react-router-dom";

const Navbar = () => {
    
    return (
      <div className="nav">
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <Link className="homenav" smooth spy to="homeid"offset={-60} >Home</Link>
         <Link className="aboutnav" smooth spy to="aboutid"offset={-60}>About</Link>
         <Link className="contactnav" smooth spy to="contactid"offset={-60}>Contact</Link>
         <NavLink className="resnav" to='/Resume'  style={{ textDecoration: 'none' , color:'rgba(29,37,58,.9)'}} >Resume</NavLink>
         <NavLink className="sugnav" to='/Suggestions'  style={{ textDecoration: 'none' , color:'rgba(29,37,58,.9)'}} >Suggestions</NavLink>
      </div>
    );
}
 
export default Navbar;
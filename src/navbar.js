import {Link} from 'react-scroll'

const Navbar = () => {
    
    return (
      <div className="nav">
         <Link className="homenav" smooth spy to="homeid" offset={-60} >Home</Link>
         <Link className="aboutnav" smooth spy to="aboutid"offset={-60}>About</Link>
         <Link className="contactnav" smooth spy to="contactid"offset={-60}>Contact</Link>
      </div>
    );
}
 
export default Navbar;
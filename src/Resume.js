import { NavLink } from 'react-router-dom';
const Resume = () => {
    
    return (
      <div className="Resume">
      <div className="nav2">
         <NavLink classname="nav2home" to="/" style={{ textDecoration: 'none' , color:'rgba(29,37,58,.9)'}} >Home</NavLink>
      </div>
      <img src={require('./Pics/logo.png')} className = "logo2" alt = "logo2" />
      <h1 className="restxt">Resume</h1>
      <div className="respic">
      <img src={require('./Pics/Resume .png')} className = "res" alt = "res" />
      </div>
      </div>
    );
}
 
export default Resume;

const Navbar = () => {
    return ( 
        <div>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn"><span /></label>
        <label htmlFor="active" className="close" />
        <div className="wrapper">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div></div>
     );
}
 
export default Navbar;
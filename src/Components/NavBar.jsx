// imported Link from react router dom to link multiple pages with the
//  navbar so we can easily move between one page to another

import {Link} from "react-router-dom"   
import "../CSS/NavBar.css"          
const NavBar = () => {
  return (
    <nav>
        <Link to="/" >Home</Link>           
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default NavBar

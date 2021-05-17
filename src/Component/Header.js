import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-scroll";

const Header = () => {
    return (
     <div id="home" className="header-wrapper">
        <div className="main-info">
           <h1>Hi Folks! Karthik Bharadwaj here.....</h1>
           <Typed className="typed-text"
            strings={['Welcome to my personal portfolio']}
            typeSpeed={50}
            backSpeed={50}
            loop/>
            
           <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>
        </div>
     </div>
    
   )
}

export default Header

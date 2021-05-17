import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
         <div className="container">
              <a className="navbar-brand" href="#">Resume</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                 <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
              </button>
      
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                         <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                       </li>
                      <li className="nav-item">
                        <Link smooth={true} to="about" offset={-110} className="nav-link" >about me</Link>
                      </li>
                       <li className="nav-item">
                           <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
                       </li>
                       <li className="nav-item">
                          <Link smooth={true} to="experience" offset={-110} className="nav-link" >experience</Link>
                       </li>
                       <li className="nav-item">
                         <Link smooth={true} to="portfolio" offset={-110} className="nav-link" >portfolio</Link>
                       </li>

                       <li className="nav-item">
                         <Link smooth={true} to="contacts" offset={-110} className="nav-link" >contacts</Link>
                      </li>

                    </ul>
               </div>
           </div>
        </nav>
    );
}

export default Navbar

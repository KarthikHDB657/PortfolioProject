import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         <div className="container">
           <a className="navbar-brand" href="#">Resume</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" href="#">Work</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" href="#">Contact</a>
                </li>
               </ul>
            </div>
          </div>
        </nav>
    );
}

export default Navbar

import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
     <div className="header-wrapper">
        <div className="main-info">
           <h1>Hi Folks! Karthik Bharadwaj here.....</h1>
           <Typed className="typed-text"
            strings={['Web Development','Data Engineering &Analytics using PowerBi','Microsoft Power Platform','Selenium using C# in Mstest framework','Playwright Automation']}
            typeSpeed={50}
            backSpeed={50}
            loop/>
            <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
     </div>
    
   )
}

export default Header

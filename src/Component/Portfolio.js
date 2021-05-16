import React from 'react';
import CaseDiary from '../Images/eeee.png';
import Portfolioimage from '../Images/portfolio.PNG';
import Merncrudapp from '../Images/Capture47.PNG';
import PowerBiDashboard from '../Images/Capture94.PNG';
//FontImports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//React popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

     // CaseDiary
  const openPopupboxCaseDiary = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={CaseDiary} alt="Advocate's case diary Project..." />
        <p>Case diary is a powerful software which provides a responsive website to advocate’s to reduce the manual work held by the advocates in his day to day work. They can store data about clients,opponents, case number, previous and next
         hearing date etc. For all this information storage,there is a need of bulk datasets. This will bepossible from web scrapping of website that contains case related information. In this paper,
         design of case diary is proposed and also explained how to retrieve a datasets from target website using web scrapping techniques and
         CAPTCHA bypass tools efficiently. </p>
        <b>Drive:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/1vjZ09G1oIul4LubNnFUUH9XlbBfvGQao/view?usp=sharing")}>https://drive.google.com/file/d/1vjZ09G1oIul4LubNnFUUH9XlbBfvGQao/view?usp=sharing</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCaseDiary = {
    titleBar: {
      enable: true,
      text: "Advocate's case Diary project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

   // Portfolio
   const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Portfolioimage} alt="Portfolio project" />
        <p>This is a Personal Portfolio project developed entirely using react with Javascript using component based approach</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/KarthikHDB657/PortfolioProject")}>https://github.com/KarthikHDB657/PortfolioProject</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Personal Portfolio"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  // Mern Crud App
  const openPopupboxMernCrud= () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Merncrudapp} alt="Mern Crud Application" />
        <p>This is a basic crud app developed using mern stack</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/KarthikHDB657/my-app")}>https://github.com/KarthikHDB657/my-app</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigMernCrud = {
    titleBar: {
      enable: true,
      text: "Mern Crud App"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  // Powerbi projects
  const openPopupboxPowerBi = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={PowerBiDashboard} alt="Portfolio project" />
        <p>This is a Personal Portfolio project developed entirely using react with Javascript using component based approach</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/KarthikHDB657/PowerBi")}>https://github.com/KarthikHDB657/PowerBi</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPowerBi = {
    titleBar: {
      enable: true,
      text: "PowerBi Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
    return (
        <div className="portfolio-wrapper">
          <div className="container">
            <h1 className="text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
              <div className="portfolio-image-box" onClick={openPopupboxCaseDiary}>
                <img className="portfolio-image" src={CaseDiary} alt="Advocate's case diary project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              {/* - */}
              <div className="portfolio-image-box" onClick={openPopupboxPortfolio} >
                <img className="portfolio-image" src={Portfolioimage} alt="Portfolio website" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              {/* - */}
              <div className="portfolio-image-box" onClick={openPopupboxMernCrud}>
                <img className="portfolio-image" src={Merncrudapp} alt="Basic mern crud app" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              {/* - */}
              <div className="portfolio-image-box" onClick={openPopupboxPowerBi}>
                <img className="portfolio-image" src={PowerBiDashboard} alt="Powerbi dashboard and charts" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
            </div>
          </div>
          <PopupboxContainer {...popupboxConfigCaseDiary} />
          <PopupboxContainer {...popupboxConfigPortfolio}/>
          <PopupboxContainer {...popupboxConfigMernCrud}/>
          <PopupboxContainer {...popupboxConfigPowerBi}/>
        </div>
      )
}

export default Portfolio

import React from 'react';
import CaseDiary from '../Images/eeee.png';
import Merncrudapp from '../Images/Capture47.PNG';
import PowerBiDashboard from '../Images/Capture94.PNG';
import Portfolioimage from '../Images/portfolio.PNG'
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
          <img className="portfolio-image-popupbox" src={CaseDiary} alt="CaseDiary Clone Project..." />
          <p>Case diary is a powerful software which provides a responsive website to advocate’s to reduce the manual work held by the advocates in his day to day work. They can store data about clients,opponents, case number, previous and next
         hearing date etc. For all this information storage,there is a need of bulk datasets. This will bepossible from web scrapping of website that contains case related information. In this paper,
         design of case diary is proposed and also explained how to retrieve a datasets from target website using web scrapping techniques and
         CAPTCHA bypass tools efficiently.</p>
          <b>Drive:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/1vjZ09G1oIul4LubNnFUUH9XlbBfvGQao/view?usp=sharing")}>https://drive.google.com/file/d/1vjZ09G1oIul4LubNnFUUH9XlbBfvGQao/view?usp=sharing</a>
        </>
      )
      PopupboxManager.open({ content })
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Advocate's Case Diary",
          },
        },
      });
    }
  
    const popupboxConfigCaseDiary = {
      titleBar: {
        enable: true,
        text: "CaseDiary clone project."
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  
    // Portfoli App
    const openPopupboxPortfolioimage = () => {
      const content = (
        <>
          <img className="portfolio-image-popupbox" src={Portfolioimage} alt="Personal Portfoli0 Project..." />
          <p>This is a Personal Merncrudapp project developed entirely using react with Javascript using component based approach.</p>
          <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/KarthikHDB657/PortfolioProject", "_blank")}>https://github.com/KarthikHDB657/PortfolioProject</a>
        </>
      )
      PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Personal Portfolio",
          },
        },
      });
    }
  
    const popupboxConfigPortfolioimage = {
      titleBar: {
        enable: true,
        text: "Portfolio project."
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  
    // Merncrudapp Project
    const openPopupboxMerncrudapp = () => {
      const content = (
        <>
          <img className="portfolio-image-popupbox" src={Merncrudapp} alt="Merncrudapp Project..." />
          <p>This is a basic crud app developed using mern stack.</p>
          <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/KarthikHDB657/my-app", "_blank")}>https://github.com/KarthikHDB657/my-app</a>
        </>
      )
      PopupboxManager.open({ content })
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Mern Crud App",
          },
        },
      });
    }
  
    const popupboxConfigMerncrudapp = {
      titleBar: {
        enable: true,
        text: "Mern CrudApp project."
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  
    // Task Manager React and Redux Project
    const openPopupboxPowerBiDashboard = () => {
      const content = (
        <>
          <img className="portfolio-image-popupbox" src={PowerBiDashboard} alt="Task Manager React and Redux Project..." />
          <p>Set of powerbi dashboards and charts </p>
          <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/KarthikHDB657/PowerBi", "_blank")}>https://github.com/8020Coding/task-manager</a>
        </>
      )
      PopupboxManager.open({ content })
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "PowerBi Project ",
          },
        },
      });
    }
  
    const popupboxConfigPowerBiDashboard = {
      titleBar: {
        enable: true,
        text: "PowerBi project."
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  
  
    return (
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">Portfolio</h1>
          <div className="image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box" onClick={openPopupboxCaseDiary}>
              <img className="portfolio-image" src={CaseDiary} alt="CaseDiary Clone Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box" onClick={openPopupboxPortfolioimage}>
              <img className="portfolio-image" src={Portfolioimage} alt="City Guide Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box" onClick={openPopupboxMerncrudapp}>
              <img className="portfolio-image" src={Merncrudapp} alt="Merncrudapp React and Material UI Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box" onClick={openPopupboxPowerBiDashboard}>
              <img className="portfolio-image" src={PowerBiDashboard} alt="Task Manager React and Redux Project..." />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
        </div>
        <PopupboxContainer {...popupboxConfigCaseDiary} />
        <PopupboxContainer {...popupboxConfigPortfolioimage} />
        <PopupboxContainer {...popupboxConfigMerncrudapp} />
        <PopupboxContainer {...popupboxConfigPowerBiDashboard} />
      </div>
    )
  }
  
  export default Portfolio;

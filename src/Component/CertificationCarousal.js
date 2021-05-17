import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../Images/hackerrank.PNG";
import avatar2 from "../Images/MB-200.PNG";
import avatar3 from "../Images/Powerbi.PNG";
import avatar4 from "../Images/Salesforce.PNG";


const CertificationCarousal= () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="Hacker Rank"  sizes="lg"/>
        <div className="myCarousel">
          <h3>HackerRank Certification</h3>
          <p>Completed Basic Java Certification from hackerrank <a className="hyper-link" onClick={() => window.open("https://www.hackerrank.com/certificates/e787222ac8a8", "_blank")}>see credential Here</a></p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe 2"  sizes="lg"/>
        <div className="myCarousel">
          <h3>MB-200 Microsoft Power Platform + Dynamics 365 Core</h3>
          <p>Completed MB-200 certification from Microsoft <a className="hyper-link" onClick={() => window.open("https://www.youracclaim.com/badges/022bfcb1-b10f-4461-bcad-e1003c827f92?source=linked_in_profile", "_blank")}>see credential Here</a> </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" sizes="lg" />
        <div className="myCarousel">
          <h3>PowerBI Certification</h3>
          <p>Completed PowerBI Certification from Udemy<a className="hyper-link" onClick={() => window.open("https://www.udemy.com/certificate/UC-a8e24eb4-3b64-4f78-9e9a-bac908f27974/", "_blank")}>see credential Here</a> </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe 4" sizes="lg"/>
        <div className="myCarousel">
          <h3>Salesforce Profile</h3>
          <p>Completed one superbadge and achieved ranger badge from Salesforce <a className="hyper-link" onClick={() => window.open("https://trailblazer.me/id/kbharadwajhd", "_blank")}>see credential Here</a></p>
        </div>
      </>
    </Carousel>
  )
}

export default CertificationCarousal;

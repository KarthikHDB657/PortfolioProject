import React from "react";
import CertificationCarousel from "./CertificationCarousal";

const Certification = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h1>Certifications</h1>
      <div className="container">
        <div className="testimonials-content">
          <CertificationCarousel/>
        </div>
      </div>
    </div>
  )
}

export default Certification;

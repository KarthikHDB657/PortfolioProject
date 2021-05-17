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
        <img src={avatar1} alt="John Doe 1"  sizes="lg"/>
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe 2"  sizes="lg"/>
        <div className="myCarousel">
          <h3>Jane Doe 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" sizes="lg" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe 4" sizes="lg"/>
        <div className="myCarousel">
          <h3>John Doe 4</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
    </Carousel>
  )
}

export default CertificationCarousal;

import React from 'react';
import author from '../Images/Aboutme.JPG';

const Aboutme = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                   <div className="photo-wrap mb-5">
                     <img className="profile-img" src={author} alt="img"/>
                   </div>
                   
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>To utilize my technical skills for achieving the target and developing the best performance in the 
                     organization. I would like to implement my innovative ideas ,skills and creativity for accomplishing the 
                     project. </p>
                </div>
            </div>
            
        </div>
    )
}

export default Aboutme

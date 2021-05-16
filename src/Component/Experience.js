import React from 'react';
import Button from 'react-bootstrap/Button'

function Experience() {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
              <h1>Work Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Jun 2019 - Jan-2020</h3>
                            <p>Worked as a functional consultant in Dynamics365</p>
                            <p>Company Name:Tata Consultancy Services</p>
                            <p>Tools and Technology used:<Button variant="warning" size="sm">Microsoft Dynamics365 Functional</Button>
                            {' '}
                            <Button variant="warning" size="sm">JavaScript</Button>
                            {' '}
                            <Button variant="warning" size="sm">SQL</Button></p>
                        </div>
                    
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Jan 2020 - Jun 2020</h3>
                            <p>Worked as a IT Analyst</p>
                            <p>Company Name:Tata Consultancy Services</p>
                            <p>Tools and Technology used:<Button variant="warning" size="sm">Power BI</Button>
                            {' '}
                            <Button variant="warning" size="sm">SSMS</Button>
                            {' '}
                            <Button variant="warning" size="sm">Azure Data lake</Button></p>
                        </div>
                    
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Jun 2020 - May 2021</h3>
                            <p>Worked as a Automation Test Engineer in Dynamics 365</p>
                            <p>Company Name:Tata Consultancy Services</p>
                            <p>Tools and Technology used:<Button variant="warning" size="sm">selenium</Button>
                            {' '}
                            <Button variant="warning" size="sm">SSMS</Button>
                            {' '}
                            <Button variant="warning" size="sm">Playwright Framework</Button>
                            {' '}
                            <Button variant="warning" size="sm">Nodejs</Button>
                            {' '}
                            <Button variant="warning" size="sm">Mstest Framework</Button>
                            {' '}
                            <Button variant="warning" size="sm">C# Language</Button></p>
                        </div>
                    </div>

            </div>

            
            
        </div>
    )
}

export default Experience

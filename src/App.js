import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header"
import Particles from 'react-particles-js';
import Aboutme from './Component/Aboutme';
import Services from './Component/Services';
import Experience from './Component/Experience';
import Portfolio from './Component/Portfolio';
import Certifications from './Component/Certification';
import Contacts from "./Component/Contacts";
import Footer from "./Component/Footer"

function App() {
  return (
    <>
     <Particles className="tsparticles-canvas-el"
                params={{
                    particles: {
                       number:{
                         value:30,
                         density:{
                           enable:true,
                           value_area:900
                         }
                       },
                       shape:{
                         type:"polygon",
                         stroke:{
                           width:6,
                           color:"#ffa500"

                         }
                       }
                        }
                }} />
    <Navbar/>
    <Header/>
    <Aboutme/>
    <Services/>
    <Experience/>
    <Portfolio/>
    <Certifications/>
    <Contacts/>
    <Footer/>

  </>
  );
}

export default App;

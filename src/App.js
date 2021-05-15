import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header"
import Particles from 'react-particles-js';
import Aboutme from './Component/Aboutme';

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
  </>
  );
}

export default App;

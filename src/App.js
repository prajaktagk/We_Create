import React from "react";
import './App.css';
import Mainheader from "./components/Mainheader.js";
import Home from "./components/Home.js";
import Coursenumber from "./components/Coursenumber.js" ;
import Addcourse from "./components/Addcourse.js";
import {Container,Col,Row} from "reactstrap";
import {ToastContainer} from "react-toastify";
import Menus from "./components/Menus.js";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact";
import Aboutcourse from "./components/Aboutcourse";


function App() {
  return (
     <div style={{background:"repeating-conic-gradient(white,blue,black)"}} >
  
    <Router>
    <ToastContainer/>
      <Container>
      <Mainheader/><hr/>
         <Row>
           <Col md='3'>
             <Menus/>
           </Col>
           <Col md='9'>
            <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/courses" element={<Coursenumber/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/addcourse" element={<Addcourse/>} />
             <Route path="/aboutcourse" element={<Aboutcourse/>} />
             
            </Routes>
           </Col>
         </Row>
      </Container> 
    </Router>
   
      
     </div>
  
   
  );
}

export default App;

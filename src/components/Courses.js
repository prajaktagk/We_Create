import React from "react";
import {Button,Container} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Courses =({props})=> {

    const navigate = useNavigate();

    const fform =()=>{
        navigate ("/addcourse");
    }


    const about =()=>{
        navigate ("/aboutcourse");
    }

    return(
        <div style={{height:100 ,width:450,marginLeft:320}}>
          
            <h4>{props.num} Course</h4>
            <Container>
             <Button color="light" onClick={()=>fform()}>Admission Form</Button>
            <Button color="warning ml-3" onClick={()=>about()}>About Course</Button>
            </Container>

                 
        </div>
                
      
    );
};

export default Courses;

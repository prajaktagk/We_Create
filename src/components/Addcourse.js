import React from "react";
import {Button,Row,Col} from "reactstrap";
import {Link} from "react-router-dom";
import {List } from "reactstrap";


const Addcourse=()=>{

    return(
        <div>
            <p style={{marginLeft:400,marginTop:30,color:"blue"}}>
                 <b>Please Fill the Admission Form</b> 
            </p>

        <List>
           < Link className="list-group-item "  to="/addcourse" ></Link>
        </List>    
        

        <form style={{height:400 , width:400,marginLeft:300}}>
            <Row>
             <Col md="4">
            <label><h6> Name:<span style={{color:"red"}}>*</span> </h6></label>
            <br/>
            <input type="text" name="name" />
            <hr/>
            <label><h6>  Address: </h6></label>
            <br/>
            <input type="text" name="add" />
            <hr/>
            <label><h6> Phone Number:<span style={{color:"red"}}>*</span> </h6></label>
            <br/>
            <input type="phone number" name="num" />
            <hr/>
            </Col>
            <Col md="4" style={{marginLeft:100}}>
            <label><h6> Email Id:<span style={{color:"red"}}>*</span> </h6></label>
            <br/>
            <input type="email" name="id" />
            <hr/>
            <label><h6> Payment:<span style={{color:"red"}}>*</span> </h6></label>
            <br/>
            <input type="payment" name="pay" />
            <hr/><br/>
            <label><h6> Course Type:<span style={{color:"red"}}>*</span> </h6>
           
                <select>
                    <option value="basic">Basic Course</option>
                    <option value="advanced">Advanced Course</option>
                    <option value="intern">Internship</option>
                </select>
                
            </label>
            <hr/>
            </Col>
            </Row>
            <Button color="success"  style={{marginLeft:160}} >Submit Form</Button>
            <hr/>   
            
        </form>
       
        </div>
    );
};

export default Addcourse;
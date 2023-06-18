import React from "react";
import {Link} from "react-router-dom";
import {List} from "reactstrap";

function Contact () {
    return (

        <div>
            <h4 style={{width:400,height:600,marginLeft:320 ,padding:30}}>
                You can Contact us in Following ways!!!!!!<br/><br/>
                Contact Number: <h3 style={{color:"white"}}><b><u> 9568******</u></b></h3>
                 <hr/>
               Contact Email Id: <h3 style={{color:"white"}}>ax****@gmail.com</h3>
                 <hr/>
                <h3 style={{color:"yellow"}}>Thank You !!!!</h3>
            </h4>

        <List>
            <Link to="/contact"></Link>
        </List>
        </div>
    );
}


export default Contact;
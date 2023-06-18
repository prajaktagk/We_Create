import React from "react";
import {List} from "reactstrap";
import {Link} from "react-router-dom";


function Aboutcourse() {

    return(

        

        <div style={{marginLeft:300, height:600}}>
            <List>
                 <Link to="/aboutcourse"></Link>
            </List>
            <h2 style={{color:"brown"}}>Welcome to Course Information</h2>
            <br/><hr/>
            <List> <h5>
                <li>The Syllabus depends on which course_type you has selsected</li><br/>
                <li>The course duration is 4 months </li><br/>
                <li>3 months for teaching and last month is for project(basic and Live)</li><br/>
                <li>Printed and soft copy of Notes are available when topic is clear</li><br/>
                <li>Fee structure is You have to pay 50% amount at the time of admission and 
                    30% amount before the projects starts , final 20% amount pay after you get placed</li><br/>
                <li>Fee--:<b>30,000/-</b></li>
                </h5>
            </List>

        </div>

       
    )
}

export default Aboutcourse;
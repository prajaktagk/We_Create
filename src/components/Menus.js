import React from "react";
import {List } from "reactstrap";
import {Link} from "react-router-dom";

function Menus() {
    return(
        <List style={{color:"white"}}>
           < Link className="list-group-item " to="/" ><h1>Home</h1></Link><hr/>
           < Link className="list-group-item " to="/courses"><h1>Courses</h1></Link><hr/>
           < Link className="list-group-item " to="/about"><h1>About Us</h1></Link><hr/>
           < Link className="list-group-item " to="/contact"><h1>Contact</h1></Link>

        </List>

    );
}

export default Menus;
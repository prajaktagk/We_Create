import React from "react";
import {Container ,Button,List} from "reactstrap";
import {Link,useNavigate} from "react-router-dom";

const Home =()=> {

    const navigate = useNavigate();

    const to=()=>{
        navigate ("/courses");
    }

    return(
        <div style={{height:600 , width:400,marginLeft:300,marginTop:50}}>
            <>
                <h1 className="display-6"><u><b>Learn Code with Fun!!!</b></u></h1><hr/>
                <h3>This is "Fun With Coding" Class</h3>
                <h5>You can learn coding with Live projects </h5>
                <Container>
                    <Button color="light" outline onClick={()=>to()} >Start Coading Class</Button>
                </Container>
            </>
            <hr/>

         <List>
            <Link to="/courses"></Link>
         </List>

        </div>
    );
};

export default Home;
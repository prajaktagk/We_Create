import React from "react";
import {Button} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function Header() {
    
    const btn = ()=> {
        toast("Welcome to new techniques!!!!");
        toast.success('HAPPY*** ',{
            position:"top-center"});
        toast.warn("Dont do this>>>");
        toast.error("not successful");
        toast.info("you are in tostifier");
        

    };

    return(
        <div>
           <ToastContainer/>
                <Button color="info" outline onClick={btn}>Click me</Button>
            
        </div>
    );
}

export default Header;
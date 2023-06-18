import React, { useState } from "react";
import Courses from "./Courses";

const Coursenumber=()=> {
    
        const [courses,setCourses] = useState([ 
            {id:1 ,num:"JavaScript"},
            {id:2 ,num:"Java"},
            {id:3 ,num:"Python"},
            {id:4 ,num:"React js"},
            {id:5 ,num:"Angular"}
        
        ]);

        return(
           <div>
                { 
                     courses.length>0? courses.map((item) => <Courses props={item} />) : "NO Course"
                }
           
           
            </div>
        );
        
};

export default Coursenumber;
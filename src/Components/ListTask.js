import React from "react";
import Task from './Task'
import {useSelector} from "react-redux";


function ListTask (){


   

    const  tasks  = useSelector ( state => state  )
    console.log(tasks)

    return(
        <>
         
          {tasks.map((elt,index)=>(<Task key={index} task ={elt}/>))}
        


</>
        
      

        
    )
}

export default  ListTask  





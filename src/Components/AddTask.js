
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../redux/actions";




const  TaskAdding  = ()=>  {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({id:10,description:"",done:false});
  const handleChange=(event)=>{
  setNewTodo({...newTodo,id: Math.floor(Math.random() * 10000) + 1,
    [event.target.id]: event.target.value});
  }
    
  const onSubmit=(event)=>{
   event.preventDefault()
   dispatch(AddTask(newTodo));
   setNewTodo({id:10,description:"",done:false})
  }
  return (
    <form  onSubmit = { onSubmit }>
      <input  placeholder="WRITE NEW TASK" value={newTodo.description} onChange={handleChange} id="description" type="text" />
      <button type="submit"> ADD TASK</button>
    </form>
  )
}




export  default  TaskAdding ;
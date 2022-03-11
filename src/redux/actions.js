



export const AddTask = (newTodo) =>{
    return   {type : "AddTask" ,payload:newTodo}
  }

  export const deleteTask = (id) => {
    return { type: "delete", payload: id };
  } ;
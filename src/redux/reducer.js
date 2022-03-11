const initState=[{id:0,description:'THIS IS FIRT TASK',done:false}]
const Reducer = (state = initState,action) => {
    switch (action.type) {
      case "AddTask":
        return [...state,action.payload];
      
       default:
        return state;
    }
  };



  
  export default  Reducer;
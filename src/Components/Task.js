import React from "react";
import { Button,Card} from 'react-bootstrap';

function Task({task}){
   
  
  return(
      <Card style={{ width: '18rem',margin:'auto' }}>
      <Card.Body>
        <Card.Text>
          {task.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

export  default  Task ;
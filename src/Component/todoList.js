import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const TodoList = ({tasks , removeTask , startEdit , toggleTodoStatus}) => {
  return (
    <>
      <ListGroup className="d-flex justify-content-center">
      {tasks.map((item , index) =>{
        return(
          <ListGroup.Item className="mx-auto mt-2 shadow-sm border-0" key={index}>
          <span>{item.title}</span>
          <Button variant="danger" className="float-right ms-3" onClick={() => {startEdit(index , item.title); toggleTodoStatus(item.id , item.completed)}}>
            Edit
          </Button>
          <Button variant="danger" className="float-right ms-3" onClick={() => removeTask(item.id)}>
            Delete
          </Button>
        
        </ListGroup.Item>
        )
      })}
     
      </ListGroup>
    </>
  );
};

export default TodoList;

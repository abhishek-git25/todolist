import React from "react";
import { FormControl, Button, Row, Col } from "react-bootstrap";

const TodoForm = ({ setNewTask, newTask, addTask, saveEdit , editTask}) => {

  // reciving all the required data here using props
  return (
    <>
      <div className="w-100 mt-2 mb-2">
        <Row>
          <Col lg={8} className="d-flex mx-auto">
            <FormControl
              type="text"
              placeholder="Add a new task"
              className="w-100"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
          </Col>
          <Col lg={12}>
          {/* add and save button rendering here conditionally */}
            {editTask ? (
              <Button
                variant="btn btn-outline-primary d-flex mx-auto mt-2"
                onClick={() => saveEdit()}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="btn btn-outline-primary d-flex mx-auto mt-2"
                onClick={() => addTask()}
              >
                Add
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TodoForm;

import React, { useEffect, useState } from "react";
import TodoForm from "../Component/todoForm";
import TodoList from "../Component/todoList";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const Landingpage = () => {
  // landing page
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, seteditIndex] = useState();
  const [editTask, setEditTask] = useState();

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  // api call to get all the todos
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  // api call and state login to add todos
  const addTask = () => {
    axios
      .post(API_URL, { title: newTask, completed: false })
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  // api call to remove todos

  const removeTask = (index) => {
    axios
      .delete(`${API_URL}/${index}`)
      .then(() => {
        setTasks(tasks.filter((todo) => todo.id !== index));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  // api call to toggle todo status

  const toggleTodoStatus = (id, completed) => {
    axios
      .put(`${API_URL}/${id}`, { completed: !completed })
      .then((response) => {
        const updatedTodos = tasks.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !completed };
          }
          return todo;
        });
        setTasks(updatedTodos);
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  // logic to edit todo list

  const startEdit = (index, task) => {
    setEditTask(task);
    seteditIndex(index);
    setNewTask(task);
  };

  // logic to save edited data

  const saveEdit = () => {
    console.log(editIndex, "31");
    if (editTask) {
      const updatedTask = [...tasks];
      updatedTask[editIndex] = newTask;
      console.log(updatedTask);
      setTasks(updatedTask);
      seteditIndex(null);
      setEditTask(null);
      setNewTask("");
    }
  };

  return (
    <Container>
      <Row className="w-100">
        <Col lg={12}>
          {/* todo form component */}
          <TodoForm
            addTask={addTask}
            newTask={newTask}
            setNewTask={setNewTask}
            saveEdit={saveEdit}
            editIndex={editIndex}
            editTask={editTask}
          />
        </Col>
        <Col lg={12}>
          {/* todo list component */}
          <TodoList
            tasks={tasks}
            removeTask={removeTask}
            startEdit={startEdit}
            toggleTodoStatus={toggleTodoStatus}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Landingpage;

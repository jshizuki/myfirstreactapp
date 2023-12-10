// import logo from './logo.svg';
import "./App.css";

import React, { useState } from "react";

// 1st challenge
import Button from "./first_challenge/Button";
// 2nd challenge
import PersonalPizza from "./second_challenge/PersonalPizza";
// 3rd challenge
import EditProfile from "./third_challenge/EditProfile";
// 4th challenge
import NewTask from "./fourth_challenge/NewTask";
import TasksList from "./fourth_challenge/TasksList";

function App() {
  const [newTask, setNewTask] = useState({title: "", description: ""});

  const handleChange = ({ target }) => {
    // Add new task into the object
    const { name, value } = target;
    setNewTask((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [allTasks, setAllTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTasks((prev) => {
      return [newTask, ...prev];
    });
  };

  const handleDelete = (idToRemove) => {
    // Use the filter method to delete/remove items
    setAllTasks((prev) => {
      return prev.filter((taskObject) => taskObject !== prev[idToRemove]);
    });
  };

  return (
    <div className="container">
      <Button />
      <PersonalPizza />
      <EditProfile />
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

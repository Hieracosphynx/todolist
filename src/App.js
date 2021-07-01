import React, { useState } from 'react';
import ToDoTasks from './components/ToDoTasks/ToDoTasks';
import NewToDo from './components/NewToDo/NewToDo';
import './App.css';

const App = () => {
  const [toDoTasks, setToDoTasks] = useState([
    {
      id: 1,
      task: 'MyFirstTask',
    },
    {
      id: 2,
      task: 'MySecondTask',
    },
  ]);

  const addTaskHandler = (task) => {
    setToDoTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  return (
    <div>
      <ToDoTasks values={toDoTasks} />
      <NewToDo addTask={addTaskHandler} />
    </div>
  );
};

export default App;

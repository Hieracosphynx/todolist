import React, { useState, useContext } from 'react';
import ToDoTasks from './components/ToDoTasks/ToDoTasks';
import NewToDo from './components/NewToDo/NewToDo';
import LogIn from './components/LogIn/LogIn';
import NavBar from './components/NavBar/NavBar';
import AuthContext from './context/auth-context';

import './App.css';

const App = () => {
  const [toDoTasks, setToDoTasks] = useState([]);

  const authCtx = useContext(AuthContext);

  const addTaskHandler = (task) => {
    setToDoTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };
  return (
    <>
      <NavBar />
      {authCtx.isLoggedIn && (
        <>
          <NewToDo addTask={addTaskHandler} />
          <ToDoTasks values={toDoTasks} />
        </>
      )}
      {!authCtx.isLoggedIn && <LogIn />}
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import ToDoTasks from './components/ToDoTasks/ToDoTasks';
import NewToDo from './components/NewToDo/NewToDo';
import LogIn from './components/LogIn/LogIn';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [toDoTasks, setToDoTasks] = useState([]);

  const addTaskHandler = (task) => {
    setToDoTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  useEffect(() => {
    if (localStorage.getItem('LOGGED_IN') === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const LogInHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem('LOGGED_IN', '1');
  };

  const logOutHandler = () => {
    localStorage.removeItem('LOGGED_IN');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn && (
        <>
          <button type='button' onClick={logOutHandler}>
            LogOut
          </button>
          <NewToDo addTask={addTaskHandler} />
          <ToDoTasks values={toDoTasks} />
        </>
      )}
      {!isLoggedIn && <LogIn onLogIn={LogInHandler} />}
    </div>
  );
};

export default App;

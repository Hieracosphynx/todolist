import React, { useState, useEffect } from 'react';
import ToDoTasks from './components/ToDoTasks/ToDoTasks';
import NewToDo from './components/NewToDo/NewToDo';
import LogIn from './components/LogIn/LogIn';
import NavBar from './components/NavBar/NavBar';
import AuthContext from './context/auth-context';

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
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <NavBar logOut={logOutHandler} />
      {isLoggedIn && (
        <>
          <NewToDo addTask={addTaskHandler} />
          <ToDoTasks values={toDoTasks} />
        </>
      )}
      {!isLoggedIn && <LogIn onLogIn={LogInHandler} />}
    </AuthContext.Provider>
  );
};

export default App;

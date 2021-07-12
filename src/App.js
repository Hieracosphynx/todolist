import React, { useState, useContext, useEffect } from 'react';
import ToDoTasks from './components/ToDoTasks/ToDoTasks';
import NewToDo from './components/NewToDo/NewToDo';
import LogIn from './components/LogIn/LogIn';
import NavBar from './components/NavBar/NavBar';
import AuthContext from './context/auth-context';

import './App.css';

const App = () => {
  const [showElement, setShowElement] = useState();
  const [toDoTasks, setToDoTasks] = useState([]);

  const authCtx = useContext(AuthContext);

  const { isLoggedIn: loggedIn } = authCtx;

  const addTaskHandler = (task) => {
    setToDoTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  const showElementHandler = () => {
    setShowElement(true);
  };

  useEffect(() => {
    if (showElement) {
      const timer = setTimeout(() => {
        setShowElement(false);
      }, 300);
    }

    return () => {};
  }, [showElement]);

  return (
    <>
      <NavBar />
      <button onClick={showElementHandler}>Click Me!</button>
      {showElement && <p>dfdfdf</p>}
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

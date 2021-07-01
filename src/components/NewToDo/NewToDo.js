import React, { useState } from 'react';
import NewToDoForm from './NewToDoForm';

const NewToDo = (props) => {
  const saveTaskHandler = (task) => {
    const newTask = {
      id: Math.random().toString(),
      task: task,
    };

    props.addTask(newTask);
  };
  return <NewToDoForm saveTask={saveTaskHandler} />;
};

export default NewToDo;

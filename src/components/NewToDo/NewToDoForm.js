import React, { useState } from 'react';

const NewToDoForm = (props) => {
  const [task, setTask] = useState('');

  const taskHandler = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    props.saveTask(task);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <label>Task</label>
        <input type='text' onChange={taskHandler} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default NewToDoForm;

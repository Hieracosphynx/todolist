import React, { useState } from 'react';

const NewToDoForm = (props) => {
  const [task, setTask] = useState('');

  const taskHandler = (e) => {
    setTask(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    props.saveTask(task);
    setTask('');
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <label>Task</label>
        <input type='text' value={task} onChange={taskHandler} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default NewToDoForm;

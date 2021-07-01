import './ToDoTasks.css';

const ToDoTasks = (props) => {
  const showToDoTasks = props.values.map((prop) => {
    return <li key={prop.id}>{prop.task}</li>;
  });

  return (
    <div className='todo-list__container'>
      <div className='todo-list__controls'>
        <div className='todo-list__control'>
          <label>Task</label>
          <ul>{showToDoTasks}</ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoTasks;

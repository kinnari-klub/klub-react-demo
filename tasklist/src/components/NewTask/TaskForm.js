import { useRef, useState } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const [taskName, setTaskName] = useState('');
  const taskInputRef = useRef();

  const taskNameHandler = (event) => {
    setTaskName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskName;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
      setTaskName('');
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' value={taskName} onChange={taskNameHandler} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;

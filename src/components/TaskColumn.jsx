import React from 'react'
import './TaskColumn.css'
import TaskCard from './taskCard';

const TaskColumn = ({taskCategory,icon}) => {
  return (
    <section  className='task_column'>
        <h2 className='task_column_heading'>
        <img className='task_column_icon' src={icon} alt="" />{taskCategory}</h2>
        <TaskCard/>
    </section>
  );
};

export default TaskColumn;
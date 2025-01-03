import React from 'react'
import "./Taskform.css"
const Taskform = () => {
  return (
    <header className='app_header'>
        <form>
            <input type='text' className='task_input' placeholder='Enter your task name'></input>
            <div className='task_form_bottom_line'>
            <div>
            <button className='tag'> Urgent</button>
            <button className='tag'> Important</button>
            <button className='tag'> morning </button>
            <button className='tag'> Evening</button>
            </div>
            <div>
            <select className='task_status'>
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">done</option>
            </select>
            <button className='task_submit' type='submit'>+ Add task</button>
            </div>
            </div>
        </form>
    </header>
  );
};

export default Taskform;

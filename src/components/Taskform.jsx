import React from 'react'
import Tag from './Tag.jsx'
import "./Taskform.css"
const Taskform = () => {
  return (
    <header className='app_header'>
        <form>
            <input type='text' className='task_input' placeholder='Enter your task name'></input>
            <div className='task_form_bottom_line'>
            <div>
            <Tag tagName='Urgent'/>
            <Tag tagName='Important'/>
            <Tag tagName='Morning'/>
            <Tag tagName='Evening'/>
            </div>
            <div>
            <select className='task_status'>
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">done</option>
            </select>
            <button className='task_submit' type='submit'>Add task</button>
            </div>
            </div>
        </form>
    </header>
  );
};

export default Taskform;

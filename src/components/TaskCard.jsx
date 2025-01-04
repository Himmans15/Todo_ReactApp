import React from 'react'
import "./taskCard.css"
import Tag from './Tag';
import deleteicon from '../assets/delete.png'

const TaskCard = () => {
  return (
    <article className='task_card'>
        <p className='task_text'>This is Sample Text</p>
        <div className='task_card_bottom_line'>
        <div  className='task_card_tags'>
            <Tag tagName='Urgent'/>
        </div>
        <div className='task_delete'>
            <img src={deleteicon} className='delete_icon' alt='' />
        </div>
        </div>
    </article>
  );
};

export default TaskCard;
import React,{useState} from 'react';
import Tag from './Tag.jsx';
import "./Taskform.css";
import { useActionState } from 'react';
const Taskform = ({setTasks}) => {
  const [taskData,setTaskData]=useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const checkTag = (tag) =>{
    return taskData.tags.some(item => item===tag);
  }
  const selectTag = (tag) =>{
    if(taskData.tags.some(item => item===tag)){
      const filtertags=taskData.tags.filter(item => item!==tag);
      setTaskData(prev => {
        return {...prev,tags:filtertags}
      });
    } else {
      setTaskData(prev => {
        return {...prev,tags:[...prev.tags,tag]};
      });
    };
  };
  //instead making two fuction for handling task,change we make onefunction one for set both values
  const handleChange = (e) =>{
    const {name,value}=e.target;
    setTaskData(prev =>{
      return {...prev,[name]:value}
    });
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(taskData);
    setTasks(prev =>{
      return [...prev,taskData]
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    })
  };
  // const [task,setTask]=useState("");
  // const [status, setStatus] = useState("todo")
  // const handleTaskChange = (e) =>{
  //   setTask(e.target.value);
  // }
  // const handleStatus = (e) =>{
  //   setStatus(e.target.value);
  // }
  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type='text' name="task" 
            value={taskData.task}
            className='task_input' placeholder='Enter your task name' onChange={handleChange}
            />
            <div className='task_form_bottom_line'>
            <div>
            <Tag tagName='Urgent' selectTag={selectTag} selected={checkTag("Urgent")}/>
            <Tag tagName='Important' selectTag={selectTag} selected={checkTag("Important")}/>
            <Tag tagName='Morning' selectTag={selectTag} selected={checkTag("Morning")}/>
            <Tag tagName='Evening' selectTag={selectTag} selected={checkTag("Evening")}/>
            </div>
            <div>
            <select name="status" value={taskData.status}
            className='task_status' onChange={handleChange}>
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

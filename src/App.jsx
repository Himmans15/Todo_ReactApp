import React,{useState} from 'react'
import "./App.css"
import Taskform from './components/Taskform';
import TaskColumn from './components/TaskColumn';
import todoicon from './assets/direct-hit.png'
import doingicon from './assets/glowing-star.png'
import doneicon from './assets/check-mark-button.png'

const oldTasks= localStorage.getItem("tasks");
const App = () => {
  const [tasks, setTasks] = useState([])
  const handleDelete = (taskIndex) =>{
    const newTasks =tasks.filter((task,index)=> index!==taskIndex);
    setTasks(newTasks);
  }
  return (
    <div className='app'>
      <Taskform setTasks={setTasks}/>
      <main className='app_main'>
      <TaskColumn taskCategory='To_do' icon={todoicon} tasks={tasks} status="todo"  handleDelete={handleDelete}/>
      <TaskColumn taskCategory='Doing' icon={doingicon} tasks={tasks} status="doing" handleDelete={handleDelete}/>
      <TaskColumn taskCategory='Done' icon={doneicon} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App;

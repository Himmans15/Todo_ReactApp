import React from 'react'
import "./App.css"
import Taskform from './components/Taskform';
import TaskColumn from './components/TaskColumn';
import todoicon from './assets/direct-hit.png'
import doingicon from './assets/glowing-star.png'
import doneicon from './assets/check-mark-button.png'
const App = () => {
  return (
    <div className='app'>
      <Taskform></Taskform>
      <main className='app_main'>
      <TaskColumn taskCategory='To_do' icon={todoicon} />
      <TaskColumn taskCategory='Doing' icon={doingicon}/>
      <TaskColumn taskCategory='Done' icon={doneicon}/>
      </main>
    </div>
  );
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

export const TodoList = ({taskList, setTaskList}) => {

  const handleDone = (id) => {
    setTaskList(
      taskList.map((task) => {
        if(id === task.id) {
          return {
            ...task,completed: !task.completed,
          };
        }
        return task;
      })
    )
  }

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <div className='todoList'>
      <div className='todos'>
      {taskList.map((task, index) => (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
          <div className='icons'>
            <button 
              className='done'
              onClick={() => handleDone(task.id)}
            >
              {/* <VscCheck className='i'/> */}
              OK
            </button>
            <button className='trash' onClick={() => handleDelete(task.id)}>
              {/* <VscArchive className='i'/> */}
              D
            </button>
            </div>
          </div>
        ))}
      </div>
      <button className='logoutBtn'>
        <Link to="/" className='logout'>LOGOUT</Link>
      </button>
    </div>
  );
};

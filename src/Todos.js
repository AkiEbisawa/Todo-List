import './Todos.css';
import { useState } from "react";
import { InputForm } from './components/InputForm';
import  { Title }  from './components/Title';
import { TodoList } from './components/TodoList';

function Todos() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="body">
      <div className='container form-style'>
        <Title />
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default Todos;

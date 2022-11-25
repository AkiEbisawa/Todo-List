import React from 'react'
import { useState } from "react";
// import { VscSmiley } from "react-icons/vsc";

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }

  setTaskList([
    ...taskList,
    {
      id: taskList.length,
      text: inputText,
      completed: false,
    },
  ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='inputForm'>
      <form onSubmit={addTask}>
        <input
          className='add-todo'
          type="text"
          onChange={handleChange}
          value={inputText}
          placeholder='Enter your plan...'
        />
          {/* <button onClick={addTask} className="smile">
            <VscSmiley />
          </button> */}
      </form>
    </div>
  )
}
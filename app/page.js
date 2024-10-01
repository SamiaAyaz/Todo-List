"use client"
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler =(e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {task}])
    setTask("")
    console.log(mainTask)
  };
 

  const deleteHandler =(i) => {
    let copytask =[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2> No Task Available</h2>;
  if(mainTask.length> 0){
  renderTask = mainTask.map((t,i) =>{
    return (
      <li key={i} className="flex items-center justify-between mb-8">
        <div className="mb-5">
        <h5 className="text-xl font-semibold">{t.task}</h5>
        </div>
      
        <button 
        onClick={() =>
          {deleteHandler(i)}}
        className="bg-blue-600 text-white px-4 py-2 rounded font-bold mb-5"> Delete</button>
      </li>
    );
  });
}
  return (
    <>
      <h1 className="bg-teal-200 text-white p-5 text-center text-5xl font-bold font-serif">
      
        Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text"
          className="text-2xl  border-sky-400 border-4 m-5 px-4 py-2"
          placeholder="Enter Your Task "
          value={task}
          onChange={(e)=>
            setTask(e.target.value)
          }
        />

        

        <button className="bg-sky-500 px-4 py-3 m-5 font-bold text-2xl text-gray-500">Add Task</button>
      </form>
      <hr />
      <div className="p-8 bg-green-100">
        <ul>
          {renderTask}
        </ul>

      </div>
    </>
  
  );
};

export default page;

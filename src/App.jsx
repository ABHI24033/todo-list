import React, { useState } from 'react';
import TodoList from './TodoList';
import "./App.css";
function App() {
  const [todo,setTodo]=useState();
  
  const handleSubmit=async(e)=>{
    // e.preventDefault();
    try {
      const res=await fetch(`http://localhost:3000/todos/`,{
        method:"POST",
        body:JSON.stringify({
          completed:false,
          task:todo,
        })
      })
      const data=await res.json();
      
    } catch (error) {
      console.log("error while post",error);
    }
  }

  return (
    <div className='todo-list-container'>
      <h1 className='heading'>My Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className='add-todo-input' onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit" className='add-todo-button'>Add</button>
      </form>
      <TodoList  />
    </div>
  );
}

export default App;

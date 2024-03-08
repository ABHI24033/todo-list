import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {

    const [data,setData]=useState();
    useEffect(()=>{
        getAllTodo();
    },[])
    async function getAllTodo(){
        try {
            const res=await fetch(`http://localhost:3000/todos`);
            const todos= await res.json();
            console.log(todos);
            setData(todos);
            
        } catch (error) {
            console.log("Error while fetching data : ",error);
        }
    }


    async function ChangeCompleted(id,check){
        // console.log(e.target.checked);
        const res=await fetch(`http://localhost:3000/todos/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                completed:check,
            }),
            headers:{
                "Content-Type":"application/json"
            }
        });
        // window.location.reload();
        getAllTodo();
        console.log( await res.json());
    }
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {data && data?.map(todo => (
            <TodoItem key={todo.id} todo={todo} ChangeCompleted={ChangeCompleted}/>
          
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

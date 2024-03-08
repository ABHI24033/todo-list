import React, { useState,useEffect } from 'react';

const TodoItem = ({todo,ChangeCompleted}) => {
    const [check,setCheck]=useState(false);

    // useEffect(() => {
    // //   return () => {
    //     ChangeCompleted(todo.id);
    // //   };
    // }, [check,todo.id,todo.completed]);
    // async function ChangeCompleted(id){
    //     // console.log(e.target.checked);
    //     const res=await fetch(`http://localhost:3000/todos/${id}`,{
    //         method:"PATCH",
    //         body:JSON.stringify({
    //             completed:check,
    //         }),
    //         headers:{
    //             "Content-Type":"application/json"
    //         }
    //     });
    //     // window.location.reload();
    //     console.log( await res.json());
    // }
    return (
        // <div>
        <div className='todo-item'>
            <input type="checkbox" name="check" id="check" onChange={()=>{setCheck(!check)}} onClick={()=>{ChangeCompleted(todo.id,check)}} checked={todo.completed} value={todo.id}/>
            <li key={todo.id} className='todo-list ' style={{ textDecoration: todo?.completed ? 'line-through' : 'none' }}>
                {todo.task}
            </li>
        </div>
        // </div>
    );
}

export default TodoItem;

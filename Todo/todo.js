import React from "react";
import { useState } from "react";
import TodosList from "./TodoList";
import './todo.css';

export default function TodoFunction(){
    const [task, setTask]=useState("");
    const [todos,setTodos]=useState([]);
    const changeHandler=(e)=>{
        setTask(e.target.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if(task.length !==0){
            const newTodos=[...todos, task];
            setTodos(newTodos);
            setTask("");
        }
    }
       
    const deleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index!==indexValue);
        setTodos(newTodos);
    }
    return(
        <div>
            <center>
                <div className="card shadow m-5">
                    <div className="card-body"> 
                        <h3>Todo's Application</h3><br/>
                        <form onSubmit={onSubmitHandler}>
                            <input type="text" name="task" value={task} onChange={changeHandler}
                            pattern="[a-zA-Z][a-zA-Z ]+[a-zA-Z]$"/> 
                            &nbsp; &nbsp;
                            <button type="submit">Add</button>
                        </form><br/>
                        <TodosList todolist={todos} deleteHandler={deleteHandler}/>
                    </div>
                </div>
            </center>
        </div>
    )
}
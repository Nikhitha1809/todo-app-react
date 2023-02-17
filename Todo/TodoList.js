import React from "react";
import './TodoList.css';
const TodosList=({todolist,deleteHandler})=>{
    return(
        <div>
            {todolist.map((todo,index)=><div key={index}>
                <div className="d-flex flex-row justify-content-center p-2">
                    <h5 className="todo-heading">{todo}</h5>
                    <button onClick={()=>deleteHandler(index)}>Delete</button>
                </div>
            </div>)}
        </div>
    )
}

export default TodosList
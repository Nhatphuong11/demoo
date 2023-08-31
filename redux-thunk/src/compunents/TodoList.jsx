import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchApi} from '../redux/todoSlice';

function TodoList() {
    const todos = useSelector((state) => state.todolist.task);
    const status = useSelector((state) => state.todolist.status);
    console.log(status);
    console.log(todos);
    const dispatch = useDispatch();
    useEffect(() => {
        if(status === "idel"){
            dispatch(fetchApi());
        }
        
    },[status, dispatch]);
    
        if(status === "loading"){
            return <div>Loading ...</div>
        }

  return (
    <div>
        <h1>TodoList</h1>
        <ul>
            {todos.map((e) => (
                <li>{e.title}</li>
            ))}
        </ul>


    </div>
  )
}

export default TodoList
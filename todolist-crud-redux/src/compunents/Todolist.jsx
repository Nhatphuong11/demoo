import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask, setNewTask, toggleTask, updateTask } from '../redux/action/action';

function Todolist() {
    const tasks = useSelector((state)=> state.tasks);
    const newTask = useSelector((state)=> state.newTask);
    const dispatch = useDispatch();
    
    const handleAddTask =()=>{
        dispatch(addTask({
            id: Date.now(),
            text:newTask,
            complete:false,
    }));
    dispatch(setNewTask(""));
    }

    const handleToggle =(taskId)=>{
        dispatch(toggleTask(taskId));

    };
    const handleDeleteTask =(taskId)=>{
        dispatch(deleteTask(taskId));
    }
    const [selectTask, setSelectTask] = useState(null);
    const handleEditTask =(task)=>{
        setSelectTask(task);
        dispatch(setNewTask(task.text));
    };
    const handleUpdateTask = (task)=>{
        dispatch(updateTask({
            ...selectTask, text:newTask,
        }));
        dispatch(setNewTask(""));
        setSelectTask(null);
    }

  return (
    <div>
        <h1>todolist redux</h1>
        <input type='text' value={newTask} placeholder='enter a new task' onChange={(e)=> dispatch(setNewTask(e.target.value))}/>
        <button onClick={selectTask ? handleUpdateTask : handleAddTask}>{selectTask ? "update" : "add"}</button>
        <ul>
            {tasks.map((e, i)=>(
                <li key={i}>
                    <span 
                    style={{ textDecoration: e.complete ? 'line-through' : 'none' }}
                    onClick={()=>handleToggle(e. id)}>{e.text}</span>
                    <button onClick={()=>handleEditTask(e)}>edit</button>
                    <button onClick={()=> handleDeleteTask(e.id)}>delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todolist
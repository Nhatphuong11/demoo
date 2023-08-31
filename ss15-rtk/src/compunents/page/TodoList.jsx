            
import { useDispatch, useSelector } from 'react-redux'
import { addTask, decremented, deleteTask, incremented, setNewTask, toggleTask } from '../redux/todoSlice';

function TodoList() {
    const count = useSelector((state) => state.todos.count);
    const task = useSelector((state) => state.todos.task);
    const newTask = useSelector((state) => state.todos.newTask);
    const dispatch = useDispatch();


    const handleAddTask = () =>{
        dispatch(addTask({
            id: Date.now(),
            text:newTask,
            complete:false,
    }));
    dispatch(setNewTask(""));
    }
    // const handleDeleteTask = (taskid) =>{
    //     dispatch(deleteTask(taskid));
    // };
    // const handleToggle =(taskId)=>{
    //     dispatch(toggleTask(taskId));

    // };

  return (
    <div>
        <h1>tang/giam</h1>
        <p>{count}</p>
        <button onClick={()=> dispatch(decremented())}>down</button>
        <button onClick={()=> dispatch(incremented())}>up</button>

        <div>
            <h1>todolist</h1>
            <input type="text" value={newTask} onChange={(e)=>dispatch(setNewTask(e.target.value))} />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {task.map((e,i)=>(
                    <li key={i}>
                        <span onClick={()=> dispatch(toggleTask(e.id))} style={{textDecoration: e.completed? 'line-through' : 'none'}}>{e.text}</span>
                        <button onClick={()=> dispatch(deleteTask(e.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoList
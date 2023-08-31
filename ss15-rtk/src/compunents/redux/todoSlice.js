import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        count:0,
        task:[],
        newTask:"",
    },
    reducers:{
        incremented:(state)=>{state.count +=1},
        decremented:(state)=>{state.count -=1},

        addTask:(state, action)=>{
            state.task.push(action.payload);
        },
        setNewTask:(state, action)=>{
            state.newTask = action.payload;
        },
        deleteTask:(state, action)=>{
            state.task = state.task.filter((e) => e.id !== action.payload);
        },
        toggleTask:(state, action)=>{
            const todo = state.task.find((e) => e.id === action.payload);
            todo.completed = !todo.completed
        },
    },
});

export const {incremented,decremented, addTask, setNewTask, deleteTask, toggleTask} = todoSlice.actions;

export default todoSlice.reducer;
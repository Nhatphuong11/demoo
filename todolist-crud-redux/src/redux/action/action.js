// khai bao contant action
export const SET_NEW_TASK ='SET_NEW_TASK';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASk';
export const DELETE_TASK = 'DELETE_TASk';
export const UPDATE_TASK = 'UPDATE_TASk';

export const setNewTask = (tasks) =>({
    type: SET_NEW_TASK,
    payload: tasks,
})


export const addTask = (tasks) =>({
    type: ADD_TASK,
    payload: tasks,
})

export const toggleTask = (taskId) =>({
    type: TOGGLE_TASK,
    payload: taskId,
})

export const deleteTask = (tasksId) =>({
    type: DELETE_TASK,
    payload: tasksId,
})

export const updateTask = (tasks) =>({
    type: UPDATE_TASK,
    payload: tasks,
})
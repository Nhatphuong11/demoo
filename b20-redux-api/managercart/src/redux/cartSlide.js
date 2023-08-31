import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchCars = createAsyncThunk("fetchCars", async()=>{
    const reponse = await axios.get("http://localhost:8000/cars");
    return reponse.data;
})
export const deleteCars = createAsyncThunk("deleteCard", async(id)=>{
    await axios.delete(`http://localhost:8000/cars/${id}`);
    return id;
})

export const postCars = createAsyncThunk("postCard", async(car)=>{
    const reponse = await axios.post(`http://localhost:8000/cars/`,car);
    return reponse.data;
})
export const putCars = createAsyncThunk("putCard", async(car)=>{
    const reponse = await axios.put(`http://localhost:8000/cars/${car.id}`, car.inputFrom);
    return reponse.data;
})
const carsSlice = createSlice({
    name:"cars",
    initialState:{
        cars:[],
        status:"idle",
        error: null,
    },
    reducers:{},
    //extraReducers: xu li cac api
    extraReducers:(builder)=>{
        builder.addCase(fetchCars.pending, (state, action)=>{
            state.status ="loading";
        });
        builder.addCase(fetchCars.fulfilled, (state, action)=>{
            state.cars = action.payload;
            state.status ="success";
        });
        builder.addCase(fetchCars.rejected, (state, action)=>{
            state.error="Error";
        });
        builder.addCase(deleteCars.fulfilled, (state, action)=>{
            state.cars = state.cars.filter((car)=> car.id !== action.payload);
            
        });
        builder.addCase(postCars.fulfilled, (state, action)=>{
            state.cars.push(action.payload);         
        });
        builder.addCase(putCars.fulfilled, (state, action)=>{
            state.cars = state.cars.map((car)=>car.id === action.payload.id ? action.payload : car)    
        });
    },

});


export default carsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {axios} from 'axios'

const initialState={
    data:[],
    loading:false,
    error:'',
}

//here pending fulfilled rejected actions are generated at a time
export const fetchData=createAsyncThunk('async/fetchData',()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
})

const AsyncThunkSlice=createSlice({
    name:'async',
    initialState,
    extraReducers:(builder)=>{//one way with ['cake/ordered'] and other is using builder function
        builder.addCase(fetchData.pending, (state)=>{
            state.data=[]
            state.loading=true
            state.error=''
        })
        builder.addCase(fetchData.fulfilled, (state,action)=>{
            state.data=action.payload
            state.loading=false
            state.error=null
            console.log('data is ',state.data)
        })
        builder.addCase(fetchData.rejected, (state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
    }
})

export default AsyncThunkSlice
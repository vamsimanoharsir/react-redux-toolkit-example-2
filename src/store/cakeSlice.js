import {createSlice} from '@reduxjs/toolkit';

const initialState={
    noOfCakes:0
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
       ordered:(state)=>{
        state.noOfCakes--
       },
       reStocked:(state)=>{
        state.noOfCakes+=1
       }
    }
})

export const {ordered,reStocked}=cakeSlice.actions
export default cakeSlice
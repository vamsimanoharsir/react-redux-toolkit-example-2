import {createSlice} from '@reduxjs/toolkit';
import { ordered } from './cakeSlice';

const initialState={
    number:0
}
const ExtraReducerSlice=createSlice({
    name:'num',
    initialState,
    reducers:{
       increase:(state)=>{
        state.number--
       },
       decrease:(state)=>{
        state.number+=1
       },
    },
    //whenever ordered action is called on cakeSlice reducer...number is incremented for ExtraReducerSlice
    extraReducers:{
        ['cake/ordered']:(state)=>{
            state.number++
        }
        
    }
})

export const {increase,decrease}=ExtraReducerSlice.actions
export default ExtraReducerSlice
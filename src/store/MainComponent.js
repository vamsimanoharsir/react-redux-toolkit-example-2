import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {ordered,reStocked} from './cakeSlice'
import store from './store';
// const fetchData=require('./AsyncThunkSlice').fetchData
import {fetchData} from './AsyncThunkSlice'

function MainComponent(props) {
    
    const dispatch=useDispatch()
    const count1 = useSelector(state => state.cake.noOfCakes)

    //for extraReducer example and Async thunk
    const number1 = useSelector(state => state.num.number)
    //for asyncThunk example
    useEffect(()=>{
        store.dispatch(fetchData())
        console.log('state is ',store.getState())
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(ordered())
    }
    const handleSubmit1=(e)=>{
        e.preventDefault()
        dispatch(reStocked())
    }

    return (
        <div>
            <br/><br/><button className='btn btn-warning' onClick={(e)=>handleSubmit(e)}>will take one!</button><br/><br/>
            <button className='btn btn-warning' onClick={(e)=>handleSubmit1(e)}>restock them</button><br/>
            {count1<1?'oops out of stock':`present stock value is ${count1} and ${number1}`}

        </div>
    );
}

export default MainComponent;
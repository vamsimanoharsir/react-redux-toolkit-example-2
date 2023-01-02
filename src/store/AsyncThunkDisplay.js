import React, { useEffect, useReducer } from 'react';
import store from './store';
import {fetchData} from './AsyncThunkSlice'
import { useDispatch, useSelector } from 'react-redux';

function AsyncThunkDisplay(props) {
    
    const dispatch=useDispatch()
    const selector=useSelector(state=>state.async)

    useEffect(()=>{
        dispatch(fetchData())
    },[])

    return (
        <div>
            result is :<br />
            {selector.loading && <span>Loading</span>}
            {!selector.loading ?
                (<ul>
                    {
                        selector.data.map((selector) => (
                            <li key={selector.id}>{selector.name}</li>
                        ))
                    }
                </ul>) : null
            }
        </div>
    );
}

export default AsyncThunkDisplay;
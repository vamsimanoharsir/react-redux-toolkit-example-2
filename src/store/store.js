// //logger middleware included
// import {configureStore} from '@reduxjs/toolkit';
// import cakeSlice from './cakeSlice'
// const reduxlogger=require('redux-logger')//logger middleware for redux toolkit
// const logger=reduxlogger.createLogger()

// const store=configureStore({
//     reducer:{//all these key values are predefined
//         cake:cakeSlice.reducer
//     },
//     //in console we see action statements these are because of this logger (green in color)
//     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
// })
// export default store;



// //with extraReducer and no logger
// import {configureStore} from '@reduxjs/toolkit';
// import cakeSlice from './cakeSlice'
// import ExtraReducerSlice from './ExtraReducerSlice';

// const store=configureStore({
//     reducer:{//all these key values are predefined
//         cake:cakeSlice.reducer,
//         num:ExtraReducerSlice.reducer//we need to include ExtraReducerSlice reducer in store
//     }
// })
// export default store;



//with createAsyncThunk for redux toolkit
import {configureStore} from '@reduxjs/toolkit';
import cakeSlice from './cakeSlice'
import ExtraReducerSlice from './ExtraReducerSlice';
import AsyncThunkSlice from './AsyncThunkSlice';

const store=configureStore({
    reducer:{//all these key values are predefined
        cake:cakeSlice.reducer,
        num:ExtraReducerSlice.reducer,
        async:AsyncThunkSlice.reducer
        
    }
})
export default store;

import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../Redux/CounterSlice'

const rootReducer = combineReducers({
    counter : counterSlice,
});

export default rootReducer;
import { connect } from "react-redux";
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { thunk } from "redux-thunk";

import user_reducer from "../reducer/user_reducer";

const rootReducer = combineReducers({
    user_reducer:user_reducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
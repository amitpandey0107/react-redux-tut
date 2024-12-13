import { INCREMENT, DECREMENT, RESET } from "../constants/constants";
import { GET_USER_FAIL, GET_USER_LOADING, GET_USER_SUCCEED } from "../constants/constants";

export const increment_counter_action = (dispatch) => {
    dispatch({
        type:INCREMENT,
    }) 
}

export const decrement_counter_action = (dispatch) => {
    dispatch({
        type:DECREMENT,
    }) 
}

export const reset_counter_action = (dispatch) => {
    dispatch({
        type:RESET,
    }) 
}
import { INCREMENT, DECREMENT, RESET } from "../constants/constants";
import { GET_USER_FAIL, GET_USER_LOADING, GET_USER_SUCCEED } from "../constants/constants";

const initialState = {
    counterReducer: 0,
    usersReducer: []
}

const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counterReducer: state.counterReducer + 1
            }
        case DECREMENT:
            return {
                ...state,
                counterReducer: state.counterReducer !== 0 ? state.counterReducer - 1 : 0
            }
        case RESET:
            return {
                ...state,
                counterReducer: 0
            }
        default:
            return state
    }
}

export default user_reducer
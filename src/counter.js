import React, { use } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector} from 'react-redux'
import { increment_counter_action, decrement_counter_action, reset_counter_action } from './action/user_action'

export default function CountApp() {
    const dispatch = useDispatch();

    const userReducer = useSelector(state => state.user_reducer)

    const handelIncrement = () => {
        dispatch(increment_counter_action)
    }
    console.log({
        here:userReducer
    })

    return (
        <>
        <div>{userReducer.counterReducer}</div>
        <button onClick={handelIncrement}>INCREMENT</button>
        <button onClick={()=>dispatch(decrement_counter_action)}>DECREMENT</button>
        <button onClick={()=>dispatch(reset_counter_action)}>RESET</button>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         count: state.count
//     }
// }

// const CounterApp = ({ count, dispatch }) => {
//     const increment = () => {
//         dispatch({
//             type: "INCREMENT"
//         })
//     }
//     return (
//         <>
//             {count}
//             <br />
//             <button onClick={increment}>Increment</button>
//             <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
//             <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
//         </>
//     )
// }

// export default connect(mapStateToProps)(CounterApp)
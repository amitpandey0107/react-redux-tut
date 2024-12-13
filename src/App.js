import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CountApp from './counter';
import store from './store/store';

// const initialState = {
//   count: 0
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + 1
//       }
//     case "DECREMENT":
//       return {
//         ...state,
//         count: state.count !==0 ? state.count  - 1 : 0
//       }
//     case "RESET":
//       return {
//         ...state,
//         count: 0
//       }
//     default:
//       return state
//   }
// }

// const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <CountApp />
    </Provider>
  )
}
export default App
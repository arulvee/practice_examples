import React, {useEffect} from "react";
import "./style.css";

import store, {COUNTER_INCREMENT, COUNTER_DECREMENT, GET_VALUES} from './stores';

const increment = () => {
  store.dispatch({type:COUNTER_INCREMENT});
  console.log(store.getState());
}
const decrement = () => {
  store.dispatch({type:COUNTER_DECREMENT});
  console.log(store.getState())
}
//No Hooks
/*const getValues = () => {
  store.dispatch({type:GET_VALUES});
  console.log(...store.getState());
}*/
//With Hooks
export default function App() {
  useEffect (() => {
  store.dispatch({type:GET_VALUES});
  console.log(store.getState());
},[])

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {/* <button onClick={getValues}>Get Values</button> */}
      
    </div>
  );
}

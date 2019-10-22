import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, multiply, divide, reset} from "../actions";

function CounterWithReduxState(){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    console.log(counter);

    return (
        <div className="App">
            <p>{counter}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(multiply())}>*2</button>
            <button onClick={()=>dispatch(divide())}>/2</button>
            <button onClick={()=>dispatch(reset())}>R</button>
        </div>
      );
}

export default CounterWithReduxState;
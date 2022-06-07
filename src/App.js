import "./App.css";
import React, { useState} from "react"
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [x, setX] = useState()
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div className="App">
      <h1>value: {count}</h1>
      <div>
        X: <input type="number" placeholder="Please enter any number" value={x} onChange={(e)=> setX(+e.target.value)} />
      </div>
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      <div>
        <button onClick={() => dispatch({ type: "add", payload: x })}>Add X</button>
        <button onClick={() => dispatch({ type: "sub", payload: x })}>Substract X</button>
        <button onClick={() => dispatch({ type: "mul", payload: x })}>Multiply with X</button>
        <button onClick={() => dispatch({ type: "div", payload: x })}>Divide with X</button>
      </div>
    </div>
  );
}

export default App;

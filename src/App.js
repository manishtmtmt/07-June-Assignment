import './App.css';
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state)=> state.count)
  return (
    <div className="App">
      <h1>value: {count}</h1>
      <button onClick={()=> dispatch({type: "inc"})}>Increment</button>
      <button onClick={()=> dispatch({type: "dec"})}>Decrement</button>
    </div>
  );
}

export default App;

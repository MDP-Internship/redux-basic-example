import './App.css';
//import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter=useSelector(state=> state.counter);
  const dispatch= useDispatch();

  return (
    <div class='App'>
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;

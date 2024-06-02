import { useEffect, useState } from 'react'
import './App.css'

let stateValue: unknown;
let forceRender: () => void;

// use extends in type parameter declaration to avoid confusing the TSX parser
const customUseState = <T extends any>(initialValue: T): [T, (newValue: T) => void] => { 
  if (stateValue === undefined) {
    stateValue = initialValue;
  }

  const setValue = (newValue: T) => {
    console.log('newvalue', newValue)
    stateValue = newValue;
    console.log('stateValue', stateValue)
    forceRender();
  }

  return [stateValue as T, setValue];
}

function Counter({ id }) {
  const [count, setCount] = customUseState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const [dummyState, setDummyState] = useState(0); // used to force re render

  forceRender = () => {
    setDummyState((prev) => prev + 1);
  }

  useEffect(() => {
    console.log(`CustomUseState counter rendered. count = ${count}`);
  });


  return (
    <div>
      <h1>Count {id}: {count}</h1>
      <button onClick={handleIncrement}>Add</button>
    </div>
  )
}

export default Counter;

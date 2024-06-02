import { useEffect, useState } from 'react'
import './App.css'

let callIndex = -1;
const state: unknown[] = [];
// let stateValue: unknown;
let forceRender: () => void;

// use extends in type parameter declaration to avoid confusing the TSX parser
const customUseState = <T extends any>(initialValue: T): [T, (newValue: T) => void] => { 
  callIndex += 1;
  console.log('callIndex: ', callIndex);

  const currentIndex = callIndex;

  if (state[currentIndex] === undefined) {
    state[currentIndex] = initialValue;
  }

  const setValue = (newValue: T) => {
    console.log('newvalue', newValue)
    state[currentIndex] = newValue;
    console.log('stateValue', state[currentIndex])
    forceRender();
  }

  return [state[callIndex] as T, setValue];
}

function Counter({ id }) {
  const [countA, setCountA] = customUseState(0);
  const [countB, setCountB] = customUseState(0);

  const handleIncrementA = () => {
    setCountA(countA + 1);
  }

  const handleIncrementB = () => {
    setCountB(countB + 1);
  }

  const [dummyState, setDummyState] = useState(0); // used to force re render

  forceRender = () => {
    callIndex = -1;
    setDummyState((prev) => prev + 1);
  }

  useEffect(() => {
    console.log(`CustomUseState counter rendered. countA = ${countA}. countB = ${countB}`);
  });

  return (
    <div>
      <h1>Count A: {countA}</h1>
      <button onClick={handleIncrementA}>Add</button>

      <h1>Count B: {countB}</h1>
      <button onClick={handleIncrementB}>Add</button>
    </div>
  )
}

export default Counter;

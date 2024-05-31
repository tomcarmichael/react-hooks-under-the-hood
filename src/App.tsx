// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'

// Experimenting with the wrong to better understand the right way...
let countA = 1;

function Counter() {
  const [dummyState, setDummyState] = useState(1); // used to force re render

  const forceUpdate = () => {
    setDummyState((prev) => prev + 1);
  }

  const incrementA = () => {
    countA += 1;
    forceUpdate();
  }

  useEffect(() => {
    console.log(`Rendered. CountA = ${countA}`);
    return () => {
      console.log(`Cleaned up. CountA = ${countA}`);
    }
  });

  return (
    <>
      <div>
        <h1>Count A: {countA}</h1>
        <button onClick={incrementA}>Add</button>
      </div>
    </>
  )
}

export default Counter;

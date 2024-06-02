import { useEffect, useState } from 'react'
import './App.css'

// Experimenting with the wrong to better understand the right way...
let count = 0;

function Counter({ id }) {
  const [dummyState, setDummyState] = useState(true); // used to force re render

  const forceUpdate = () => {
    setDummyState((prev) => !prev);
  }

  const incrementA = () => {
    count += 1;
    forceUpdate();
  }

  useEffect(() => {
    console.log(`GlobalVarCounter rendered. count = ${count}`);
  });

  return (
    <div>
      <h1>Count {id}: {count}</h1>
      <button onClick={incrementA}>Add</button>
    </div>
  )
}

export default Counter;

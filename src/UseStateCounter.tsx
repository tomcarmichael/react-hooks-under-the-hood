import { useEffect, useState } from 'react'
import './App.css'

function Counter({ id }) {

  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log(`UseState counter rendered. count = ${count}`);
  });

  return (
    <div>
      <h1>Count {id}: {count}</h1>
      <button onClick={() => setCount((prev) => prev +1)}>Add</button>
    </div>
  )
}

export default Counter;

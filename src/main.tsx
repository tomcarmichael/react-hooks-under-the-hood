import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalVarCounter from './GlobalVarCounter.tsx'
import UseStateCounter from './UseStateCounter.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h3>Global state shared across component instances when using regular Javascript global variables... A mess:</h3> 
    <GlobalVarCounter />
    <GlobalVarCounter />
    <h3>useState hook included within component definition:</h3> 
    <UseStateCounter />
    <UseStateCounter />

  </React.StrictMode>,
)

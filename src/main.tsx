import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalVarCounter from './GlobalVarCounter.tsx'
import UseStateCounter from './UseStateCounter.tsx'
import CustomUseStateCounter from './CustomUseStateCounter.tsx'
import './index.css'

const rootEl = ReactDOM.createRoot(document.getElementById('root')!)

rootEl.render(
  <React.StrictMode>
    <h3>Global variable shared across component instances:</h3> 
    <GlobalVarCounter id="A"/>
    <GlobalVarCounter id="B"/>
    <h3>useState hook used within component definition:</h3> 
    <UseStateCounter id="A"/>
    <UseStateCounter id="B" />
    <h3>Using a custom built useState hook:</h3> 
    <CustomUseStateCounter id="A"/>

  </React.StrictMode>,
)

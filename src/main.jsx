import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, ParentComponent, reactElement} from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const root1 = ReactDOM.createRoot(document.getElementById("root1"))

const root2 = ReactDOM.createRoot(document.getElementById("root2"))

root.render(
  <React.StrictMode>
    < App /> 
  </React.StrictMode>,
)

root1.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
)

root2.render(
  <React.StrictMode>
    {reactElement}
  </React.StrictMode>
)
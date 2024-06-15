import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Editor from '@monaco-editor/react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// const [code,setCOde] = useState("def funct(arr,n):\n\t#Enter Code Here And return Integer")
// const HandleChange = (value, event) => {
//   setCOde(value)
//   console.log(value)
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <App/>
  </React.StrictMode>,
)

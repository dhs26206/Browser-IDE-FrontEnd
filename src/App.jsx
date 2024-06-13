// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
import routes from './routes';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App

;
import Home from './Components/Home.jsx'
import Contest from './Components/Contest-Editor/Contest.jsx';
const routes = [
    { path: '/contest', element: <Contest/> },
    { path: '/', element: <Home /> },
    // { path: '/contact', element: <Contact /> },
    // { path: '/abc/:id', element: <DynamicPage /> }, // Dynamic route
    // { path: '*', element: <NotFound /> },
  ];

  export default routes;

import Editor1 from './Components/Editor.jsx';
import Home from './Components/Home.jsx'
const routes = [
    { path: '/contest', element: <Editor1 /> },
    { path: '/', element: <Home /> },
    // { path: '/contact', element: <Contact /> },
    // { path: '/abc/:id', element: <DynamicPage /> }, // Dynamic route
    // { path: '*', element: <NotFound /> },
  ];

  export default routes;

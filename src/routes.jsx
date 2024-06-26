;
import Home from './Components/Home.jsx'
import Contest from './Components/Contest-Editor/Contest.jsx';
import ContestLayout from './Components/Contests-Viewer/ContestLayout.jsx'
// import ListContest from './Components/Contest-Viewer/ListContest.jsx';
import ContestExpand from "./Components/Contest-Expand/index.jsx" 
import list from './JSON/listContest.json'
// import Dino from './Components/Contest-Viewer/Dino.jsx';
const routes = [
    { path: '/contest', element: <Contest/> },
    { path: '/', element: <Home /> },
    { path: '/dev', element: <ContestLayout /> },
    { path: '/dev2', element: <ContestExpand/> },
    // { path: '/dev2', element: <Dino/> },
    // { path: '/abc/:id', element: <DynamicPage /> }, // Dynamic route
    // { path: '*', element: <NotFound /> },
  ];

  export default routes;

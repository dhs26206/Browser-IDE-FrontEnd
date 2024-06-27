;
import Home from './Components/Home.jsx'
import Contest from './Components/Contest-Editor/Contest.jsx';
import ContestLayout from './Components/Contests-Viewer/ContestLayout.jsx'
// import ListContest from './Components/Contest-Viewer/ListContest.jsx';
import ContestExpand from "./Components/Contest-Expand/index.jsx" 
import list from './JSON/listContest.json'
import Log from './Components/Login-SignUp/Login.jsx';
import Signup from './Components/Login-SignUp/SignUp.jsx';
// import Dino from './Components/Contest-Viewer/Dino.jsx';
const routes = [
    { path: '/problem/:q', element: <Contest/> },
    { path: '/', element: <Home /> },
    { path: '/contestList', element: <ContestLayout /> },
    { path: '/contest/:q', element: <ContestExpand/> },
    { path: '/login', element: <Log/> },
    { path: '/signup', element: <Signup/> },
    // { path: '/dev2', element: <Dino/> },
    // { path: '/abc/:id', element: <DynamicPage /> }, // Dynamic route
    // { path: '*', element: <NotFound /> },
  ];

  export default routes;

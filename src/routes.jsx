import Home from './Components/Home/Home.jsx'
import Contest from './Components/Contest-Editor/Contest.jsx';
import ContestLayout from './Components/Contests-Viewer/ContestLayout.jsx'
// import ListContest from './Components/Contest-Viewer/ListContest.jsx';
import ContestExpand from "./Components/Contest-Expand/index.jsx" 
import list from './JSON/listContest.json'
import Log from './Components/Login-SignUp/Login.jsx';
import Signup from './Components/Login-SignUp/SignUp.jsx';
import CreateContest from './Components/Create-Contest/CreateContest.jsx';
import ProtectedRoute from './RestrictedURLs.jsx';
import { QuestionList } from './Components/Create-Contest/QuestionList.jsx';

// import Dino from './Components/Contest-Viewer/Dino.jsx';
const isAuthenticatedTrue=()=>{
  return true;
}
const routes = [
    { path: '/problem/:q', element: <Contest/> },
    { path: '/', element: <Home /> },
    { path: '/contestList', element: <ContestLayout /> },
    { path: '/contest/:q', element: <ContestExpand/> },
    { path: '/login', element: <Log/> },
    { path: '/signup', element: <Signup/> },
    { path: '/CreateContest', element:<ProtectedRoute element={CreateContest} isAuthenticated={isAuthenticatedTrue}/> },
    { path: '/QChoose/:q', element:<ProtectedRoute element={QuestionList} isAuthenticated={isAuthenticatedTrue}/> },
    
    // { path: '/dev2', element: <Dino/> },
    // { path: '/abc/:id', element: <DynamicPage /> }, // Dynamic route
    // { path: '*', element: <NotFound /> },
  ];

  export default routes;

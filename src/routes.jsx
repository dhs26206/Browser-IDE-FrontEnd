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
// import Account from './Components/Manage-Account/Account.jsx';
import QuestionCreate from './Components/Create-Contest/QuestionCreate.jsx';
import Dashboard from './Components/userdashboard/Dashboard.jsx';
import CallBack from './Components/Login-SignUp/Callback.jsx';
// import Dino from './Components/Contest-Viewer/Dino.jsx';
import VerifyEmail from './Components/Login-SignUp/VerifyEmail.jsx';
import CallVerify from './Components/Login-SignUp/CallVerify.jsx';
import ManageContest from './Components/manageContestPage/manageContestPage.jsx'
import CreateQuestion from "./Components/createQuestion/createQuestion.jsx";


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
    // { path: '/createquestion', element: <CreateQuestion/> },
    { path: '/CreateContest', element:<ProtectedRoute element={CreateContest} isAuthenticated={isAuthenticatedTrue}/> },
    { path: '/QChoose/:q', element:<ProtectedRoute element={QuestionList} isAuthenticated={isAuthenticatedTrue}/> },
    {path : '/managecontest/:q', element : <ManageContest/>},
    { path: '/managecontest/:q/createquestion', element: <CreateQuestion/> },
    { path: '/dev2', element: <QuestionCreate/> },
    {path:'/userdashboard',element:<Dashboard/>},
    {path:'/callback',element:<CallBack/>},
    {path:'/verify',element:<VerifyEmail/>},
    {path:'/callverify',element:<CallVerify/>}
    // { path: '/abc/:id', element: <DynamicPage /> }, // Dynamic route
    // { path: '/dev2', element: <QuestionCreate/> },
    
    // { path: '/User', element: <Account/> },
    // { path: '*', element: <NotFound /> },
  ];
  
  export default routes;

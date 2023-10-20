import {createBrowserRouter} from 'react-router-dom';
import Login from './assets/views/Login.jsx';
import Signup from './assets/views/Signup.jsx';
import Users from './assets/views/Users.jsx';
import NotFound from './assets/views/NotFound.jsx';

const Router = createBrowserRouter([
    {
        path: '*',
        element:<NotFound/>
    },
    {
        path: '/login',
        element:<Login/>
    },
    {
        path: '/signup',
        element:<Signup/>   
    },
    {
        path: '/users',
        element:<Users/>   
    },
    
    
]);

export default Router;
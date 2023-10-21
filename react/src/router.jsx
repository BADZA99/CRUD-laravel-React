import {Navigate, createBrowserRouter} from 'react-router-dom';
import Login from './assets/views/Login.jsx';
import Signup from './assets/views/Signup.jsx';
import Users from './assets/views/Users.jsx';
import NotFound from './assets/views/NotFound.jsx';
import DefaultLayout from './assets/components/DefaultLayout.jsx';
import GuestLayout from './assets/components/GuestLayout.jsx';
import Dashboard from './assets/components/Dashboard.jsx';
import UserForm from './assets/views/UserForm.jsx';

const Router = createBrowserRouter([
    {
        path: '/',
        element:<DefaultLayout/>,
        children: [
            {
                path: '/',
                element:<Navigate to="/users"/>   
            },
            {
                path: '/dashboard',
                element:<Dashboard/>   
            },
            {
                path: '/users',
                element:<Users/>   
            },
            {
                path: '/users/new',
                element:<UserForm key="UserCreate"/>   
            },
            {
                path: '/users/:id',
                element:<UserForm key="UserUpdate"/>   
            },
        ]
    },
    {
        path: '/',
        element:<GuestLayout/>,
        children: [
            {
                path: '/login',
                element:<Login/>   
            },
            {
                path: '/signup',
                element:<Signup/>   
            },
        ]
    },
    
    {
        path: '*',
        element:<NotFound/>
    },
   
    
    
]);

export default Router;
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthProvider from './contextapi/AuthProvider';
import Orders from './components/Orders';
import PrivateRoute from './components/routes/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path:'/', element: <Home/>},
      {path:'/register', element:<Register/> },
      {path:'/login', element: <Login/>},
      {path:'/orders', element: <PrivateRoute><Orders/></PrivateRoute>},
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)

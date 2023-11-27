import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Login from './screens/Login.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    // loader:rootLoader,
    // action:rootAction,
    errorElement:<ErrorPage/>,
    // children:[{
    //   path:'/contacts/:contactID',
    //   element: <Contact/>,
      
    // }],

  },

  {
    path:'/login',
    element:<Login/>

  }
 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)

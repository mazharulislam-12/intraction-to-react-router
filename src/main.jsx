import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componentes/Home/Home.jsx';
import About from './Componentes/About/About.jsx';
import Contact from './Componentes/Contact/Contact.jsx';
import Footer from './Componentes/Footer/Footer.jsx';
import Users from './Componentes/Users/Users.jsx';
import UserDetails from './Componentes/UserDetails/UserDetails.jsx';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:UserId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

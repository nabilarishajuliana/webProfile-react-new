import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './home/home';
import Anggota1 from './anggota/anggota1';
import Anggota2 from './anggota/anggota2';
import Anggota3 from './anggota/anggota3';
import Calculator from './calculator/Calculator';

const router= createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/anggota1",
    element:<Anggota1/>
  },
  {
    path:"/anggota2",
    element:<Anggota2/>
  },
  {
    path:"/anggota3",
    element:<Anggota3/>
  },
  {
    path:"/calculator",
    element:<Calculator/>
  },
 
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

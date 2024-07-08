import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryDetails from './components/countrydetails.jsx';
import ContinentData from './components/continents.jsx';
import Countries from './components/country.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/countrydetails',
    element: <CountryDetails/>
  },
  {
    path: '/continents',
    element: <ContinentData/>
  },
  {
    path: '/country',
    element:<Countries/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import './index.scss';

import Router from './Components/Router';
import Header from './Components/Header';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Router />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



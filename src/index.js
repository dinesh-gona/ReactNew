import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import {BrowserRouter} from 'react-router-dom'
import Heading from './Heading';
import Loading from './Loading';
import Undefined from './Undefined';
import DivisionComponent from './DivisionComponent';
import About from './About';
import Layout from './Pages/Layout';
import Contact from './Contact';
import NoPage from './Pages/NoPage';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Dropdown from './Dropdown';
import Pagination from './Pagination';
import DropdownSVG from './DropdownSVG';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
    <Dropdown/>
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

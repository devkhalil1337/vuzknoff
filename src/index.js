import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import {
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root13'));
root.render(
  <React.StrictMode>
  <Router>
  <Routes> 
      <Route path="/contact/1003784549657034/d4" element={<Home />} />
      <Route path="/" element={<App />} />
      
    </Routes>
    </Router>
  </React.StrictMode>
);

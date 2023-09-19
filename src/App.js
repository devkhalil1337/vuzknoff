import React, { useEffect, useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

const App = () => {



  return (
  <div className="container">
        <Routes> 
      <Route path="/contact/1003784549657034/d4" element={<Home />} />
    </Routes>
  </div>
  )

}

export default App;

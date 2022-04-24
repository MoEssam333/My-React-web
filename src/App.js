import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact  path='/'  />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

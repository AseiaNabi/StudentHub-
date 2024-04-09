import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Register" element={<Register/>} />
                </Routes>
      </div>
    </Router>
  );
}

export default App;
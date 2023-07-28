import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/private/"element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

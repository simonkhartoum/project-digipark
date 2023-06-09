import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Parkings from './components/Parkings';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/parkings" element={<Parkings />} />
        </Routes>
      </div>
    </Router>
  );

}
export default App;

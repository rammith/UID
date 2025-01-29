// frontend/src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './components/AddItem';
import ViewItems from './components/ViewItems';
import './App.css';

function App() {
  const [editItem, setEditItem] = useState(null);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/add-item">Add Contact</Link>
          <Link to="/view-items">View Contacts</Link>
        </nav>
        <Routes>
          <Route
            path="/add-item"
            element={<AddItem editItem={editItem} setEditItem={setEditItem} />}
          />
          <Route
            path="/view-items"
            element={<ViewItems setEditItem={setEditItem} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

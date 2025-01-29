import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Find the root element in the HTML and render the React app inside it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

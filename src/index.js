// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// We removed 'reportWebVitals' and 'index.css' imports to keep it simple

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
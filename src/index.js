import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // strict mode to identify potential probles during development
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);


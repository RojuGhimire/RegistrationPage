import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';  // Corrected import statement
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Wrap your App component with the Router */}
      <App />
    </Router>
  </React.StrictMode>,
);

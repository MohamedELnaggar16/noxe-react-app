import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import styles from './Components/Index.module.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    
        <App />
  </HashRouter>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { MenuProvider } from './components/MenuContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MenuProvider>
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </MenuProvider>
);

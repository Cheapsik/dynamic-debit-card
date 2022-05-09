import React from 'react';
import ReactDOM from 'react-dom/client';
import DynamicDebitCard from './components/DynamicDebitCard/DynamicDebitCard.js';
import './main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DynamicDebitCard />
  </React.StrictMode>
);

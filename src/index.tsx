import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global } from '@emotion/react'
import { globalStyles } from './globalStyles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Global styles={globalStyles}/>
    <App />
  </React.StrictMode>
);

reportWebVitals(console.log);

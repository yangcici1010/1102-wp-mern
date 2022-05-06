import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css"
import './index.css';
import App_81 from './App_81';
import {AppProvider_81} from './context/appContext_81'


ReactDOM.render(
  <React.StrictMode>
    <AppProvider_81>
    <App_81 />
    </AppProvider_81>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


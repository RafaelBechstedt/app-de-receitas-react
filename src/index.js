import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<BrowserRouter basename={"/app-de-receitas-react"}><Switch><App /></Switch></BrowserRouter>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
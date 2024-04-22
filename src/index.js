import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Importe também Route se você estiver usando no seu aplicativo.
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/app-de-receitas-react">
      <Switch>
        <Route path="/" component={ App } />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
);

serviceWorker.unregister();

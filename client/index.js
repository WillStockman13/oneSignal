import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App.js';
import HOme from './components/Home/Home.js';


ReactDOM.render((
  <div>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={HOme} />
      </Route>
    </Router>
  </div>


  ),
document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,link} from 'react-router-dom';

import App from './App';
import Show from './components/content/show';
import Collection from './components/content/collection';
import ListTree from './components/content/listtree'
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// console.log($('body'))
ReactDOM.render((
  <Router>
    <Route path="/" basename="/" exact component={App} />
    <Route path="/show" component={Show} />
    <Route path="/listtree" component={ListTree} />
    <Route path="/collection" component={Collection} />
  </Router>
),document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Promise from 'redux-promise';
import Thunk from 'redux-thunk';


import App from './components/app';
import reducers from './reducers';
import LandingPage from './components/landing';
import BrewList from './containers/brew_list';
import AddBrew from './components/add_brew';

const createStoreWithMiddleware = applyMiddleware(Promise, Thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/brews/add" component={AddBrew} />
          <Route path="/brews" component={BrewList} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

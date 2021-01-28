import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
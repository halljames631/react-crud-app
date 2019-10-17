import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Products from './containers/Products'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="container">
        <Switch>
          <Route path="/"  exact component={LandingPage}/>
          <Route path="/products" component={Products}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;

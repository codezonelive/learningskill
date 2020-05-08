import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './css/layout.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Test from './component/Test'
import Home from './component/Home'

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
          <Route exact path="/" component={ Test }/>
          <Route  path="/home" component={ Home }/>
          <Route  path="/home/ddd" component={ Test }/>
          </Switch>
    </div>
    </BrowserRouter>
 
  );
}

export default App;

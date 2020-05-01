import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './css/layout.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Test from './component/Test'
import Home from './component/Home'
import Notpage from './component/404Notpage'

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
          <Route exact path="/" component={ Test }/>
          <Route  path="/home" component={ Home }/>
          <Route  path="/home/ddd" component={ Test }/>
          <Route/>
          </Switch>
    </div>
    </BrowserRouter>
 
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect } from 'react-redux'
import {addcounter,delcounter } from './action/actions'

import Testredux from './component/Testredux'

const App = (data) => {

  const onplus = () =>{
    return data.dispatch(addcounter(2))
  }

  const onminus = () =>{
    return data.dispatch(delcounter(1))
  }

  return (
    <div className="App">
      <h1>counter:{ data.count }</h1>
      <button onClick={ onplus }> + Plus </button>
      <button onClick={ onminus }> - Minus</button>
      <hr/>
      <Testredux/>
    </div>
  );
}

const mapStateToProps = (state)=>({
  count: state.counter
})

const mapDispatchToProps = (dispatch)=>({
  // onplus: () => dispatch(addcounter()),
  // onminus: () => dispatch(delcounter())
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

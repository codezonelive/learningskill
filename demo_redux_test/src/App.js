import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { addCounter,delCounter} from './action/action';

import Testredux from './component/Testredux';

const App = (data) => {
//วิธีที่2
  const onplus = () =>{
    return data.dispatch(addCounter(5))
  }
  const onminus = () =>{
    return data.dispatch(delCounter(3))
  }

  return (
    <div className="App">
      <h1>counter:{data.count}</h1>
      <button onClick={ onplus }> + Plus</button>
      <button onClick={ onminus }> - Minus</button>
      <hr/>
      <Testredux/>
    </div>
  );
}

const mapStateToProps = (state) =>({
  count:state.counter
})
//วิธีแรก
const mapDispatchToProps = (dispatch)=>({
  //onplus: () => dispatch(addCounter()),
  //onminus: () => dispatch(delCounter())
  dispatch
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

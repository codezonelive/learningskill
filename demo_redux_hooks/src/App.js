import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { addcouter, delcounter } from './action/counteraction'
import { useSelector, useDispatch } from 'react-redux'

import Testredux from './component/Testredux'

function App() {

  const [data, setData] = useState(0)
  
  const { count } = useSelector(state => state.counter )
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(`useeffect : ${data}`)
  },[data])

  const onplus = () =>{
    setData(data +1 )
  }

  const onminus = () =>{
    setData(data - 1)
  }

  const onplusaction = () =>{
    dispatch(addcouter())
  }

  const onminusaction = () =>{
    dispatch(delcounter())
  }

  return (
    <div className="App">
      <h1>count state: {data }  count redux : { count }</h1>
      <button onClick={ onplus }>+plus</button>
      <button onClick={ onminus }>-minus</button>
      <button onClick={ onplusaction }>+plus action</button>
      <button onClick={ onminusaction }>-minus action</button>
      <hr/>
      <Testredux/>
    </div>
  );
}

export default App;

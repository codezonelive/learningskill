import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import API from './service/api'

function App() {
  const [data, setdata] = useState({
    name: 'tum'
  })

  useEffect(()=>{
   console.log('test')
  },[])
  
  const changename = async() =>{
    const getTest = await API.get('/api/test/one')
    console.log(getTest)
    setdata({
      name: getTest.data.name
    })
  //   await getTest
  //   .then(response => setdata({
  //     name: response.data.name
  //   }))
  //   .catch(error => console.log(error))
  }
  return (
    <div className="App">
      <h1>name: { data.name }</h1>
      <button onClick={ changename }>changename</button>
    </div>
  );
}

export default App;

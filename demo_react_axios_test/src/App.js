import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import API from './service/api'

function App() {
  const [data,setData] = useState({
    name:'oil'
  })

  
  //useEffect(()=>{
    //getTest.
    //then(response=> setData({
      //name:response.data.name
    //}))
    //.catch(error => console.log(error))
  //},[])

  const changename = async() =>{
    const getTest = await API.get('/api/test/one')
    console.log(getTest)
    setData({
      name: getTest.data.name
    })
  }

  return (
    <div className="App">
      <h1>name: {data.name}</h1>
      <button  onClick={changename}>Changename</button>
    </div>
  );
}

export default App;

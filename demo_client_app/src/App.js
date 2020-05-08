import React,{useState} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Post from './component/Post';
import TestState from './component/TestState';
import IfElse from './component/IfElse';
import Blog from './component/Blog';

import Home from './view/Home';
import About from './view/About';
import Error404 from './view/Error404';




function App() {
{/*
  let name = "Tanakorn"
  let age = "23"

  const [data,setData] = useState({
    count:0
  })

  const clickPlus = () =>{
    setData({
      count: data.count + 1
    })
  }

  const clickMinus = () =>{
    setData({
      count:data.count - 1
    })
  }
  //list
  const list = [
    {id: 1, name: 'test1'},
    {id: 2, name: 'test2'},
    {id: 3, name: 'test3'},
    {id: 4, name: 'test4'}
  ]

  const [datalist,setDatalist] = useState(list)
  


  const deleteIndex  = (index) =>{
    const data = [...datalist]
    data.splice(index,1)
    setDatalist(data)
  }

  //ส่งค่าเรียกcomponent มาวน หน้า blog
  const pagelist = datalist.map((r,index)=>{
    return (
      <div key={ index }>
        <Blog id={ r.id } name={ r.name } deleteIndex={ deleteIndex.bind(this,index) }/>
      </div>
    )
  })
*/}

  return (
    <div className="App">
      {/*<h1>Hello react</h1>
      <Post  fname={name}  yourAge={age} count={data.count}/>
      <Post fname={name}  yourAge={age}>Test pass</Post>
      <TestState count={data.count}/>
      <button onClick={clickPlus}>plus</button>
      <button onClick={clickMinus}>minus</button>
      <hr/>
      <IfElse count={data.count}></IfElse>
      <hr/>
      <h1>new blog ...</h1>
      {pagelist}*/}
      <BrowserRouter>
        <Switch>
        <Route path="/about/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component= {Home}/>
        <Route component={ Error404 }/>
        </Switch>        
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState} from 'react'
import '../css/layout.css'
import Test from './Test'

const Home = () =>{
    let test = ' ddd'
    let numcount = 0
    const [count, setcount] = useState(0)
    const [status, setStatus] = useState({
      name: 'sss',
      tel: '0000'
    })
  
    const addcount = () =>{
      // numcount = numcount + 1
      setcount( count + 1) 
      
      console.log(`count: ${count} numcount: ${numcount}`)
    }
  
    const deletecount = () =>{
      setcount( count - 1)
    }
  
    const setname = ()=>{
      let name = {...status}
      name.name = 'kanchit'
  
      console.log(name)
      setStatus(name)
    }
    return (
      <div className="Home">
        <h1 className="textcolor">Hello world { test }</h1>
        <br/>
        {
          test ==='ddd'?
          <h1>test pass</h1>:
          <h1>test failed</h1>
        }
  
        <Test name="kanchit" tel="0000">test1</Test>
  
      <h1>count: { count } name: { status.name} tel: { status.tel }  { numcount}</h1>
      <button onClick={ addcount }>+count</button>
      <button onClick={ deletecount }>-count</button>
      <button onClick={ setname }>changename</button>
      </div>
    );
}

export default Home
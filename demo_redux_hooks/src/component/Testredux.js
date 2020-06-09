import React ,{useState} from 'react'
import { addcouter, delcounter } from '../action/counteraction'
import { useSelector, useDispatch } from 'react-redux'
 

const Testredux = () =>{
    const { count } = useSelector(state => state.counter )
    const dispatch = useDispatch()
    const [txtss, setText] = useState({
        text: 'sss'
    })


    // const handlText = () =>{
       
    // }

    const handleSend = () =>{
        setText({
            text: ''
        })
        // dispatch(addcouter())
    }

    return (
        <div className="testredux">
            <h1> count : { count }</h1>
            <input type="text"  value={txtss.text }placeholder="test ....."/>
            <button onClick={ handleSend }>test send back</button>
        </div>
    )
}

export default Testredux
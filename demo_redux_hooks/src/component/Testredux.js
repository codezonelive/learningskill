import React from 'react'
import { useSelector } from 'react-redux'
 

const Testredux = () =>{
    const { count } = useSelector(state => state.counter)
    return (
        <div className="testredux">
            <h1> count : { count }</h1>
        </div>
    )
}

export default Testredux
import React from 'react'
import { connect } from 'react-redux'

const Testredux =(data)=>{
    return (
        <div className="testredux">
            <h1>Show counter: { data.counter}</h1>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return { counter: state.counter }
}

// const mapStateToProps = (state)=>({
//     counter: state.counter 
// })

export default connect(mapStateToProps)(Testredux)
import React from 'react'
import { connect } from 'react-redux';
import { delCounter } from '../action/action';
import counter from '../reducer/counter';


const Testredux = (data) =>{
    return(
        <div className="testredux">
            <h1>Show counter: {data.counter}</h1>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return { counter:state.counter}
}

export default connect(mapStateToProps)(Testredux);
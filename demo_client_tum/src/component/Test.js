import React from 'react'
import { Route , Link } from 'react-router-dom'
import About from './About'

const Test = (props) => {
    let name = props.name
    let tel = props.tel
    let chind = props.children
    return (
        <div className="test">
            <h1>test component { name } tel: { tel }  { chind }</h1>
            <Link to="/home/about">go to about</Link><br/>
            <Link to={{
                pathname:'/home',
                search:''
            }}>back to home</Link>
            <Route path="/home/about" component={ About }/>

        </div>
    )
}

export default Test
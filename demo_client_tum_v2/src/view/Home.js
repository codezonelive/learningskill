import React, { Component} from 'react'
import { Link } from  'react-router-dom'


const Home = () =>{

    return (
        <div className="home">
            <h1>Hello Home Page</h1>
            <Link to={{ pathname: '/about' }}>go to about</Link>
        </div>
    )
}

export default Home
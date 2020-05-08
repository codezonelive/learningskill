import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const Home = () =>{

    return (
        <div className="home">
            <h1>Hello Home Page </h1>
            <Link to ={{ pathname: '/about'}}>Go to About</Link>
        </div>
    )
}

export default Home;

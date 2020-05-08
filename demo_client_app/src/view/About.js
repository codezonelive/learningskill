import React from 'react';
import {Link} from 'react-router-dom'


const About = () =>{
    return(
        <div className="about">
            <h1>Hello About page</h1>
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default About;

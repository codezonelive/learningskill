import React from 'react'

const Post = (props) =>{
    let name = props.yourname
    let age = props.yourage
    let children = props.children
    let count = props.count
    return (
        <div className="post">
            <h1>Hello Post</h1>
            <br/>
            
            {
                count > 10 ?
                <h1>name: { name } age: { age } children: { children }</h1> :
                <h1>count: { count }</h1>
            }
            <hr/>
        </div>
    )
}

export default Post
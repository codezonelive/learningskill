import React from 'react';

const Post = (props) => {
    let name = props.fname
    let age = props.yourAge
    let children = props.children
    let count = props.count

    return(
        <div className="post">
            <h1>Hello Post</h1><br/>
            <h1>name: {name} age:{age} children:{children}</h1>
            {
                count > 10?
                <h1>name: {name} age:{age} children:{children}</h1>:
            <h1>count:{count}</h1>
            }
            <hr/>
        </div>
    )
}
export default Post;

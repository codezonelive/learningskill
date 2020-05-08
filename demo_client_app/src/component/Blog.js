import React from 'react';

const Blog = (data) =>{
    let id = data.id
    let name = data.name
    const onDeleteIndex = () =>{
        data.deleteIndex()
    }

    return (
        <div className="blog">
            <h1>id:{id} name:{name}</h1>
    <button onClick={onDeleteIndex}>delete id:{ id }</button>
        </div>
    )
}

export default Blog;
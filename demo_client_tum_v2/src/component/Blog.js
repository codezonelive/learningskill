import React from 'react'

const Blog = (data) =>{
    let id = data.id
    let name = data.name
    // console.log(id)
    const ondeleteindex = () =>{
        data.deleteindex()
    }
    return (
        <div className="blog">
            <h1>id: { id }  name: { name }</h1>
            <button onClick={ ondeleteindex }>delete id { id}</button>
        </div>
    )
}

export default Blog
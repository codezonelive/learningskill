import React from 'react'

const Test = (props) => {
    let name = props.name
    let tel = props.tel
    let chind = props.children
    return (
    <h1>test component { name } tel: { tel }  { chind }</h1>
    )
}

export default Test
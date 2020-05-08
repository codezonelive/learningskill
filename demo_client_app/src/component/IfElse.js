import React from 'react';

const IfElse = (data) => {
    let count = data.count

    const Plan1 = () =>{
        return(
            <div className="IfElse">
                <h1>if pass</h1>
            </div>
        )
    }

    const Plan2 = () =>{
        return (
            <div className="IfElse">
                <h1>else pass</h1>
            </div>
        )
    }
    
    return (
        <div>
            {
                count > 10?
            <Plan1/>:
            <Plan2/>           
            }
        </div>
    )
}

export default IfElse;
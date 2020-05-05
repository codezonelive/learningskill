import React from 'react'

const Testifelse = (data) => {
    let count = data.count
    console.log(count)

    const Plan1 = () =>{
        return (
            <div className="testifelse">
                <h1>if pass</h1>
            </div>
        )
    }

    const Plan2 = () =>{
        return (
            <div className="testifelse">
                <h1>else pass</h1>
            </div>
        )
    }

    return (
        <div>
            {
                count > 10?
                <Plan1/>:
                <Plan2></Plan2>
            }
        </div>
      
    )
}

export default Testifelse
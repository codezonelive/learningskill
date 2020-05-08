import React from 'react';

const TestState = (data) => {
    let count = data.count
    return(
        <div className="testState">
            <h1>count:{count}</h1>
        </div>
    )
}

export default TestState;


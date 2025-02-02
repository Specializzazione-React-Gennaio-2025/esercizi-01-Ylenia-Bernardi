import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="container mt-4">
            <h2>Counter</h2>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
            <p>Current count: {count}</p>
        </div>
    );
};

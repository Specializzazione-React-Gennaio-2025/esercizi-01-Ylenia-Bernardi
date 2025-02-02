import React, { useState } from 'react'

export default function DataList() {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);

    return (
        <div className="container mt-4">
            <h2>List of Fruits</h2>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};


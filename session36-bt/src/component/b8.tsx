import React, { useState, useEffect } from 'react';

export default function B8() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Giá trị hiện tại: ${count}`;
    }, [count]);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Giá trị hiện tại: {count}</p>
            <button onClick={handleIncrement}>Tăng</button>
        </div>
    );
};


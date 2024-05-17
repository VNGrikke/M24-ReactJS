import React, { useState, useEffect } from 'react';

export default function b7() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                setCount(prevCount => prevCount + 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <p>Bạn đã nhấn Enter {count} lần.</p>
        </div>
    );

}

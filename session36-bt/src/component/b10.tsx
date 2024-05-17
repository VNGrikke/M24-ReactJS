import React, { useState, useEffect } from 'react';

export default function B10() {

    const [keyCounts, setKeyCounts] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const key = event.key;
            setKeyCounts(prevKeyCounts => ({...prevKeyCounts,[key]: (prevKeyCounts[key] || 0) + 1,}));
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    return (
        <div>
            {Object.entries(keyCounts).map(([key, count]) => (
                <p key={key}>
                    Phím {key}: {count} lần
                </p>
            ))}
        </div>
    );
};


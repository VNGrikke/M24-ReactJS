import React, { useState, useEffect } from 'react';
export default function B6() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            Số giây đã trôi qua: {seconds}
        </div>
    );
}

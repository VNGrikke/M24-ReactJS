import React, { useState, useEffect } from 'react';
export default function b5() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div>
        Thời gian hiện tại: {time.toLocaleTimeString()}
      </div>
    );
}

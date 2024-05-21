import React, { useState, useMemo } from 'react';
export default function bt4() {
    const [trigger, setTrigger] = useState(0);
    const randomNumber = useMemo(() => {
      return Math.floor(Math.random() * 101);
    }, [trigger]);
  
    const generateRandomNumber = () => {
      setTrigger(prev => prev + 1);
    };
    return (
      <div>
        <p>Số nguyên ngẫu nhiên: {randomNumber}</p>
        <button onClick={generateRandomNumber}>Generate</button>
      </div>
    );
};


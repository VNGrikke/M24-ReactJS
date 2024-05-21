
import React, { useState, useEffect } from 'react';

export default function bt1() {

  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};


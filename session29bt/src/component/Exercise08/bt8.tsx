import React, { useState } from 'react';


export default function bt8() {
  
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={incrementCount}>click {count} lần</button>
    </div>
  );
}


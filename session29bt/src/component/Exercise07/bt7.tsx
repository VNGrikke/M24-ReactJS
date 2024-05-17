import React, { useState } from 'react';

export default function bt7() {
  const [numbers, setNumbers] = useState<number[]>([]); 

  const addNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    setNumbers([...numbers, randomNumber]); 
  };
  const displayNumbers = () => {
    return numbers.length > 0 ? ` Mảng số: [${numbers.join(', ')}]` : 'Mảng số: []';
  };

  return (
    <div>
      <button onClick={addNumber}>Thêm số nguyên dương</button>
      <div>{displayNumbers()}</div>
    </div>
  );
}

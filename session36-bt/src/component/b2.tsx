import React, { useState, useEffect, ChangeEvent} from 'react'
export default function B2() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click {count} lần
      </button>
    </div>
  );
}

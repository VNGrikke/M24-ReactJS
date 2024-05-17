import React, { useState } from 'react';


export default function bt6() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {setIsVisible(!isVisible);};
  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hiển' : 'Ẩn'}
      </button>
    </div>
  );
}

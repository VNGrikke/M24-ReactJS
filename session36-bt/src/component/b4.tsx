import React, { useRef, useEffect } from 'react';


export default function B4() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me..." />
    </div>
  );
};



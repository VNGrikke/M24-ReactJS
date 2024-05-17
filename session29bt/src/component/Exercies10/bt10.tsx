import React, { useState } from 'react';


export default function bt10() {
  const [gender, setGender] = useState('Nam');
  const genders = ['Nam', 'Nữ', 'Khác'];
  const randomizeGender = () => {
    const randomIndex = Math.floor(Math.random() * genders.length);
    setGender(genders[randomIndex]);
  };

  return (
    <div>
      <p>Giới tính: {gender}</p>
      <button onClick={randomizeGender}>Random gender</button>
    </div>
  );
}

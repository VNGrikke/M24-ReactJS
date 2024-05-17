import React, { useState } from 'react';

export default function bt3() {

  const [dateValue, setDateValue] = useState('');

  const handleDateChange = (event:any) => {
    setDateValue(event.target.value);
  };

  return (
    <div>
      <p>Thời gian: {dateValue}</p>
      <input type="date" value={dateValue} onChange={handleDateChange} />
    </div>
  );
};


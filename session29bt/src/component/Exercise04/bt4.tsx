import React, { useState } from 'react';


export default function bt4() {
  
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event:any) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
        <option value="">Chọn thành phố</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh </option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Hải Dương">Hải Dương</option>
      </select>
      <p>Tỉnh/thành phố: {selectedCity}</p>
    </div>
  );
};


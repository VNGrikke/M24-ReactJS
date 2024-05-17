import React, { useState } from 'react';
export default function bt9() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  }); 
  const [displayInfo, setDisplayInfo] = useState('');
  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,[name]: value
    });
  };
  const handleSubmit = (event:any) => {
    event.preventDefault(); 
    const info = `Email: ${formData.email}, Password: ${formData.password}`;
    setDisplayInfo(info);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email}onChange={handleInputChange} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{displayInfo}</div>
    </div>

  );
}

import React from 'react'

export default function bt6(props) {
    const { user } = props;
  
    return (
      <div>
        <h3>Thông tin bên con</h3>
        <p>ID: {user.id}</p>
        <p>Tên: {user.name}</p>
        <p>email: {user.email}</p>
        <p>địa chỉ: {user.address}</p>
      </div>
    );
  
}

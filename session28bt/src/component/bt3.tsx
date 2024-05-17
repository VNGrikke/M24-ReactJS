import React, { useState } from 'react'


export default function bt3() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Nguyen Van Vuong', address: 'HD' },
        { id: 2, name: 'NGuyen Van', address: 'HN' },
        { id: 3, name: 'Vuong', address: 'HCM' }
      ]);
  return (
    <ul>
        {users.map(user => (
            <li key={user.id}>Họ và tên: {user.name}</li>
        ))}
    </ul>
  )
}



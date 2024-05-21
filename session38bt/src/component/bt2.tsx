
import React, { useState, useMemo } from 'react';
export default function bt2() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyen Van A', age: 16 },
    { id: 2, name: 'Tran Thi B', age: 21 },
    { id: 3, name: 'Le Van C', age: 30 },
  ]);

  const usersUnder18 = useMemo(() => {
    return users.filter(user => user.age < 18);
  }, [users]);

  return (
    <div>
      <h2>Danh Sách Người Dùng Dưới 18 Tuổi</h2>
      <ul>
        {usersUnder18.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
};
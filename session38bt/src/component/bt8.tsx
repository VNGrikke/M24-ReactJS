import React, { useState, useMemo } from 'react';
import Child from './bt8child';

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

const initialUsers: User[] = [
  { id: 1, name: 'Vuong', email: 'V@example.com', address: 'DS' },
  { id: 2, name: 'Hung', email: 'H@example.com', address: 'HH' },
];

export default function bt8() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [newUser, setNewUser] = useState<User>({ id: 0, name: '', email: '', address: '' });

  const memoizedUsers = useMemo(() => users, [users]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ id: 0, name: '', email: '', address: '' });
  };

  return (
    <div>
      <h2>User List</h2>
      <form onSubmit={handleAddUser}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={newUser.address}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>stt</th>
            <th>name</th>
            <th>email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {memoizedUsers.map((user) => (
            <Child key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

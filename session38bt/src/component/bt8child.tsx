import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

interface ChildProps {
  user: User;
}
export default function bt8child(prop: ChildProps) {
  const { user } = prop;
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
    </tr>
  );
};


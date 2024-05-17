import React from 'react'
import Bt6 from './component/bt6';
export default function parent3() {
    const user = {
        id: 1,
        name: 'Nguyễn Văn Vương',
        email: "V@gmail.com",
        address: 3
      };
      return (
        <div>
            <h2>Thong tin ben cha</h2>
            <p>ID: {user.id}</p>
            <p>Tên: {user.name}</p>
            <p>email: {user.email}</p>
            <p>địa chỉ: {user.address}</p>
            <Bt6 user={user} />
        </div>
      );
}

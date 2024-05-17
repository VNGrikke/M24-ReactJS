import React from 'react'
import Bt4 from './component/bt4'

export default function parent() {
    const parentName:string = "Nguyen Van Vuong";

    return (
      <div>
        <p>Họ tên bên component cha: {parentName}</p>
        <Bt4 name={parentName} />
      </div>
    );
}

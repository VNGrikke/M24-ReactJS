import React from 'react'

export default function bt4(props: Props) {
    const { name } = props;
  return (
    <div>
      <p>Họ tên bên component con: {name}</p>
    </div>
  )
}

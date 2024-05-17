import React, { useState } from 'react'

interface User {
  name: string,
  id: number,
  email: string
}
export default function input() {
  const [user, setUser] = useState({
    name: '',
    id: 0,
    email: '',
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    let value = e.target.value
    setUser({...user,name: value})
  }
  
  return (
    <>
      <label htmlFor="">User name:</label>
      <input type="text" name='name' onChange={handleChange} />
      <br />
      <label htmlFor="">Email:</label>
      <input type="text" name='email' onChange={handleChange} />
      <br />
    </>
  )
}

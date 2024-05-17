import React, { useState } from 'react'

export default function statefunction() {
    const [number,setNumber] = useState<number>(1);
    const [name,setFullName] = useState<string>("Vương")
    const handleClick =() =>{
        setNumber(number+1)
    }
    return (
    <div>statefunction
        <p>giá trị number ban đầu{number}</p>
        <button onClick={handleClick}>tăng</button>
        <p>xin chào {name}</p>
    </div>
  )
}

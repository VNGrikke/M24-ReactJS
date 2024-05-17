import React, {useState} from 'react'

export default function bt2() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e:any) => {
        setInputValue(e.target.value)
    }
  return (
    <div>
        <div>Dữ liệu người dùng nhập: {inputValue}</div>
        <input onChange={handleChange} type="text" name="" id="" />
    </div>
  )
}

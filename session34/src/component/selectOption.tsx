import React, { useState } from 'react'

export default function selectOption() {
    const [select,setSelect] = useState<string>("") 
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(e.target.value)
    }
    console.log(select);
    
  return (
    <>
        <select name="" id="" onChange={handleChange}>
            <option value="nam">Nam</option>
            <option value="nữ">Nữ</option>
            <option value="khác">Quân</option>
        </select>
    
    </>
  )
}

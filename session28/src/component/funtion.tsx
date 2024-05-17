import React from 'react'

interface Props{
    name:string,
    student:string[],
}
export default function Functional(props:Props) {
    console.log("111", props);
    const {name} = props;
    const {student} = props;
    return (
        <div>funtion
            <p>xin chào {name}</p>
        </div>
  )
}

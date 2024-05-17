import React from 'react'

export default function bt1() {
    const handleClick = () => {
        console.log('clicked')
    }
  return (
    <div>
        <button onClick={handleClick}>click meee</button>
    </div>
  )
}

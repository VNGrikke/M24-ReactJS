import { useState } from 'react';
import Function from './component/funtion';
import Class from './component/class';
import Stateclass from './component/stateclass';
import Statefunction from './component/statefunction'
import './App.css'

function App() {
  const fullName:string = "Vuong"
  const student:string[] = ["Hoa","Hue","Mai"]
  const age:number = 14;
  return (
    <>
      {/* <Function name={fullName} student={student}/> */}
      {/* <Class age={age} /> */}
      <Stateclass />
      <Statefunction />
    </>
  )
}

export default App

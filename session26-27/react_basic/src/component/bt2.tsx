import './bt1.css'

let number1: number = 10
let number2: number = 10
function App2() {
  return (
    
    <>
      <h3>Danh sách khóa học</h3>
      <ul>
       <li>{number1} - {number2} = {number1 - number2}</li>
       <li>{number1} + {number2} = {number1 + number2}</li>
       <li>{number1} * {number2} = {number1 * number2}</li>
       <li>{number1} / {number2} = {number1 / number2}</li>
      </ul>
    </>
  )
}

export default App2

import React, { Component } from 'react'

interface ClassComponent {
    numbers:number[];
}
export default class Class extends Component<ClassComponent>{
  //destructoring
  render() {
    // const {age} = this.props
    return (
      <div>class
        {/* <p>Năm nay minh thu {this.props.age} tuổi</p> */}
        {/* <p>Năm nay minh thu {age} tuổi</p> */}

        <ul>
            {this.props.numbers.map((item:number,index:number) =>{
                return <li key={index}>{item}</li>
            })}
        </ul>
      </div>
    )
  }
}

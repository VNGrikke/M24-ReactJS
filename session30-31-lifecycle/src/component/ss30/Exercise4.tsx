import React, { Component } from 'react'
interface Props{
    slogan: string;
}
interface State{
    slogan: string;
}
export default class Exercise4 extends Component<Props,State> {
    constructor(prop:Props){
        super(prop);
        this.state = {
            slogan: "Học code để đi làm"
        }
    }
    changeSlogan = () => {
        this.setState({
            slogan: "mai e nghỉ học:>"
        })
    }
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        return nextState.slogan !== this.state.slogan;
    }

  render() {
    return (
      <div>
        <p>slogan:{this.state.slogan}</p>
        <button onClick={this.changeSlogan}>Change State</button>
      </div>
    )
  }
}

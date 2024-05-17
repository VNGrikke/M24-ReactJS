import React, { Component, ComponentState } from 'react'

interface Bt1State {
    name: string;
}

export default class bt1 extends Component<ComponentState, Bt1State> {
  
  constructor(props: ComponentState) {
    super(props)
    this.state = {
      name: 'Nguyen Van Vuong'
    }
  }
  render() {
    return (
        <b>Họ tên: {this.state.name}</b>
    )
  }
}




import React, { Component } from 'react';

interface Exercise1State {
  userName: string;
}


export default class Exercise1 extends Component<{}, Exercise1State>  {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: 'Vuong Nguyen'
    };
  }

  render() {
    return (
      <div>
        <p>Ten: {this.state.userName}</p>
      </div>
    );
  }
}


import React, { Component } from 'react';

interface Exercise3State {
  message: string;
}

export default class Exercise3  extends Component<{}, Exercise3State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: 'Rikkei Academy'
    };
  }

  handleChangeMessage = () => {
    this.setState({ message: 'RikkeiSoft' });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleChangeMessage}>Change Message</button>
      </div>
    );
  }
}

